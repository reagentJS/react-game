import React, { useEffect } from 'react';
import mine from '../../assets/images/mine.png';

export default function Info({ flaggedCount, isStopTimer, toggleVisibility, time, setTime }) {
  useEffect(() => {
    if (isStopTimer) {
      return;
    }

    const timer = setTimeout(() => {
      setTime(increaseTime(time));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='info'>
      <div className='info-item'>
        <button
          onClick={toggleVisibility}
        >
          New game
        </button>
      </div>
      <div className='info-item mines-remain'>
        <img src={mine} alt="mine" width="50" height="50" />
        {flaggedCount}
      </div>
      <div className='info-item'>
        {time}
      </div>
    </div>
  );
}

function increaseTime(str) {
  let [hours, minutes, seconds] = str.split(':');

  hours = parseInt(hours, 10);
  minutes = parseInt(minutes, 10);
  seconds = parseInt(seconds, 10) + 1;

  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }
  [hours, minutes, seconds] = [addZero(hours), addZero(minutes), addZero(seconds)];

  return `${hours}:${minutes}:${seconds}`;
}

function addZero(num) {
  return num < 10
    ? `0${num.toString()}`
    : num.toString();
}
