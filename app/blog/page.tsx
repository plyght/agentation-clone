import SideNav from "../components/SideNav";

export default function Blog() {
  return (
    <>
      <SideNav />
      <main className="main-content">
        <div className="article">
          <header>
            <h1>Blog</h1>
            <p className="tagline">Announcements and updates</p>
          </header>

          <section>
            <a className="blog-card" href="/blog/introducing-agentation-2">
              <img src="/blog/agentation-2-og.png" alt="Introducing Agentation 2.0" />
              <div className="blog-card-meta">
                <h3>Introducing Agentation 2.0</h3>
                <span className="dot">&bull;</span>
                <time>February 5, 2026</time>
              </div>
              <p>Annotations become a two-way conversation. Your AI agent can now see, respond to, and resolve your feedback in real time.</p>
            </a>
          </section>
        </div>

        <footer className="footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p>Made by{" "}<a href="https://x.com/benjitaylor" target="_blank" rel="noopener noreferrer">Benji Taylor</a>,{" "}<a href="https://x.com/seldom" target="_blank" rel="noopener noreferrer">Dennis Jin</a>, and{" "}<a href="https://x.com/alexvanderzon" target="_blank" rel="noopener noreferrer">Alex Vanderzon</a></p>
          <a href="/colophon">Colophon</a>
        </footer>
      </main>
    </>
  );
}
