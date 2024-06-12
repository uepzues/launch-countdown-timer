import { useState, useEffect } from "react";
import "./Digits.css";

function Digits({ digit, label }) {
  const [prevDigit, setPrevDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (prevDigit !== digit) {
      setIsFlipping(true);

      const timeoutId = setTimeout(() => {
        setIsFlipping(false);
        setPrevDigit(digit);
      }, 900);

      return () => clearTimeout(timeoutId);
    }
  }, [digit, prevDigit]);

  return (
    <>
      <div className="digitRect rounded-sm">
        <div className="digitBox w-[60px] h-[60px] md:w-[120px] md:h-[120px] bg-[#343650] rounded-md">
          <div className="digitBox-top w-full h-[50%] relative">
            <div
              className={`flip-box rounded-t-md bg-[#242536] perspective w-full h-full `}
            >
              <span className="bgText absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-27%] text-[#fb6087] text-[2.4rem]  font-bold md:text-[4.6rem]">
                {prevDigit}
              </span>

              <div
                className={`flip-box-inner ${
                  isFlipping ? "flip" : ""
                } relative w-full h-full text-center origin-bottom`}
              >
                <div className="flip-box-front absolute w-full h-full bg-[#343650] rounded-t-md overflow-hidden border-b-[1px] border-[#000000]">
                  <span className="digitSpan flex justify-center items-center w-full h-full text-[#fb6087] text-[2.4rem]  shadow-lg shadow-red-600  font-bold relative top-[43%] md:text-[4.6rem]">
                    {prevDigit}
                  </span>
                </div>
                <div className="flip-box-back absolute w-full h-full flex justify-center items-center bg-[#343650] rounded-b-md overflow-hidden border-t-[1px] border-[#000000]">
                  <span className="digitSpan flex justify-center items-center w-full h-full text-[#fb6087] text-[2.4rem] font-bold relative top-[-55%] md:text-[4.6rem]">
                    {prevDigit}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="labels text-[#8486a9] font-[600] text-[0.4rem] uppercase tracking-[.15rem] text-center py-2 md:text-[0.9rem]">
          {label}
        </div>
      </div>
    </>
  );
}

export default Digits;
