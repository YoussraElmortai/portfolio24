"use client";

export default function Home() {
  return (
    <>
      <section className='landing'>
        <div>
          <h1>Youssra Elmortai</h1>
          <h2>Frontend developer</h2>
        </div>
      </section>
      <section className='about'></section>

      <section className='Recent'>
        <h2>Recent Works</h2>
        <section className='works'>
          <ul className='works_list'>
            <li className='list_items'>
              <h3>Unc inc</h3>
              <a href='https://github.com/YoussraElmortai/Unc-inc-internship'>
                Graduation Internship{" "}
                <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
            <li className='list_items'>
              <a href='https://github.com/YoussraElmortai/oba-re-re-design'>
                <h3>Oba</h3>
              </a>
              <a href='https://oba-fawn.vercel.app/'>
                live <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
            <li className='list_items'>
              <a href='https://github.com/YoussraElmortai/travelingbeauty'>
                <h3>Traveling Beauty</h3>
              </a>
              <a href='https://travelingbeauty.vercel.app/'>
                live <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
            <li className='list_items'>
              <a href='https://github.com/YoussraElmortai/plantswap'>
                <h3>Plantswap</h3>
              </a>
              <a href='https://plantswap-sigma.vercel.app/'>
                live <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}
