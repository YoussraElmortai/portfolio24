import "../style.css";

export default function Uncinc() {
  return (
    <>
      <section className='work'>
        <div className='work_intro'>
          <h1>Unc inc</h1>
          <h2>New corporate website</h2>
        </div>

        <section className='content'>
          <article className='work_description'>
            <p>
              As a Frontend developer intern I contributed to the
              development and enhancement of frontend components for
              the Unc Inc corporate website, playing a key role in
              improving its functionality and user experience. I also
              expanded and refined the existing component library.
            </p>
          </article>
          <div className='work_info'>
            <h3>This work was built with... </h3>
            <ul>
              <li>React</li>
              <li>Drupal</li>
              <li>CSS animations</li>
            </ul>
          </div>

          <div className='work_highlights'>
            <h2>Highlights</h2>
          </div>
        </section>

        <div className='work_links'>
          <a className='links' href='/works'>
            <img src='/arrow.svg' /> Back to works
          </a>
        </div>
      </section>
    </>
  );
}
