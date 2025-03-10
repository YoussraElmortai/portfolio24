"use client";
import "./style.css";

export default function projects() {
  return (
    <>
      <section className='projects_intro'>
        <h2>Projects</h2>
      </section>

      <section className='projects_wrapper'>
        <div className='project'>
          <div className='project_image'>
            <img src='https://i.pinimg.com/736x/36/3b/66/363b6614dbcf237451ad43e90dd8e8bc.jpg' />
          </div>
          <article className='project_content'>
            <div className='content_heading'>
              <span>Website</span>
              <h3>Traveling Beauty</h3>
            </div>
            <div className='links'>
              <a href='/' target='blank'>
                <img src='arrow.svg' aria-hidden />
              </a>
            </div>
          </article>
        </div>

        <div className='project'>
          <div className='project_image'>
            <img src='https://i.pinimg.com/736x/a7/4d/e2/a74de2b6c7db0785b1673e8f8d2eba57.jpg' />
          </div>
          <article className='project_content'>
            <div className='content_heading'>
              <span>Website</span>
              <h3>Traveling Beauty</h3>
            </div>
            <div className='links'>
              <a href='/' target='blank'>
                <img src='arrow.svg' aria-hidden />
              </a>
            </div>
          </article>
        </div>

        <div className='project'>
          <div className='project_image'>
            <img src='https://i.pinimg.com/736x/9e/c7/35/9ec735e02f0c3932180cf5a6d5b3d864.jpg' />
          </div>
          <article className='project_content'>
            <div className='content_heading'>
              <span>Website</span>
              <h3>Traveling Beauty</h3>
            </div>
            <div className='links'>
              <a href='/' target='blank'>
                <img src='arrow.svg' aria-hidden />
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
