import HeaderCardLayout from "./HeaderCardLayout";
import cards from "../assets/images/cards.webp";

const CardComingSoon = () => {
  return (
    <>
      <HeaderCardLayout>
        {/* Balance and Graph */}
        <div className="center justify-center mt-4">
          <div>
            <img src={cards} alt="" className="w-[430px]" />
            <p className="font-clash font-medium text-5xl text-center  pb-[20px]">
              Coming soon
            </p>
            <p className="font-inter text-grey300 text-center w-[421px] text-xl mx-auto pb-8 leading-[30px]">
              Virtual cards designed to meet your International and local needs.
            </p>
          </div>
        </div>
      </HeaderCardLayout>
    </>
  );
};

export default CardComingSoon;
