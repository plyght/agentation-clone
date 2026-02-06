
export default function Colophon() {
  return (
      <main className="main-content">
        <div className="colophon-content">
          <p>Agentation is a React component for annotating web pages and generating structured feedback for AI coding agents. Zero runtime dependencies beyond React 18+, written in TypeScript with full type definitions. Available on <a href="https://www.npmjs.com/package/agentation">npm</a> and <a href="https://github.com/benjitaylor/agentation">GitHub</a>.</p>
          <p>Made by <a href="https://x.com/benjitaylor">Benji Taylor</a>, <a href="https://x.com/seldom">Dennis Jin</a>, and <a href="https://x.com/alexvanderzon">Alex Vanderzon</a>, with help from <a href="https://claude.ai/code">Claude Code</a>. See <a href="https://benji.org/annotating">the original post</a> for more on the motivation behind the project.</p>
          
          <div className="colophon-ascii">{`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣤⡄⢠⣤⣤⡄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡟⢦⡀⠛⣿⠁⠀⢹⣇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢻⡆⠓⡆⠛⣶⠀⠀⣿⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢹⡆⠓⡄⢹⡆⠀⠉⣷⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡇⢹⠈⢹⡇⠀⡿⣤⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⡀⠈⣿⣀⣹⠀⠙⠛⠃⠘⠛⢣⣄⠀
⠀⠀⠀⠀⣰⠶⠞⠛⠛⠛⠛⠳⠶⣆⡿⠀⠀⠀⠀⢀⣀⣤⠀⠙⣷
⠀⠀⣤⠾⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠸⠿⠿⠀⠀⣉⣷
⠀⢸⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿
⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣤⡟⠛
⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀
⠸⢧⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀
⠀⠺⣧⡀⢠⣀⠀⠀⣀⣟⠛⠛⣧⣄⡀⠀⠀⣸⡇⠀⣿⠉⠀⠀⠀
⠀⠀⠀⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠀⠀⠀⠀⠀⠀`}</div>

          <div className="colophon-details">
            <div className="colophon-detail">
              <span className="colophon-label">Framework</span>
              <span className="colophon-value"><a href="https://nextjs.org">Next.js</a></span>
            </div>
            <div className="colophon-detail">
              <span className="colophon-label">Hosting</span>
              <span className="colophon-value"><a href="https://vercel.com">Vercel</a></span>
            </div>
            <div className="colophon-detail">
              <span className="colophon-label">Typeface</span>
              <span className="colophon-value"><a href="https://rsms.me/inter">Inter</a></span>
            </div>
            <div className="colophon-detail">
              <span className="colophon-label">Icons</span>
              <span className="colophon-value"><a href="https://dip.org">Dip</a></span>
            </div>
            <div className="colophon-detail">
              <span className="colophon-label" style={{display:"flex",alignItems:"center",gap:"4px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="11" viewBox="0 0 20 20" width="11" fill="currentColor" style={{opacity:0.5}}>
                  <path d="M10.75,6.37C11.39,6.15,11.9,5.64,12.12,5H15l-2.5,5.75c0,1.24,1.23,2.25,2.75,2.25c1.52,0,2.75-1.01,2.75-2.25L15.5,5H17 V3.5h-4.88C11.81,2.63,10.98,2,10,2S8.19,2.63,7.88,3.5H3V5h1.5L2,10.75C2,11.99,3.23,13,4.75,13s2.75-1.01,2.75-2.25L5,5h2.88 C8.1,5.64,8.61,6.15,9.25,6.37v9.13H2V17h16v-1.5h-7.25V6.37z M16.91,10.75h-3.32l1.66-3.82L16.91,10.75z M6.41,10.75H3.09 l1.66-3.82L6.41,10.75z M10,5C9.59,5,9.25,4.66,9.25,4.25C9.25,3.84,9.59,3.5,10,3.5s0.75,0.34,0.75,0.75C10.75,4.66,10.41,5,10,5z" />
                </svg>
                License
              </span>
              <span className="colophon-value"><a href="https://github.com/benjitaylor/agentation/blob/main/LICENSE">PolyForm Shield</a></span>
            </div>
          </div>
        </div>
      </main>
  );
}
