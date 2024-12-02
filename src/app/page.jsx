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

        <section className="projects">
          <div className="project">
            <img src="https://i.pinimg.com/736x/85/ab/9b/85ab9b4233a63be0ada9281f6d179cfa.jpg" alt="project img"/>
            <div className="tag"><span>Development</span><span>Design</span></div>
            <a className="link" href="">project name </a>
          </div>

          <div className="project">
            <img src="https://i.pinimg.com/736x/3d/68/ec/3d68ec0adde30caab391fbbe6682f58e.jpg" alt="project img"/>
            <div className="tag"><span>Development</span><span>Design</span></div>
            <a className="link" href="">project name </a>
          </div>

          <div className="project">
            <img src="https://i.pinimg.com/736x/08/5b/a2/085ba2e4b164e18d37d798ec7de8b85b.jpg" alt="project img"/>
            <div className="tag"><span>Development</span><span>Design</span></div>
            <a className="link" href="">project name </a>
          </div>

          <div className="project">
            {/* <img src="https://i.pinimg.com/736x/08/5b/a2/085ba2e4b164e18d37d798ec7de8b85b.jpg" alt="project img"/>
            <div className="tag"><span>Development</span><span>Design</span></div>
            <a className="link" href="">project name </a> */}
          </div>
        </section>
      </main>
      <Footer />
    </>

  );
}
