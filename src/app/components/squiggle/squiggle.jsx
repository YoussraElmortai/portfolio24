"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Squiggle() {
  useEffect(() => {
    const svg = document.querySelector("svg.squiggle");

    const path = svg.querySelector("path");


    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;

      const percentage = distance / totalDistance;

      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${
        pathLength * (1 - percentage)
      }`;
    };

    scroll();
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 848 1458'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='squiggle'
      preserveAspectRatio='xMinYMin'
      style={{
        maxWidth: "100vw",
        left: 0,
        right: 0,
      }}
    >
      <path
        d='M25.3202 7.78176C148.52 -33.3383 237.735 121.653 201.093 227.089C164.452 332.525 68.3341 382.08 25.3202 444.287C-17.6937 506.494 25.3202 631.963 89.5756 676.773C153.831 721.584 201.093 721.057 305.176 732.127C409.259 743.198 534.053 711.567 606.274 695.225C678.494 678.882 813.909 647.778 837.805 819.639C861.702 991.5 683.274 1018.39 651.412 930.874C619.549 843.362 674.777 851.27 674.777 851.27C674.777 851.27 693.894 849.161 722.039 877.629C750.184 906.097 760.274 961.978 741.688 1041.58C723.101 1121.19 632.825 1327.31 555.294 1358.94C477.763 1390.58 411.383 1377.4 337.038 1393.21C262.693 1409.03 262.693 1457 262.693 1457'
        stroke='#F22FA4'
        strokeWidth='15'
      />
    </svg>
  );
}
