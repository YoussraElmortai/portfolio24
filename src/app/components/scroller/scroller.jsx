"use client";
import { useEffect } from "react";

export default function Scroller() {
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
      <section className='scroller'>
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
      </section>
    </>
  );
}
