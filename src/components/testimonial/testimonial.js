import React from 'react'
import './testimonial.css'
import R1 from '../../assets/avatar3.jpg'
import R2 from '../../assets/avatar4.jpg'
import R3 from '../../assets/avatar2.jpg'
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (


    <>
      <section class="reviews" id="reviews">
        <h1>Testimonial</h1>
        <div class="reviews-container">

          {/* <!-- review1 --> */}
          <div class="box">
            <i class='bx bxs-quote-alt-left'></i>
            <div class="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quas fugiat. Nam voluptatum
              laudantium accusantium alias saepe, deleniti commodi, voluptates quae velit ea tempora? Obcaecati
              facere sint atque temporibus odit?</p>
            <i class='bx bxs-quote-alt-right'></i>
            <div class="review-profile">
              <img src={R1} alt=""/>
                <h3>Jhon Doe</h3>
            </div>
          </div>
          {/* <!-- review2 --> */}
          <div class="box">
            <i class='bx bxs-quote-alt-left'></i>
            <div class="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quas fugiat. Nam voluptatum
              laudantium accusantium alias saepe, deleniti commodi, voluptates quae velit ea tempora? Obcaecati
              facere sint atque temporibus odit?</p>
            <i class='bx bxs-quote-alt-right'></i>
            <div class="review-profile">
              <img src={R2} alt=""/>
                <h3>Fatema Begam</h3>
            </div>
          </div>
          {/* <!-- review3 --> */}
          <div class="box">
            <i class='bx bxs-quote-alt-left'></i>
            <div class="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quas fugiat. Nam voluptatum
              laudantium accusantium alias saepe, deleniti commodi, voluptates quae velit ea tempora? Obcaecati
              facere sint atque temporibus odit?</p>
            <i class='bx bxs-quote-alt-right'></i>
            <div class="review-profile">
              <img src={R3} alt=""/>
                <h3>Gorge Cooper</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial
