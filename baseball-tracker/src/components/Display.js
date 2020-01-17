
import React, {useState} from "react";


export const Display =(props) => {

  const [balls, setAway] = useState(0);

  return (
    
    <div className="container">
      
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Strikes</h2>

            <div className="home__score">{props.state.strikes}</div>
          </div>

          {/* <div className="timer">00:00</div> */}
          <div className="away">
            <h2 className="away__name">Balls</h2>
            <div className="away__score">{props.state.balls}</div>
          </div>

        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick={props.strike} className="homeButtons__touchdown">Strike</button>
          <button onClick={props.hit} className="homeButtons__fieldGoal">Hit!</button>
        </div>
        <div className="awayButtons">
          <button onClick={props.ball} className="awayButtons__touchdown">Ball</button>
          <button onClick={props.foul} className="awayButtons__touchdown">Foul</button>
        </div>
      </section>
    </div>
  );
}