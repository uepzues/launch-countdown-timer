# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

--Grayish-blue: hsl(237, 18%, 59%)
--Soft-red: hsl(345, 95%, 68%)

### Neutral

--White: hsl(0, 0%, 100%)
--Dark-desaturated-blue: hsl(236, 21%, 26%)
--Very-dark-blue: hsl(235, 16%, 14%)
--Very-dark-blue: hsl(234, 17%, 12%)

## Typography

### Body Copy

- Font size: 14px

### Font

- Family: [Red Hat Text](https://fonts.google.com/specimen/Red+Hat+Text)
- Weights: 700

## Icons

We provide the required social icons. But, if you prefer, you can use a font icon library. Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

<span className="absolute top-[-31px] left-[9px] text-[#fb6087] text-[5rem] font-bold ">
{prevDigit}
</span>

              <div className={`flip-box-inner ${isFlipping ? "flip" : ""}`}>
                <div className="flip-box-front bg-[#343650] rounded-t-2xl overflow-hidden ">
                  <span className="digitSpan flex justify-center items-center w-full h-full text-[#fb6087] text-[10rem] font-bold relative top-[40px] ">
                    {prevDigit}
                  </span>
                </div>
                <div className="flip-box-back flex justify-center items-center bg-[#343650] rounded-b-2xl overflow-hidden">
                  <span className="flex justify-center items-center w-full h-full text-[#fb6087] text-[10rem] font-bold relative top-[-60px]">
                    {prevDigit}
                  </span>
                </div>
