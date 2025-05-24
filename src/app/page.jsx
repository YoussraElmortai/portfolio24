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
        <div className='safari'>
          <div className="search">
          <ul>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
          </ul>
          <h3> Youssra Elmortai</h3>
          <h4> {starDate}</h4>
          </div>
          <div>
            <article>
              <p>
                I'm Youssra Elmortai, <br /> I am a Frontend developer
                and designer from Amsterdam.
              </p>
            </article>
          </div>
        </div>
        <div className=""></div>

      </section>
    </>
  );
}
