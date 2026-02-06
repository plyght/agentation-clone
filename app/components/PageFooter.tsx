import Link from "next/link";

export default function PageFooter() {
  return (
    <footer
      className="footer"
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
    >
      <p>
        Made by{" "}
        <a href="https://x.com/benjitaylor" target="_blank" rel="noopener noreferrer">
          Benji Taylor
        </a>
        ,{" "}
        <a href="https://x.com/seldom" target="_blank" rel="noopener noreferrer">
          Dennis Jin
        </a>
        , and{" "}
        <a href="https://x.com/alexvanderzon" target="_blank" rel="noopener noreferrer">
          Alex Vanderzon
        </a>
      </p>
      <Link href="/colophon">Colophon</Link>
    </footer>
  );
}
