import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
// import bgData from "../../data/backgroundData";
import { SetPreferredBg } from "./SettingsApi";
import { Spinner } from "../Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../features/profile/userAction";

const AppearanceItem = ({ url, bg, selectedBg, setSelectedBg }) => {
  console.log(url);

  return (
    <div
      className={`${
        bg.name === selectedBg?.name ? "border-[3px] border-green600" : ""
      } rounded-full flex h-16 w-16 items-center justify-center  bg-center 
      relative overflow-hidden`}
      onClick={() => {
        setSelectedBg(bg);
      }}
    >
      <img src={url} alt="" className="absolute z-0 scale-[240%]" />
      {bg.name === selectedBg?.name ? (
        <CheckCircleIcon className="h-5 text-green600 relative z-10" />
      ) : null}
    </div>
  );
};

const AppearanceSettings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [selectedBg, setSelectedBg] = useState();
  const allBg = useSelector((state) => state.backgrounds.data);

  useEffect(() => {
    if (allBg) {
      const preferredBg = user.preferredBg;
      console.log(preferredBg);
      const currentBg = allBg.find((item) => {
        return item.name === preferredBg;
      });

      if (currentBg) {
        setSelectedBg(currentBg);
      }
    }
    // eslint-disable-next-line
  }, [allBg]);

  return (
    <div>
      <p className="text-base font-medium  text-neutral300">Appearance</p>
      <div className="h-8" />
      <div className="w-[556px] space-y-8">
        <div className="w-full bg-neutral100 h-[246px] rounded-[16px] flex-col px-9 pt-[75px]">
          <div className="bg-cover w-full h-full rounded-t-[5px] flex items-end justify-center px-[52.5px] relative overflow-hidden bg-blue500">
            <div classname="">
              <div className="flex justify-between items-center relative z-50">
                <div className="flex gap-2.5">
                  <div className="flex gap-0.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D456E]" />
                    <div className="w-9 h-[3px] rounded-full bg-[#1D456E]" />
                  </div>
                  <div className="flex gap-0.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D456E]" />
                    <div className="w-9 h-[3px] rounded-full bg-[#1D456E]" />
                  </div>
                  <div className="flex gap-0.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D456E]" />
                    <div className="w-9 h-[3px] rounded-full bg-[#1D456E]" />
                  </div>
                  <div className="flex gap-0.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D456E]" />
                    <div className="w-9 h-[3px] rounded-full bg-[#1D456E]" />
                  </div>
                  <div className="flex gap-0.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D456E]" />
                    <div className="w-9 h-[3px] rounded-full bg-[#1D456E]" />
                  </div>
                </div>

                <div className="w-12 h-2.5 rounded-full bg-green700" />
              </div>
              <div className="h-2 relative z-50" />
              <div className="w-[378px] h-[54px] bg-blue400 rounded-t-lg relative z-50" />
            </div>
            <img
              src={allBg && selectedBg?.bgLink}
              alt=""
              className="absolute top-0 left-0 scale-125 z-0"
            />
          </div>
        </div>

        <div className="w-full h-[1px] bg-neutral200" />

        <div className="inline-flex flex-col space-y-1 items-start justify-start">
          <p className=" font-medium leading-tight text-gray-600">
            Select your pattern
          </p>
          <p className="w-full text-sm leading-snug text-[#71879C]">
            Pattern selected will appear on the app.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-[18px] gap-y-[10px]">
          {allBg?.map((bg, index) => {
            return (
              <AppearanceItem
                url={bg.bgLink}
                setSelectedBg={setSelectedBg}
                selectedBg={selectedBg}
                name={bg.name}
                bg={bg}
              />
            );
          })}
        </div>
        {updateLoading ? (
          <div className="w-[129px] px-8 py-2.5 bg-[#00AA61] text-white hover:bg-green-500 rounded-full flex center">
            <Spinner color="white" />
          </div>
        ) : (
          <button
            disabled={!true}
            className="bg-[#00AA61] text-white hover:bg-green-500 transition-all duration-300 font-clash font-medium text-lg rounded-full disabled:bg-grey200 disabled:cursor-not-allowed px-8 py-2.5 w-[129px]"
            onClick={async (e) => {
              console.log("here");
              setUpdateLoading(true);
              let response = await SetPreferredBg({
                bgName: selectedBg.name,
              });
              setUpdateLoading(false);
              if (response.success) {
                console.log(response);
                dispatch(getUserProfile());
              } else {
                console.log(response);
              }
            }}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default AppearanceSettings;
