import React, { useEffect, useState } from "react";
import { Container, Header, Segment } from 'semantic-ui-react'


const CountdownTimer = () => {
    //Calculate time method
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-07-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
          //difference / Unix time stamp conversions = timeLeft
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  //Hook to update time left every second
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <>
        <Container textAlign='center'>
            <Segment>
      <Header as='h2'>Days left until 2023 World Cup:</Header>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </Segment>
      </Container>
    </>
  );
}

export default CountdownTimer