import React from 'react'

const CountDownTimer = ({dayshoursMinSecs}) => {
   
    const {days = 0, hours = 0, minutes = 0, seconds = 60 } = dayshoursMinSecs;
    const [[dys, hrs, mins, secs], setTime] = React.useState([days, hours, minutes, seconds]);
    

    const tick = () => {
   
        if (dys === 0 && hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (hrs === 0 && mins === 0 && secs === 0) {
            setTime([dys - 1, 59, 59, 59]);
        }
        else if (mins === 0 && secs === 0) {
            setTime([dys, hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([dys, hrs, mins - 1, 59]);
        } else {
            setTime([dys, hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(days),parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${dys.toString().padStart(2, '0')} : ${hrs.toString().padStart(2, '0')} : ${mins
            .toString()
            .padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CountDownTimer;