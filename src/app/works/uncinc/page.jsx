import "../style.css";

export default function Uncinc() {
  return (
    <>
      <section className='work'>
        <div className="work_intro">
        <h1>Unc inc</h1>
        <h2>New corporate website</h2>
        </div>
        <div className='work_bento'>
          <article className='work_description'>
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
          <div className='work_info'>
            <ul>
              <li>
                my role: <span>Frontend Developer intern</span>
              </li>
              <li>
                Techstack: <span>Frontend Developer intern</span>
              </li>
            </ul>
          </div>
          <div className="work_animated">
            aimated pic
          </div>
          <div className="work_colors">
            colors of projects
          </div>
          <div className='stacked'>
            <img className='work_image' src='/bear.jpg'></img>
          </div>
          <div className="work_links">
            <a className='links' href='/works'>
              <img src='/arrow.svg' /> Back to works
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
