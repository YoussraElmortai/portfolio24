import "./style.css";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href='/'>
                <h1>YOUS</h1>
              </a>
            </li>
            <li>
              <a href='/Projects'>projects</a>
            </li>
            <li>
              <a href='/About'>about</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
