import React from 'react';

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-wrapper">
        <h1 className="home-heading">Meeting Days</h1>
        <div className="home-dates">
          <div className="home-days">
            <div>Sundays</div>
            <div>Wednesdays</div>
          </div>
          <div>
            <div>8:00am - 10:25am</div>
            <div>7:00pm - 9:15pm</div>
          </div>
        </div>
      </div>
    </section>
  );
}
