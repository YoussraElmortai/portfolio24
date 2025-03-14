import "../style.css";

export default function Uncinc() {
  return (
    <>
      <section className='work'>
        <h1>Unc inc</h1>
        <article className='work_description'>
          <p>
            As a Frontend developer intern I contributed to the
            development and enhancement of frontend components for the
            Unc Inc corporate website, playing a key role in improving
            its functionality and user experience. I also expanded and
            refined the existing component library, ensuring greater
            consistency and efficiency across projects. Using Docker,
            I managed and modified Drupal fields to meet client needs
            effectively. Additionally, I identified and resolved bugs
            on various client websites, significantly improving their
            accessibility, performance, and overall user satisfaction.
          </p>
        </article>
        <div className='work_info'>
          <ul>
            <li>
              Live website<a href=''></a>
            </li>
            <li>
              my role:<span>Frontend Developer intern</span>
            </li>
          </ul>
        </div>
        <img src='/./bear.jpg'></img>
        <a href='/works'>Back to projects</a>
      </section>
    </>
  );
}
