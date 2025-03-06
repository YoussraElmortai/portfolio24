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
            <a href='#certifications'>Certifications</a>
          </li>
          <li>
            <a href='#expertise'>Expertise</a>
          </li>
        </ul>
      </nav>

      <hr />

      <section className='resume_wrapper' id='experience'>
        <h2>experience</h2>

        <article>
          <h3>frontend developer at Unc inc</h3>

          <div className='time'>
            <time dateTime='2024-02'>February 2024</time> —{" "}
            <time dateTime='2024-06'>June 2024</time>
          </div>

          <p>
            I contributed to the development and enhancement of
            frontend components for the Unc Inc corporate website,
            playing a key role in improving its functionality and user
            experience. I also expanded and refined the existing
            component library, ensuring greater consistency and
            efficiency across projects. Using Docker, I managed and
            modified Drupal fields to meet client needs effectively.
            Additionally, I identified and resolved bugs on various
            client websites, significantly improving their
            accessibility, performance, and overall user satisfaction.
          </p>
        </article>
      </section>

      <hr />

      <section className='resume_wrapper' id='education'>
        <h2>education</h2>

        <article>
          <h3>frontend developer at Unc inc</h3>

          <div className='time'>
            <time dateTime='2024-02'>February 2024</time> —{" "}
            <time dateTime='2024-06'>June 2024</time>
          </div>

          <p>
            I contributed to the development and enhancement of
            frontend components for the Unc Inc corporate website,
            playing a key role in improving its functionality and user
            experience. I also expanded and refined the existing
            component library, ensuring greater consistency and
            efficiency across projects. Using Docker, I managed and
            modified Drupal fields to meet client needs effectively.
            Additionally, I identified and resolved bugs on various
            client websites, significantly improving their
            accessibility, performance, and overall user satisfaction.
          </p>
        </article>
      </section>

      <hr />

      <section className='resume_wrapper' id='certifications'>
        <h2>experience</h2>

        <article>
          <h3>frontend developer at Unc inc</h3>

          <div className='time'>
            <time dateTime='2024-02'>February 2024</time> —{" "}
            <time dateTime='2024-06'>June 2024</time>
          </div>

          <p>
            I contributed to the development and enhancement of
            frontend components for the Unc Inc corporate website,
            playing a key role in improving its functionality and user
            experience. I also expanded and refined the existing
            component library, ensuring greater consistency and
            efficiency across projects. Using Docker, I managed and
            modified Drupal fields to meet client needs effectively.
            Additionally, I identified and resolved bugs on various
            client websites, significantly improving their
            accessibility, performance, and overall user satisfaction.
          </p>
        </article>
      </section>

      <hr />

      <section className='resume_wrapper' id='expertise'>
        <h2>experience</h2>

        <article>
          <h3>frontend developer at Unc inc</h3>

          <div className='time'>
            <time dateTime='2024-02'>February 2024</time> —{" "}
            <time dateTime='2024-06'>June 2024</time>
          </div>

          <p>
            I contributed to the development and enhancement of
            frontend components for the Unc Inc corporate website,
            playing a key role in improving its functionality and user
            experience. I also expanded and refined the existing
            component library, ensuring greater consistency and
            efficiency across projects. Using Docker, I managed and
            modified Drupal fields to meet client needs effectively.
            Additionally, I identified and resolved bugs on various
            client websites, significantly improving their
            accessibility, performance, and overall user satisfaction.
          </p>
        </article>
      </section>
    </>
  );
}
