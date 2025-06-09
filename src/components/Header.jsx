export default function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <h1>Pocket-Galary-UA</h1>
      </div>
      <nav className="nav-links">
        <a href="/">Головна</a>
        <a href="/section/war">Війна</a>
        <a href="/section/contemporary">Сучасне</a>
        <a href="/section/digital">Digital</a>
      </nav>
    </header>
  );
}
