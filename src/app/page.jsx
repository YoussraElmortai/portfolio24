"use client";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="intro">
        <p>Frontend developer and <span className="accent">Designer</span> based in Amsterdam</p>
        </section>

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

<section className="wrapper">
  <div className="card">
    <img src="https://i.pinimg.com/736x/af/5c/2d/af5c2da6d7e6a35e70e0c62cd4e78c8d.jpg" alt=""/>
  <div className="tag"><span>Development</span><span>Design</span></div>
  <a className="link" href="">project name </a>
  </div>
  <div className="card">
    <img src="https://i.pinimg.com/736x/99/d0/da/99d0da79b955a30ab808b9f5662e01d7.jpg"  alt=""/>
  <div className="tag"><span>Development</span><span>Design</span></div>
  <a className="link" href="">project name </a>
  </div>
  <div className="card">
  <img src="https://i.pinimg.com/736x/af/5c/2d/af5c2da6d7e6a35e70e0c62cd4e78c8d.jpg" alt=""/>
  <div className="tag"><span>Development</span><span>Design</span></div>
  <a className="link" href="">project name </a>
  </div>
  <div className="card">
  <img src="https://i.pinimg.com/736x/99/d0/da/99d0da79b955a30ab808b9f5662e01d7.jpg"  alt=""/>
  <div className="tag"><span>Development</span><span>Design</span></div>
  <a className="link" href="">project name </a>
  </div>
  <div className="card">
  <img src="https://i.pinimg.com/736x/af/5c/2d/af5c2da6d7e6a35e70e0c62cd4e78c8d.jpg" alt=""/>
  <div className="tag"><span>Development</span><span>Design</span></div>
  <a className="link" href="">project name </a>
  </div>
</section>

      </main>
      <Footer />
    </>

  );
}
