import "../style.css";

export default function Uncinc() {
  return (
    <>
      <section className='work'>
        <div className='work_intro'>
          <h1>The Substance</h1>
          <h2>Control yourself</h2>
        </div>

        <section className='content'>
          <article className='work_description'>
            <p>
              As tiny little project i did inspred by the movie the
              substance. Because of the theme's of the movie i thoght
              it would be funny to make a website that promotes the
              substance just like the tv commerical i the movie.
            </p>
          </article>
          <div className='work_info'>
            <h3>This work was built with... </h3>
            <ul>
              <li>React</li>
              <li>Gsap</li>
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
