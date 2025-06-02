"use client";

export default function Home() {
  return (
    <>
      <section className='landing'>
        <div className='intro'>
          <h1>Youssra Elmortai</h1>
          <h2>Frontend developer</h2>
        </div>
        <div className='gallery'>
          <img src='/bear.JPG'></img>
          <img src='/me.JPG'></img>
          <img src='roach.jpg'></img>
        </div>
      </section>

      <section className='Recent'>
        <h2>Recent Works</h2>
      <section className='works'>
        <ul className='works_list'>
          <li>
            <a className='list_items' href='works/uncinc/'>
              <h3>Unc inc</h3>
              <span>Website / Internship</span>
            </a>
          </li>
          <li>
            <a className='list_items' href='works/travelingbeauty'>
              <h3>Traveling Beauty</h3>
              <span>Website / Design</span>
            </a>
          </li>
          <li>
            <a className='list_items' href='works/plantswap'>
              <h3>Plantswap</h3>
              <span>Website / Design</span>
            </a>
          </li>
          <li>
            <a className='list_items' href='works/thesubstance'>
              <h3>The substance</h3>
              <span>Website / Design</span>
            </a>
          </li>
          <li>
            <a className='list_items' href='works/oba'>
              <h3>Oba</h3>
              <span>Website / Design</span>
            </a>
          </li>
        </ul>
      </section>
      </section>
    </>
  );
}
