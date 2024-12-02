"use client";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="intro">
        <p>Frontend developer and <span className="accent">Designer</span> based in Amsterdam</p>
        </div>

        {/* <section className="skills">
          <ul>
            <li>html</li>
            <li>Javascript</li>
            <li>React</li>
            <li>CSS</li>
            <li>Figma</li>
            <li>Responsive design</li>
          </ul>
        </section> */}

      
            <div className="tag"><span>Development</span><span>Design</span></div>
            <a className="link" href="">project name </a>

      </main>
      <Footer />
    </>

  );
}
