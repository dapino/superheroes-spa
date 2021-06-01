const Header = () => {
  const view = `
    <header class="navbar">
      <div class="navbar__logo">
        <h1>
          <a href="/">Marvel</a>
        </h1>
      </div>
      <nav class="navbar__nav">
        <a href="#/characters/">Characters</a>
        <a href="#/about/">About</a>
      </nav>
    </header>
  `;
  return view;
};

export default Header;
