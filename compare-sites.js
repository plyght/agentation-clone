const pages = [
  '/',
  '/install',
  '/features',
  '/output',
  '/schema',
  '/mcp',
  '/api',
  '/webhooks',
  '/changelog',
  '/blog',
  '/faq',
  '/colophon'
];

const localhostBase = 'http://localhost:3000';
const prodBase = 'https://agentation.dev';

const results = {
  pages: [],
  summary: {
    totalPages: pages.length,
    pagesWithDifferences: 0,
    criticalIssues: [],
    minorIssues: []
  }
};

async function comparePage(page, path) {
  const result = {
    path,
    localhost: {},
    production: {},
    differences: []
  };

  await page.goto(`${localhostBase}${path}`);
  await page.waitForLoadState('networkidle');
  
  result.localhost = {
    title: await page.title(),
    url: page.url(),
    mainTag: await page.evaluate(() => document.querySelector('main')?.tagName),
    articleTag: await page.evaluate(() => document.querySelector('article')?.tagName),
    h1Count: await page.evaluate(() => document.querySelectorAll('h1').length),
    h2Count: await page.evaluate(() => document.querySelectorAll('h2').length),
    navLinks: await page.evaluate(() => 
      Array.from(document.querySelectorAll('nav a')).map(a => a.textContent.trim()).filter(t => t && !t.includes('@keyframes'))
    ),
    hasNpmBadge: await page.evaluate(() => !!document.querySelector('a[href*="npmjs.com"]')),
    consoleErrors: []
  };

  await page.screenshot({ path: `screenshots/localhost${path.replace(/\//g, '-') || '-home'}.png`, fullPage: true });

  await page.goto(`${prodBase}${path}`);
  await page.waitForLoadState('networkidle');
  
  result.production = {
    title: await page.title(),
    url: page.url(),
    mainTag: await page.evaluate(() => document.querySelector('main')?.tagName),
    articleTag: await page.evaluate(() => document.querySelector('article')?.tagName),
    h1Count: await page.evaluate(() => document.querySelectorAll('h1').length),
    h2Count: await page.evaluate(() => document.querySelectorAll('h2').length),
    navLinks: await page.evaluate(() => 
      Array.from(document.querySelectorAll('nav a')).map(a => a.textContent.trim()).filter(t => t && !t.includes('@keyframes'))
    ),
    hasNpmBadge: await page.evaluate(() => !!document.querySelector('a[href*="npmjs.com"]')),
    consoleErrors: []
  };

  page.on('console', msg => {
    if (msg.type() === 'error') {
      result.production.consoleErrors.push(msg.text());
    }
  });

  await page.screenshot({ path: `screenshots/production${path.replace(/\//g, '-') || '-home'}.png`, fullPage: true });

  if (result.localhost.title !== result.production.title) {
    result.differences.push({ type: 'title', localhost: result.localhost.title, production: result.production.title });
  }

  if (result.localhost.mainTag !== result.production.mainTag) {
    result.differences.push({ type: 'mainTag', localhost: result.localhost.mainTag, production: result.production.mainTag });
  }

  if (result.localhost.articleTag !== result.production.articleTag) {
    result.differences.push({ 
      type: 'articleTag', 
      severity: 'critical',
      localhost: result.localhost.articleTag || 'none', 
      production: result.production.articleTag || 'none',
      description: 'Production uses <article> tag, localhost uses <div>'
    });
  }

  if (result.localhost.h1Count !== result.production.h1Count) {
    result.differences.push({ type: 'h1Count', localhost: result.localhost.h1Count, production: result.production.h1Count });
  }

  if (result.localhost.h2Count !== result.production.h2Count) {
    result.differences.push({ type: 'h2Count', localhost: result.localhost.h2Count, production: result.production.h2Count });
  }

  if (result.localhost.hasNpmBadge !== result.production.hasNpmBadge) {
    result.differences.push({ 
      type: 'npmBadge', 
      severity: 'critical',
      localhost: result.localhost.hasNpmBadge, 
      production: result.production.hasNpmBadge,
      description: 'NPM badge presence differs'
    });
  }

  const localhostNavSet = new Set(result.localhost.navLinks);
  const productionNavSet = new Set(result.production.navLinks);
  const navDiff = [...localhostNavSet].filter(x => !productionNavSet.has(x)).concat(
    [...productionNavSet].filter(x => !localhostNavSet.has(x))
  );
  
  if (navDiff.length > 0) {
    result.differences.push({ 
      type: 'navLinks', 
      severity: 'minor',
      difference: navDiff,
      description: 'Navigation links differ'
    });
  }

  if (result.production.consoleErrors.length > 0) {
    result.differences.push({
      type: 'consoleErrors',
      severity: 'critical',
      count: result.production.consoleErrors.length,
      errors: result.production.consoleErrors.slice(0, 3),
      description: 'Production site has console errors'
    });
  }

  if (result.differences.length > 0) {
    results.summary.pagesWithDifferences++;
    
    result.differences.forEach(diff => {
      if (diff.severity === 'critical') {
        results.summary.criticalIssues.push({ page: path, ...diff });
      } else if (diff.severity === 'minor') {
        results.summary.minorIssues.push({ page: path, ...diff });
      }
    });
  }

  results.pages.push(result);
  return result;
}

module.exports = { pages, comparePage, results };
