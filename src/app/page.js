

export default function Home() {
  return (
    <>
    <div className="circle"/>
      <header>
        <nav>
          <ul>
            <li>
              <a href="about">about</a>
            </li>
            <li>
              <a href="projects">projects</a>
            </li>
            <li>
              <a href="contact">contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>youssra Elmortai</h1>
        <p>Frontend developer and <span className="accent">Designer</span></p>
      </main>

      <footer>
        <ul>
          <li><a href=""><img src="linkedin.svg"></img></a></li>
          <li><a href=""><img src="github.svg"></img></a></li>
          <li><a href=""><img src="instagram.svg"></img></a></li>
        </ul>
      </footer>
    </>

  );
}
