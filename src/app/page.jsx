"use client";
import Scroller from "./components/scroller/scroller";
import WorkList from "./components/worklist/worklist";

export default function Home() {
  return (
    <>
      <section className='landing'>
        <img src='/bear.JPG' alt='Bear' />
        <h1>Youssra Elmortai</h1>
        <article>
          <p>
            I’m a frontend developer & designer from Amsterdam. I love
            creating fun, accessible and creative websites.
          </p>
        </article>
      </section>

      <section>
        <div className='skills'>
          <Scroller />
        </div>
      </section>

      <section className='Recent'>
        <h2>Recent Works</h2>
        <WorkList />
      </section>
    </>
  );
}
