import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <>
    <section className="section" id="experience">
    <h1>My Journey</h1>

      <div class="design-section">
        <div class="timeline">


          <div class="timeline-empty">
          </div>


          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-component timeline-content">
            <h3>School</h3>
            <h4>jawahar navodaya vidyalaya</h4>
            <p>2018</p>
          </div>
          <div class="timeline-component timeline-content">
            <h3>College</h3>
            <h4>Netaji Subhash Engineering College, Kolkata</h4>
            <p>2023</p>
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty">
          </div>

          <div class="timeline-empty">
          </div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class=" timeline-component timeline-content">
            <h3>EXPERIENCE</h3>
            <h4>IKEWORLD Pvt. Ltd</h4>
            <p>Since March,2024 - Till now</p>
          </div>

        </div>
    </div >
    </section>
    </>
  );
}

export default Experience;