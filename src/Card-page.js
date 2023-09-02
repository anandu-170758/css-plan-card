import React from "react";
import "./Card-page.css";
function Card() {
  return (
    <div className="container">
      <div className="header">
        <div className="Overlay">
          <div className="day-number">9</div>
          <div className="date-right">
            <div className="day-name">Monday</div>
            <div className="month-year">September 1998</div>
          </div>
          
        </div>
        <div className="button">
          <p>+</p>
        </div>
      </div>

      <div className="timeline">
        <ul>
          <li>
            <div className="b first"></div>
            <div className="time">7am</div>
            <div className="description">
              <h3>Break Fast</h3>
              <h4>Plan of the day</h4>
            </div>
          </li>

          <li>
            <div className="b second"></div>
            <div className="time">9 - 10pm</div>
            <div className="description">
              <h3>Team Stand Up</h3>
              <h4>Takes Note</h4>
            </div>
          </li>

          <li>
            <div className="b third"></div>
            <div className="time">10 - 1pm</div>
            <div className="description">
              <h3>Programming</h3>
              <h4>Discuss Issues</h4>
            </div>
          </li>

          <li>
            <div className="b third"></div>
            <div className="time">1pm</div>
            <div className="description">
              <h3>Lunch Break</h3>
            </div>
          </li>

          <li>
            <div className="b second"></div>
            <div className="time">3 - 5pm</div>
            <div className="description">
              <h3>Week's project</h3>
              <h4>web Design</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
