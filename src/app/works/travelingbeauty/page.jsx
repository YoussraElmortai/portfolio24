import "../style.css";

export default function Uncinc() {
  return (
    <>
      <section className='work'>
        <div className='work_intro'>
          <h1>Traveling Beauty</h1>
          <h2>Bringing wellness home</h2>
        </div>

        <section className='content'>
          <article className='work_description'>
            <p>
              An ongoing project to build a fun website for an equally
              fun beauty salon based in Amsterdam with the mission of
              bringing wellness to you.
            </p>
          </article>
          <div className='work_info'>
            <h3>This work was built with... </h3>
            <ul>
              <li>Svelte</li>
              <li>Figma</li>
              <li>CSS scroll(view)</li>
              <li>Webforms</li>
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
