import "../style.css";

export default function Uncinc() {
  return (
    <>
      <section className='work'>
        <div className='work_intro'>
          <h1>Plantswap</h1>
          <h2>A green community project</h2>
        </div>

        <section className='content'>
          <article className='work_description'>
            <p>
              A school project I revisited involved collaborating with
              Buurtcampus Oost to bring their PlantSwap website to
              life. The project was connected to their plant-cutting
              exchange initiative, designed to bring the community of
              Amsterdam Oost together in a fun and green way.
            </p>
          </article>
          <div className='work_info'>
            <h3>This work was built with... </h3>
            <ul>
              <li>Vue.js</li>
              <li>Figma</li>
              <li>Gsap</li>
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
