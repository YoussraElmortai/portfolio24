"use client";

import Header from "./components/header";
import Footer from "./components/footer";

import { useRef, useEffect } from 'react';

export default function Home() {
  const pillRefs = useRef([]);

  useEffect(() => {
    pillRefs.current.forEach((pill) => {
      if (pill) {
        let offsetX = 0;
        let offsetY = 0;
        let isDragging = false;

        const onMouseDown = (e) => {
          isDragging = true;
          offsetX = e.clientX - pill.offsetLeft;
          offsetY = e.clientY - pill.offsetTop;
          pill.style.cursor = 'grabbing';
          document.body.style.userSelect = 'none';
        };

        const onMouseMove = (e) => {
          if (isDragging) {
            pill.style.left = `${e.clientX - offsetX}px`;
            pill.style.top = `${e.clientY - offsetY}px`;
          }
        };

        const onMouseUp = () => {
          if (isDragging) {
            isDragging = false;
            pill.style.cursor = 'grab';
            document.body.style.userSelect = 'auto';
          }
        };

        pill.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        // Cleanup event listeners on component unmount
        return () => {
          pill.removeEventListener('mousedown', onMouseDown);
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };
      }
    });
  }, []);

  const pillPositions = [
    { top: 30, left: 50 },
    { top: 36, left: 10 },
    { top: 40, left: 80 },
    { top: 60, left: 25 },
  ];

  return (
    <>
      <Header />

      <main className="home">
          {['HTML', 'JAVASCRIPT', 'CSS', 'DESIGN'].map((pill, index) => (
            <div
              className="pill"
              key={pill}
              ref={(el) => (pillRefs.current[index] = el)}
              style={{
                position: 'absolute',
                cursor: 'grab',
                top: `${pillPositions[index].top}%`,
                left: `${pillPositions[index].left}%`,
              }}
            >
              <span>{pill}</span>
            </div>
          ))}

        <h1>youssra Elmortai</h1>
        <p>Frontend developer and <span className="accent">Designer</span></p>
      </main>
      <Footer />

    </>

  );
}
