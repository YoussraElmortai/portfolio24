"use client";
import gsap from "gsap";
import { useEffect } from "react";
import Scroller from "./components/scroller/scroller";
import WorkList from "./components/worklist/worklist";

export default function Home() {
  let FollowBox = "#Wrap .FollowBox";
  gsap.set(FollowBox, {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
  });

  window.addEventListener("mousemove", (e) => {
    gsap.to(FollowBox, {
      duration: 0.5,
      overwrite: "auto",
      x: e.clientX,
      y: e.clientY,
      stagger: 0.15,
      ease: "none",
    });

    let TL = gsap.timeline({
      defaults: { duration: 0.5, ease: "none" },
    });
    TL.to(FollowBox, {
      scale: 1,
      overwrite: "auto",
      stagger: { amount: 0.15, from: "start", ease: "none" },
    });
    TL.to(
      FollowBox,
      {
        overwrite: "auto",
        scale: 0,
        stagger: { amount: 0.15, from: "end", ease: "none" },
      },
      "<+=2.5"
    );
  });

  return (
    <>
      <section id='Wrap' className='landing'>
          <img src='/bear.JPG' alt='Bear' />
          <h1>Youssra Elmortai</h1>
          <h2>Frontend developer</h2>

          <img
            className='FollowBox'
            src='https://source.unsplash.com/Pd8tLVGx2O4/200x250'
            alt=''
          />
          <img
            className='FollowBox'
            src='https://source.unsplash.com/CudNrzbsyZw/200x250'
            alt=''
          />
          <img
            className='FollowBox'
            src='https://source.unsplash.com/uEFombN3J5U/200x250'
            alt=''
          />
          <img
            className='FollowBox'
            src='https://source.unsplash.com/BjJP2TN8WoI/200x250'
            alt=''
          />
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
