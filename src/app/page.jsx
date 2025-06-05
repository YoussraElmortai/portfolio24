"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(
          ".scroller__inner"
        );
        const scrollerContent = Array.from(scrollerInner.children);

  
        for (let i = 0; i < 3; i++) {
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    };

    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      addAnimation();
    }
  });

  return (
    <>
      <section className='landing'>
        <div>
          <h1>Youssra Elmortai</h1>
        </div>
        <div className='skills'>
          <div className='scroller'>
            <ul className='skill-list scroller__inner'>
              <li>
                <img src='/html.svg' />
              </li>
              <li>
                <img src='/css.svg' />
              </li>
              <li>
                <img src='/javascript.svg' />
              </li>
              <li>
                <img src='/sass.svg' />
              </li>
              <li>
                <img src='/svelte.svg' />
              </li>
              <li>
                <img src='/react.svg' />
              </li>
              <li>
                <img src='/next.svg' />
              </li>
              <li>
                <img src='/vue.svg' />
              </li>
              <li>
                <img src='/figma.svg' />
              </li>
              <li>
                <img src='/bootstrap.svg' />
              </li>
              <li>
                <img src='/vscode.svg' />
              </li>
            </ul>
          </div>
        </div>
      </section>
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
