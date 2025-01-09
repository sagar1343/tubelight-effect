import React, { useState, useEffect } from "react";

function App() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const targetElement = document.getElementById("scrollElement");
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);
  return (
    <div>
      <div className="h-screen"></div>
      <div
        id="scrollElement"
        className="relative z-0 flex h-screen w-full flex-col items-center justify-start overflow-hidden bg-slate-950"
      >
        <div className="relative isolate z-0 flex w-full flex-1 scale-y-75 items-center justify-center md:scale-y-110">
          <div
            className={`bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[10vw] overflow-visible from-[#18ACFE] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] ${
              isInView ? "animate-expandAndOpac" : ""
            } delay-300`}
            style={{
              backgroundImage:
                "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
            }}
          >
            <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
            <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]"></div>
          </div>

          <div
            className={`bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[10vw] from-transparent via-transparent to-[#18ACFE] text-white [--conic-position:from_290deg_at_center_top] ${
              isInView ? "animate-expandAndOpac" : ""
            }`}
            style={{
              backgroundImage:
                "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
            }}
          >
            <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]"></div>
            <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
          </div>

          <div
            className={`absolute inset-auto z-50 h-36 -translate-y-1/2 rounded-full bg-[#18ACFE] blur-3xl md:w-[28rem] ${
              isInView ? "animate-opacHalf" : ""
            } `}
          ></div>

          <div
            className={`absolute inset-auto z-50 h-0.5 -translate-y-[7rem] bg-[#18ACFE] ${
              isInView ? "animate-expand" : ""
            }`}
          ></div>
        </div>

        <div className="relative z-50 flex -translate-y-60 flex-col items-center md:px-5">
          <h1
            className={`flex flex-col gap-3 bg-gradient-to-b from-white to-slate-500 to-[80%] bg-clip-text pt-5 text-center text-4xl font-medium tracking-tight text-transparent md:gap-5 md:text-7xl transform ${
              isInView ? "animate-textLift" : ""
            }`}
          >
            <p className="mt-12 text-[13px] font-medium -tracking-[0.5px] md:mt-0 md:text-[20px]">
              Move Over traditional courses
            </p>
            <div>
              <p className="text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px]">
                Start Making Progress
              </p>
              <p className="text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px]">
                with 1:1 Long Term Mentorship
              </p>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
