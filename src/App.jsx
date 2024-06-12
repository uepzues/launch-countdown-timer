import { useState, useEffect } from "react";
import Digits from "./components/Digits";
import Footer from "./components/Footer";
function App() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const dateCurrent = new Date().getTime();
      const dateLaunch = new Date(2024, 5, 13).getTime();
      const timeDiff = dateLaunch - dateCurrent;

      let seconds = Math.floor((timeDiff / 1000) % 60);
      let minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      let hours = Math.floor((timeDiff / 1000 / 60 / 60) % 24);
      let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      seconds = seconds < 0 ? 0 : seconds;
      minutes = minutes < 0 ? 0 : minutes;
      hours = hours < 0 ? 0 : hours;
      days = days < 0 ? 0 : days;

      const secondsStr = seconds.toString().padStart(2, "0");
      const minutesStr = minutes.toString().padStart(2, "0");
      const hoursStr = hours.toString().padStart(2, "0");
      const daysStr = days.toString().padStart(2, "0");

      setTime({
        days: daysStr,
        hours: hoursStr,
        minutes: minutesStr,
        seconds: secondsStr,
      });
    };

    updateCountdown();

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setFlip(true);

    const timeoutId = setTimeout(() => {
      setFlip(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [time.seconds, time.minutes, time.hours, time.days]);

  return (
    <>
      <div className="container h-screen flex flex-col justify-center items-center font-['Red Hat Text'] select-none">
        <div className="wrapper flex flex-col justify-center items-center">
          <div>
            <h1 className="text-white uppercase mb-10 text-[1.2rem] text-center leading-7 tracking-[.5rem] font-bold ">
              We&apos;re launching soon
            </h1>
          </div>

          <div className="timer">
            <div className="digits grid grid-cols-4 gap-3">
              <Digits label={"Days"} digit={time.days} flip={flip} />
              <Digits label={"Hours"} digit={time.hours} flip={flip} />
              <Digits label={"Minutes"} digit={time.minutes} flip={flip} />
              <Digits label={"Seconds"} digit={time.seconds} flip={flip} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
