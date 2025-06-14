"use client";

import { useEffect } from "react";

export default function WorkList() {
  useEffect(() => {
    const hoverImages = document.querySelectorAll(".hover-img");
    const works = document.querySelector(".works");

    const handleMouseMove = (e) => {
      hoverImages.forEach((img) => {
        img.style.left = `${e.clientX}px`;
        img.style.top = `${e.clientY}px`;
      });
    };

    works?.addEventListener("mouseenter", () => {
      window.addEventListener("mousemove", handleMouseMove);
    });
  });
  return (
    <>
      <section className='works'>
        <ul className='works_list'>
          <li>
            <a
              className='list_items'
              href='https://github.com/YoussraElmortai/Unc-inc-internship'
            >
              <h3>Unc inc</h3>
              <img
                className='hover-img'
                src='https://i.pinimg.com/736x/8a/77/79/8a77798f0a5087fb48303a4e2ac1aa48.jpg'
              />
              <div className='content'>
                Graduation Internship{" "}
                <svg
                  className='arrow'
                  width='14'
                  height='18'
                  viewBox='0 0 14 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 17V1M7 1L13 7M7 1L1 7'
                    stroke='black'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a
              className='list_items'
              href='https://oba-fawn.vercel.app/'
            >
              <h3>Oba</h3>
              <div className='content'>
                <img
                  className='hover-img'
                  src='https://media.nhnieuws.nl/images/510973.4685e6d.jpg?width=1200&ratio=&quality=70'
                />
                live{" "}
                <svg
                  className='arrow'
                  width='14'
                  height='18'
                  viewBox='0 0 14 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 17V1M7 1L13 7M7 1L1 7'
                    stroke='black'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a
              className='list_items'
              href='https://travelingbeauty.vercel.app/'
            >
              <h3>Traveling Beauty</h3>

              <div className='content'>
                <img
                  className='hover-img'
                  src='https://travelingbeauty.vercel.app/groupofpeople.avif'
                />
                live{" "}
                <svg
                  className='arrow'
                  width='14'
                  height='18'
                  viewBox='0 0 14 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 17V1M7 1L13 7M7 1L1 7'
                    stroke='black'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a
              className='list_items'
              href='https://plantswap-webapplicatie.vercel.app/'
            >
              <h3>Plantswap</h3>
              <div className='content'>
                <img
                  className='hover-img'
                  src='https://cdn.mos.cms.futurecdn.net/EmkyGgaBujGmrppofJtyfn.jpg'
                />
                live{" "}
                <svg
                  className='arrow'
                  width='14'
                  height='18'
                  viewBox='0 0 14 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 17V1M7 1L13 7M7 1L1 7'
                    stroke='black'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
