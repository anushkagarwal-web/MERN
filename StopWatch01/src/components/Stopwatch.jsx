import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] =useState(0)
    const [flag, setFlag] = useState(true)
    useEffect(() =>{
        let interval;
        if(!flag){
           interval= setInterval(()=>{setTime((prev) => prev + 1)

            }, 1000);
        }
        return()=>clearInterval(interval);
    },[flag]);
    const hours= Math.floor(time/3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
  return (
    <>
    <h1 className="head">Stop Watch</h1>
      <div className="container">
       <div className="time">
        <div className="hour">
            <span className="number">{String(hours).padStart(2,"0")}</span>
            <h1 className="h">Hours </h1>
        </div>
        <span className="colon">:</span>
        <div className="minutes">
            <span className="number">{String(minutes).padStart(2,"0")}</span>
            <h1 className="m">Minutes</h1>
        </div>
        <span>:</span>
        <div className="seconds">
            <span className="number">{String(seconds).padStart(2,"0")}</span>
            <h1 className="s">Seconds</h1>
            </div>
            </div>
        <div className="buttons h-25">
        <button className="reset rounded-pill px-4 py-0 " onClick={()=>{setFlag(true); setTime(0);}}>Reset</button>
        <button className={`start rounded-pill px-4 py-0 ${!flag? `red`:`` }`} onClick={()=>setFlag(!flag)}>{flag?"Start":"Stop"}</button>
        </div>
      </div>
    </>
  )
}

export default Stopwatch
