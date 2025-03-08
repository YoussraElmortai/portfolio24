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
      <section>
        <div className='logbook'>
          <div>
            <div className='dot' />
            <div>
              <h3> Captain's logbook entry 01:</h3>
              <h4>Stardate: {starDate}</h4>
            </div>
          </div>
          <article>
            <p>
              I'm Youssra Elmortai, <br /> I am a Frontend developer
              designer from Amsterdam.
            </p>
          </article>
        </div>
        <div className='highlights'></div>
      </section>
    </>
  );
}
