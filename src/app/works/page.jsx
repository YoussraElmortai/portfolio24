"use client";
import "./style.css";

export default function Works() {
  return (
    <>
      <section className='works_intro'>
        <h1>works</h1>
      </section>

      <section className='works'>
        <ul className='works_list'>
          <li>
            <a className='list_items' href='works/uncinc/'>
            <img src="bear.jpg"></img>
              <h3>Unc inc</h3>
              <span>Website / Internship</span>

            </a>
          </li>
          <li>
            <a className='list_items' href='works/uncinc'>
              <h3>Traveling Beauty</h3>
              <span>Website / Design</span>
            </a>
          </li>
          <li>
            <a className='list_items' href='works/uncinc'>
              <h3>Coffee Roulette</h3>
              <span>Website / Design</span>
            </a>
          </li>
          <li>
            <a className='list_items' href='works/uncinc'>
              <h3>The substance</h3>
              <span>Design</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

/* <div className='links'>
                <a href='https://www.uncinc.nl/nl' target='blank'>
                  <img src='arrow.svg' aria-hidden />
                </a>
              </div> */
