import React, { useEffect, useState } from 'react';
import mine from '../../assets/images/mine.png';

export default function Info({ flaggedCount, isStopTimer }) {
  const [time, setTime] = useState('00:00:00');

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
      <div className='mines-remain'>
        <img src={mine} alt="mine" width="50" height="50" />
        {flaggedCount}
      </div>
      {time}
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
