import {
  ChevronLeftIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import SideBarWrapper from "../SideBarWrapper";

const AddCard = ({ toggle, setToggle }) => {
  return (
    <SideBarWrapper toggle={toggle}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div
          className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <ChevronLeftIcon className=" w-6 h-6" />
        </div>
        <div className="flex gap-2">
          <CreditCardIcon className=" h-[20px] text-blue25" />
          <p className="text-sm font-medium leading-normal text-grey400">
            Add Card
          </p>
        </div>
      </div>
      <div className="h-9" />
      <div className="h-full overflow-y-scroll pb-14">
        {/* box */}
        <div className="bg-white  rounded-[8px] p-6 space-y-8">
          {/* Input */}
          <div className="border-[2px] focus-within:border-[#5DADEC] border-transparent w-full bg-neutral100 rounded-lg p-2.5">
            <label htmlFor="name" className="text-xs text-text100">
              Card holder name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full text-neutral300 text-base bg-transparent outline-none"
              placeholder="John Doe"
            />
          </div>

          <div className="border-[2px] focus-within:border-[#5DADEC] border-transparent w-full bg-neutral100 rounded-lg p-2.5 flex justify-between items-center">
            <div>
              <label htmlFor="card-number" className="text-xs text-text100">
                Card number
              </label>
              <input
                type="text"
                name="card-number"
                id="card-number"
                className="w-full text-neutral300 text-base bg-transparent outline-none"
                placeholder="0000 0000 0000 0000"
              />
            </div>

            <div className="h-7 w-7 rounded-lg flex items-center justify-center bg-white">
              <svg
                width="18"
                height="6"
                viewBox="0 0 18 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.88675 5.61565H6.52431L7.37582 0.38257H8.7384L7.88675 5.61565ZM5.37814 0.38257L4.07925 3.98192L3.92555 3.20684L3.92569 3.20712L3.46725 0.853749C3.46725 0.853749 3.41182 0.38257 2.82095 0.38257H0.673634L0.648438 0.471179C0.648438 0.471179 1.30509 0.6078 2.07359 1.06932L3.25728 5.61579H4.67683L6.84445 0.38257H5.37814ZM16.0944 5.61565H17.3455L16.2547 0.38243H15.1595C14.6537 0.38243 14.5306 0.772419 14.5306 0.772419L12.4986 5.61565H13.9188L14.2029 4.83833H15.9349L16.0944 5.61565ZM14.5952 3.76453L15.3111 1.80618L15.7138 3.76453H14.5952ZM12.6051 1.64101L12.7995 0.517232C12.7995 0.517232 12.1996 0.289062 11.5742 0.289062C10.898 0.289062 9.29245 0.584564 9.29245 2.02148C9.29245 3.37342 11.1769 3.39022 11.1769 4.10034C11.1769 4.81047 9.4866 4.68323 8.92877 4.23543L8.72622 5.41043C8.72622 5.41043 9.33458 5.70593 10.2641 5.70593C11.1938 5.70593 12.5964 5.22454 12.5964 3.91431C12.5964 2.55369 10.6951 2.427 10.6951 1.83544C10.6952 1.24374 12.0221 1.31975 12.6051 1.64101Z"
                  fill="#2566AF"
                />
              </svg>
            </div>
          </div>

          <div className="flex space-x-8">
            <div className="border-[2px] focus-within:border-[#5DADEC] border-transparent w-full bg-neutral100 rounded-lg p-2.5">
              <label htmlFor="expiry-date" className="text-xs text-text100">
                Expiry date
              </label>
              <input
                type="text"
                name="expiry-date"
                id="expiry-date"
                className="w-full text-neutral300 text-base bg-transparent outline-none"
                placeholder="00/00"
              />
            </div>
            <div className="border-[2px] focus-within:border-[#5DADEC] border-transparent w-full bg-neutral100 rounded-lg p-2.5">
              <label htmlFor="ccv" className="text-xs text-text100">
                CCV
              </label>
              <input
                type="text"
                name="ccv"
                id="ccv"
                className="w-full text-neutral300 text-base bg-transparent outline-none"
                placeholder="000"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex items-center px-8 py-2.5 bg-green700 text-white font-clash rounded-full gap-3 font-medium" >
            Add Card
          </button>
        </div>
      </div>
    </SideBarWrapper>
  );
};

export default AddCard;
