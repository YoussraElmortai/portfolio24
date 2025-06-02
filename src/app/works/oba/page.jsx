import "../style.css";

export default function Uncinc() {
  return (
    <>
      <section className='work'>
        <div className='work_intro'>
          <h1>Oba</h1>
          <h2>Re-designing the OBA website</h2>
        </div>

        <section className='content'>
          <article className='work_description'>
            <p>
              During my studies, I was able to work on a few projects
              for the Openbare Bibliotheek Amsterdam (OBA). I wanted
              to revisit one of those projects and build a new
              homepage, keeping in mind the style guide I used during
              my studies.
            </p>
          </article>
          <div className='work_info'>
            <h3>This work was built with... </h3>
            <ul>
              <li>Svelte</li>
              <li>Figma</li>
              <li>CSS animations</li>
            </ul>
          </div>

          <div className='work_highlights'>
            <h2>Highlights</h2>
          </div>
        </section>

        <div className='work_links'>
          <a className='links' href='/'>
            <img src='/arrow.svg' /> Back to home
          </a>
        </div>
      </section>
    </>
  );
}
