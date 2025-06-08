"use client";

import { useEffect } from "react";
import Scroller from "./components/scroller/scroller";

export default function Home() {
 

  useEffect(() => {
    const hoverImages = document.querySelectorAll(".hover-img");

    const handleMouseMove = (e) => {
      hoverImages.forEach((img) => {
        img.style.left = `${e.clientX }px`;
        img.style.top = `${e.clientY }px`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <>
      <section className='landing'>
        <div>
          <h1>Youssra Elmortai</h1>
        </div>
        <div className='skills'>
          <Scroller />
        </div>
      </section>

      <section className='Recent'>
        <h2>Recent Works</h2>
        <section className='works'>
          <ul className='works_list'>
            <li className='list_items'>
              <h3>Unc inc</h3>
              <img
                className='hover-img'
                src='https://i.pinimg.com/736x/36/3b/66/363b6614dbcf237451ad43e90dd8e8bc.jpg'
              />
              <a href='https://github.com/YoussraElmortai/Unc-inc-internship'>
                Graduation Internship{" "}
                <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
            <li className='list_items'>
              <a href='https://github.com/YoussraElmortai/oba-re-re-design'>
                <h3>Oba</h3>
              </a>
              <img
                className='hover-img'
                src='https://i.pinimg.com/736x/4d/6e/61/4d6e61034bfed081b6e9016057e64fb2.jpg'
              />

              <a href='https://oba-fawn.vercel.app/'>
                live <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
            <li className='list_items'>
              <a href='https://github.com/YoussraElmortai/travelingbeauty'>
                <h3>Traveling Beauty</h3>
              </a>
              <img
                className='hover-img'
                src='https://i.pinimg.com/736x/8d/18/b9/8d18b9ebc47812e0f49e5ca58d09ec12.jpg'
              />
              <a href='https://travelingbeauty.vercel.app/'>
                live <img className='arrow' src='/arrow.svg'></img>
              </a>
            </li>
            <li className='list_items'>
              <a href='https://github.com/YoussraElmortai/plantswap'>
                <h3>Plantswap</h3>
              </a>
              <img
                className='hover-img'
                src='https://i.pinimg.com/736x/f5/fb/07/f5fb072bee649693fa6965cae244c340.jpg'
              />

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
