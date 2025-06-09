import Scroller from "./components/scroller/scroller";
import WorkList from "./components/worklist/worklist";

export default function Home() {
  return (
    <>
      <section className='landing'>
          <img src='/bear.JPG'></img>
          <h1>Youssra Elmortai</h1>
          <h2>Frontend developer</h2>
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
