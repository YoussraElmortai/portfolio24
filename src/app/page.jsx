"use client";

export default function Home() {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = String(month).padStart(2, "0");
  day = String(day).padStart(2, "0");

  const starDate = `${day}.${month}.${year}`;

  return (
    <>
      <section className='landing'>
<h1>Youssra Elmortai</h1>
      </section>
      <section className="carousel">
        <h2>Recent works</h2>
        
      </section>
      <section className="playground">
        <h2>Playground</h2>
        <p></p>

      </section>
    </>
  );
}
