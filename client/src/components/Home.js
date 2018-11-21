import React from "react";
import './Home.css';
import availability from './images/availability.png'

const HomePage = ({ authUser }) => (
  <div id="home">
    <div class="row explanation">
      <div class="col">
        <div class="card">
          <img class="card-img-top" src={availability} alt="Card cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img class="card-img-top" src={availability} alt="Card cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img class="card-img-top" src={availability} alt="Card cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default HomePage;
