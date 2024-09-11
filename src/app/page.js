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

        // Start Dragging (Mouse and Touch)
        const onDragStart = (e) => {
          isDragging = true;
          const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
          const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
          offsetX = clientX - pill.offsetLeft;
          offsetY = clientY - pill.offsetTop;
          pill.style.cursor = 'grabbing';
          document.body.style.userSelect = 'none';
        };

        // Dragging (Mouse and Touch)
        const onDragMove = (e) => {
          if (isDragging) {
            const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
            pill.style.left = `${clientX - offsetX}px`;
            pill.style.top = `${clientY - offsetY}px`;
          }
        };

        // Stop Dragging (Mouse and Touch)
        const onDragEnd = () => {
          if (isDragging) {
            isDragging = false;
            pill.style.cursor = 'grab';
            document.body.style.userSelect = 'auto';
          }
        };

        // Event Listeners for Mouse Events
        pill.addEventListener('mousedown', onDragStart);
        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);

        // Event Listeners for Touch Events
        pill.addEventListener('touchstart', onDragStart);
        document.addEventListener('touchmove', onDragMove);
        document.addEventListener('touchend', onDragEnd);

        // Cleanup event listeners on component unmount
        return () => {
          pill.removeEventListener('mousedown', onDragStart);
          document.removeEventListener('mousemove', onDragMove);
          document.removeEventListener('mouseup', onDragEnd);
          pill.removeEventListener('touchstart', onDragStart);
          document.removeEventListener('touchmove', onDragMove);
          document.removeEventListener('touchend', onDragEnd);
        };
      }
    });
  }, []);


  return (
    <>
      <Header />

      <main className="home">
        {['HTML', 'JAVASCRIPT', 'CSS', 'DESIGN'].map((pill, i) => (
          <div
            className="pill"
            key={pill}
            ref={(el) => (pillRefs.current[i] = el)}
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
