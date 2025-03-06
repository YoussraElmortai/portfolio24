import "./style.css";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href='/'>
                <h1>Yous</h1>
              </a>
            </li>
            <li>< a href="/projects">projects</a></li>
            <li>
              <a href='/resume'>resume</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
