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
            <li className='list_items'>
              <a href='works/uncinc/'>
                <h3>Unc inc</h3>
              </a>
              <span>Internship</span>
              <a href='https://www.uncinc.nl/en'>
                live <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
            <li className='list_items'>
              <a href='works/oba'>
                <h3>Oba</h3>
              </a>
              <span>Website / Design</span>
              <a href='https://oba-fawn.vercel.app/'>
                live <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
            <li className='list_items'>
              <a href='works/travelingbeauty'>
                <h3>Traveling Beauty</h3>
              </a>
              <span>Website / Design</span>
              <a href='https://travelingbeauty.vercel.app/'>
                live <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
            <li className='list_items'>
              <a href='works/plantswap'>
                <h3>Plantswap</h3>
              </a>
              <span>Website / Design</span>
              <a href='https://plantswap-sigma.vercel.app/'>
                live <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
            <li className='list_items'>
              <a href='works/thesubstance'>
                <h3>The substance</h3>
              </a>
              <span>Website / Design</span>
              <a href='https://the-substance.vercel.app/'>
                live <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}
