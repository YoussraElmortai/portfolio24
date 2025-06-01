import "./style.css";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href='/'>
                <img src="/heart.svg"/>
              </a>
            </li>
            <li>
              <a href='/works'>works</a>
            </li>
            <li>
              <a href='/about'>about</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
