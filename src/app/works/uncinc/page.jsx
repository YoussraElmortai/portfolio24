import "../style.css";

export default function Uncinc() {
  return (
    <>
      <section className='work'>
        <div className='work_intro'>
          <h1>Unc inc</h1>
          <h2>New corporate website</h2>
        </div>
        <div className='work_grid'>
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
          <div className='work_colors'>
            <h3>color pallette</h3>
            <ul >
            <li className='colors'>#323232</li>
            <li className='colors'> #767677</li>
            <li className='colors'>#aaa</li>
            </ul>
          </div>

          <div className='work_highlights'>
            <h3>See the highlights of this work</h3>
            <div className="work_wrapper">
              <img src='https://i.pinimg.com/736x/21/5e/9a/215e9a59ff1913a65d531adcab756854.jpg' />
              <img src='https://i.pinimg.com/736x/48/ab/06/48ab068081e9495f9013290e73f6722d.jpg' />
              <img src='https://i.pinimg.com/474x/25/9b/e5/259be53d7c06a77f17a9ae8e070845a1.jpg' />
            </div>
          </div>

          <div className='work_links'>
            <a className='links' href='/works'>
              <img src='/arrow.svg' /> Back to works
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
