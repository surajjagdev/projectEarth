import React from "react";
import "./Landing.css";
import availability from "./images/availability.jpg";
import availabilityInput from "./images/availabilityInput.jpg";
import mutual from "./images/mutual.jpg";
import todo from "./images/todo.jpg";

const LandingPage = () => (
  <div id="landing">
    <div className="jumbotron">
      <div className="row heading">
        <h3>Free Time</h3>
      </div>
      <div className="row heading">
        <p id="subHeading">Scheduling Simplified</p>
      </div>
    </div>
    <div className="row explanation">
      <div className="col-3">
        <div className="card">
          <div className="text">I'm free during the following times...</div>
          <div className="overlay">
            <img
              className="card-img-top"
              width="200px"
              height="300px"
              src={availabilityInput}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Schedule your Free Time</h5>
              <p className="card-text">
                Prep for future meetings or your social calendar by logging in
                and inputting when you're available.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-3">
        <div className="card">
          <div className="text">But not during these times...</div>
          <div className="overlay">
            <img
              className="card-img-top"
              width="200px"
              height="300px"
              src={todo}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Add Tasks</h5>
              <p className="card-text">
                Block off time to complete your tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-3">
        <div className="card">
          <div className="text">In the grand scheme of things</div>
          <div className="overlay">
            <img
              className="card-img-top"
              width="200px"
              height="300px"
              src={availability}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">View your availability</h5>
              <p className="card-text">
                See the layout of your day in detail as you input your tasks and
                free time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-3">
        <div className="card">
          <div className="text">So...when are you free?</div>
          <div className="overlay">
            <img
              className="card-img-top"
              width="200px"
              height="300px"
              src={mutual}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Mutual Availability</h5>
              <p className="card-text">
                Take the pain out of scheduling meetings. Free time will show
                you mutual availability based on everyone's inputs. Just choose
                an option and you're good to go!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
