import React from "react";
// import Slide1 from "../../assets/onboarding/1.png";
// import Slide2 from "../../assets/onboarding/2.png";
// import Slide3 from "../../assets/onboarding/3.png";
import SignupForm from "./SignupForm";
// import Slides from "./Slides";
import { SideCard } from "./Login";

// const onboardingSlides = [
//   {
//     title: "Deeply personal style your way.",
//     description:
//       "Give personality to your app, make it yours in every way, choose your pattern.",
//     image: Slide1,
//     bgColor: "#6AC5B9",
//   },
//   {
//     title: "With virtual cards crafted for you.",
//     description:
//       "Get your virtual cards in dollar or naira, reliable networks at low cost just for you.",
//     image: Slide2,
//     bgColor: "#F5C08F",
//   },
//   {
//     title: "Your everyday needs in one place",
//     description:
//       "We move around your orbit, your daily needs now in on place, designed for ease.",
//     image: Slide3,
//     bgColor: "#F5C08F",
//   },
// ];

const SignUp = () => {
  // const [scrollIndex, setscrollIndex] = useState(0);

  // useEffect(() => {
  //   let slideContainer = document.getElementById("slideContainer");
  //   const timer = setInterval(() => {
  //     if (scrollIndex < 2) {
  //       slideContainer.scroll({
  //         left: scrollIndex === 0 ? window.innerWidth / 2 : window.innerWidth,
  //         top: 0,
  //         behavior: "smooth",
  //       });

  //       setscrollIndex(scrollIndex + 1);
  //     } else {
  //       slideContainer.scrollLeft = 0;
  //       setscrollIndex(0);
  //     }
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [scrollIndex]);

  return (
    <div className="flex h-[100vh]">
      {/* <section
        className="overflow-x-scroll w-[50vw] h-full bg-[#F2F7FA] overflow-y-hidden transition duration-500 ease-in-out disable-scrollbars"
        id="slideContainer"
      >
        <div className="flex w-[150vw] disable-scrollbars ">
          {onboardingSlides.map((slide, index) => {
            return <Slides slide={slide} index={index} key={index} />;
          })}
        </div>
      </section> */}
      <SideCard />
      <section className="w-1/2 relative z-40">
        <div className="max-w-[609px] mx-auto mt-24">
          <SignupForm />
        </div>
      </section>
    </div>
  );
};

export default SignUp;
