import "./style.css";

export default function resume() {
  return (
    <>
      <section className='resume_intro'>
        <h1>Youssra Elmortai</h1>
        <article>
          <p>
            Frontend developer with full stack ambitions and a strong
            focus on accessibility and interaction.{" "}
          </p>
        </article>
        <span>
          feel free to download a PDF version of this resume
        </span>
      </section>

      <nav className='resume_nav'>
        <ul>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#education'>Education</a>
          </li>
          <li>
            <a href='#expertise'>Expertise</a>
          </li>
        </ul>
      </nav>

      <hr />

      <section className='resume_section' id='experience'>
        <h2>Experience</h2>

        <div className='content'>
          <article>
            <h3>frontend developer at Unc inc</h3>

            <div className='time'>
              <time dateTime='2024-02'>February 2024</time> —{" "}
              <time dateTime='2024-06'>June 2024</time>
            </div>

            <p>
              As a Frontend developer intern I contributed to the
              development and enhancement of frontend components for
              the Unc Inc corporate website, playing a key role in
              improving its functionality and user experience. I also
              expanded and refined the existing component library,
              ensuring greater consistency and efficiency across
              projects. Using Docker, I managed and modified Drupal
              fields to meet client needs effectively. Additionally, I
              identified and resolved bugs on various client websites,
              significantly improving their accessibility,
              performance, and overall user satisfaction.
            </p>
          </article>
        </div>
      </section>

      <hr />

      <section className='resume_section' id='education'>
        <h2>Education</h2>

        <div className='content'>
          <article>
            <h3>Amsterdam University of Applied Sciences</h3>
            <h4>
              associate bachelor degree in Frontend development and
              design
            </h4>
            <div className='time'>
              <time dateTime='2022-03'>September 2022</time> —{" "}
              <time dateTime='2024-07'>June 2024</time>
            </div>

            <p>
              I majored in Frontend Development and Design, where I
              gained hands-on experience by collaborating with local
              agencies and businesses on small projects each semester.
            </p>
          </article>
        </div>
      </section>

      <hr />

      <section className='resume_section' id='expertise'>
        <h2>Expertise</h2>

        <div className='content'>
          <article>
            <h3>HTML</h3>
            <ul>
              <li>HTML</li>
            </ul>
          </article>

          <article>
            <h3>HTML</h3>
            <ul>
              <li>HTML</li>
            </ul>
          </article>

          <article>
            <h3>HTML</h3>
            <ul>
              <li>HTML</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
