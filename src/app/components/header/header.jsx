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
              <a href='/resume'>resume</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
