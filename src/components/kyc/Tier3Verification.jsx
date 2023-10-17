import React, { useEffect, useState } from "react";

import { UserGroupIcon } from "@heroicons/react/24/solid";
// import referralsData from "../../data/ReferralData";
import SideBarWrapper from "../SideBarWrapper";
// import document from "../../assets/images/kyc/document.svg";
import PrimaryButton from "../Inputs/PrimaryButton";
import { AnimatePresence, motion } from "framer-motion";

import "@lottiefiles/lottie-player";

import { uploadGovtDocId, uploadUtilityDoc } from "./KycApi";
import { Spinner } from "../Spinner";
import check from "../../assets/images/kyc/checkBox.svg";
import SelfieCapture from "./Selfie";
import FileUploader from "../Inputs/FileUploader";
import CloseButton from "../Inputs/CloseButton";

const UploadGovtID = ({ setStep, setDocumentType, step }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const previewFile = () => {
    const previewImage = document.getElementById("previewImage");
    if (selectedFile) {
      const reader = new FileReader();
      if (selectedFile.type.includes("image")) {
        reader.onload = function (e) {
          previewImage.src = e.target.result;
        };
      }
      if (selectedFile.type.includes("video")) {
        reader.onload = function (e) {
          const previewVideo = document.getElementById("previewVideo");
          previewVideo.src = e.target.result;
        };
      }

      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {
    previewFile();
    // eslint-disable-next-line
  }, [selectedFile]);

  return (
    <motion.div
      key={"step-1"}
      initial={{ x: "-20%", opacity: 0 }}
      animate={{ x: "0%", opacity: "100%" }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
      exit={{ x: "-20%", opacity: 0 }}
      className="space-y-[26px] font-inter"
    >
      <p className="text-2xl font-semibold font-clash text-grey600">
        Government issued ID
      </p>

      <p className="w-full text-[15px] text-[#71879C] leading-[22px]">
        Kindly upload any of the following government issued ID,{" "}
        <span className="font-semibold">
          Drivers license, Voters card, <span className="font-normal">or</span>{" "}
          International passport{" "}
        </span>
      </p>
      {selectedFile && (
        <div className="w-full center ">
          <img
            src=""
            alt=""
            srcSet=""
            id="previewImage"
            className="h-[300px]"
          />
        </div>
      )}
      <div className="">
        <FileUploader
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </div>

      {loading ? (
        <PrimaryButton label={<Spinner />} />
      ) : (
        <PrimaryButton
          disabled={!selectedFile}
          label={"Upload"}
          width="disabled:bg-[#71879C]"
          onClick={() => {
            uploadGovtDocId(selectedFile, setStep, setLoading);
          }}
        />
      )}
    </motion.div>
  );
};
const UploadUtilityDoc = ({ setStep, setDocumentType, step }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const previewFile = () => {
    const previewImage = document.getElementById("previewImage");
    if (selectedFile) {
      const reader = new FileReader();
      if (selectedFile.type.includes("image")) {
        reader.onload = function (e) {
          previewImage.src = e.target.result;
        };
      }
      if (selectedFile.type.includes("video")) {
        reader.onload = function (e) {
          const previewVideo = document.getElementById("previewVideo");
          previewVideo.src = e.target.result;
        };
      }

      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {
    previewFile();
    // eslint-disable-next-line
  }, [selectedFile]);

  return (
    <motion.div
      key={"step-1"}
      initial={{ x: "-20%", opacity: 0 }}
      animate={{ x: "0%", opacity: "100%" }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
      exit={{ x: "-20%", opacity: 0 }}
      className="space-y-[26px] font-inter"
    >
      <p className="text-2xl font-semibold font-clash text-grey600">
        Upload Utility Document
      </p>

      <p className="w-full text-[15px] text-[#71879C] leading-[22px]">
        Kindly upload any of the following document showing your house address:{" "}
        <span className="font-semibold">
          Utility bill <span className="font-normal">or</span> bank statement.
        </span>
      </p>
      <div className="h-[1px] w-full bg-neutral100"></div>
      {/* <div>
            <div
              className={`focus-within:border-[#5DADEC]  border-2 p-2.5 rounded-[10px] bg-[#F2F7FA] ${
                err !== "" && err.nin
                  ? "border-[#EF4444]"
                  : "border-transparent"
              }`}
            >
              <label
                htmlFor="username"
                className="text-xs text-[#71879C] font-inter"
              >
                vNIN
              </label>
              <br />
              <div className="h-[2px]" />
              <input
                type="text"
                placeholder=""
                name="nin"
                id="nin"
                value={NIN}
                className={`text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full `}
                onChange={(e) => {
                  setError("");
                  setNIN(e.target.value);
                }}
              />
            </div>
            {err && err.bvn && (
              <>
                <div className="h-2"></div>
                <p className="text-center text-[#EF4444]">{err.bvn}</p>
              </>
            )}
          </div> */}
      {selectedFile && (
        <div className="w-full center ">
          <img
            src=""
            alt=""
            srcSet=""
            id="previewImage"
            className="h-[300px]"
          />
        </div>
      )}
      <div className="border rounded-xl">
        <FileUploader
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </div>

      <div className="h-[1px] w-full bg-neutral100"></div>
      {loading ? (
        <PrimaryButton label={<Spinner />} />
      ) : (
        <PrimaryButton
          label={"Upload"}
          onClick={() => {
            uploadUtilityDoc(selectedFile, setStep, setLoading);
          }}
        />
      )}
    </motion.div>
  );
};

// const KYCStepTwo = ({ documentType, setStep }) => {
//   const [NIN, setNIN] = useState("");
//   const [BVN, setBVN] = useState("");
//   const [err, setError] = useState({});
//   const [loading, setLoading] = useState(false);

//   return (
//     <motion.div
//       key={"step-2"}
//       initial={{ x: "-20%", opacity: 0 }}
//       animate={{ x: "0%", opacity: "100%" }}
//       transition={{ ease: "easeInOut", duration: 0.25 }}
//       exit={{ x: "-20%", opacity: 0 }}
//       className="space-y-[26px] font-inter"
//     >
//       {documentType === "NIN" && (
//         <div className="space-y-[26px] font-inter">
//           <p className="text-2xl font-semibold font-clash text-grey600">
//             NIN verification
//           </p>
//           <p className="w-full text-[15px] leading-snug text-[#71879C]">
//             Enter your vNIN, dial *346*3*Your NIN*71546# on your NIN-registered
//             line to get your 16-digit vNIN.
//           </p>
//           <div>
//             <div
//               className={`focus-within:border-[#5DADEC]  border-2 p-2.5 rounded-[10px] bg-[#F2F7FA] ${
//                 err !== "" && err.nin
//                   ? "border-[#EF4444]"
//                   : "border-transparent"
//               }`}
//             >
//               <label
//                 htmlFor="username"
//                 className="text-xs text-[#71879C] font-inter"
//               >
//                 vNIN
//               </label>
//               <br />
//               <div className="h-[2px]" />
//               <input
//                 type="text"
//                 placeholder=""
//                 name="nin"
//                 id="nin"
//                 value={NIN}
//                 className={`text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full `}
//                 onChange={(e) => {
//                   setError("");
//                   setNIN(e.target.value);
//                 }}
//               />
//             </div>
//             {err && err.bvn && (
//               <>
//                 <div className="h-2"></div>
//                 <p className="text-center text-[#EF4444]">{err.bvn}</p>
//               </>
//             )}
//           </div>

//           <div className="flex gap-3">
//             <PrimaryButton
//               disabled={NIN.length !== 11}
//               label={loading ? <Spinner /> : "Confirm"}
//               onClick={async (e) => {
//                 e.preventDefault();
//                 if (NIN.length === 11) {
//                   updateIdentity(
//                     BVN,
//                     NIN,
//                     setLoading,
//                     setError,
//                     setStep,
//                     documentType
//                   );
//                 }
//               }}
//             />
//             <SecondaryButton
//               label={"Back"}
//               width="w-auto px-6"
//               onClick={() => {
//                 setStep(1);
//               }}
//             />
//           </div>
//         </div>
//       )}

//       {documentType === "BVN" && (
//         <div className="space-y-[26px] font-inter">
//           <p className="text-2xl font-semibold font-clash text-grey600">
//             BVN verification
//           </p>
//           <p className="w-full text-[15px] leading-snug text-[#71879C]">
//             Enter your BVN, dial *565*0# on your BVN-registered line to get your
//             BVN code.
//           </p>
//           <div>
//             <div
//               className={`focus-within:border-[#5DADEC]  border-2 p-2.5 rounded-[10px] bg-[#F2F7FA] ${
//                 err !== "" && err.bvn
//                   ? "border-[#EF4444]"
//                   : "border-transparent"
//               }`}
//             >
//               <label
//                 htmlFor="username"
//                 className="text-xs text-[#71879C] font-inter"
//               >
//                 bvn
//               </label>
//               <br />
//               <div className="h-[2px]" />
//               <input
//                 type="text"
//                 placeholder=""
//                 name="bvn"
//                 id="bvn"
//                 value={BVN}
//                 className={`text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full `}
//                 onChange={(e) => {
//                   setError("");
//                   setBVN(e.target.value);
//                 }}
//               />
//             </div>
//             {err && err.bvn && (
//               <>
//                 <div className="h-2"></div>
//                 <p className="text-center text-[#EF4444]">{err.bvn}</p>
//               </>
//             )}
//           </div>

//           <div className="flex gap-3">
//             <PrimaryButton
//               disabled={BVN.length !== 11}
//               label={loading ? <Spinner /> : "Confirm"}
//               onClick={async (e) => {
//                 e.preventDefault();
//                 if (BVN.length === 11) {
//                   updateIdentity(
//                     BVN,
//                     NIN,
//                     setLoading,
//                     setError,
//                     setStep,
//                     documentType
//                   );
//                 }
//               }}
//             />
//             <SecondaryButton
//               label={"Back"}
//               width="w-auto px-6"
//               onClick={() => {
//                 setStep(1);
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// };

const KYCStepThree = ({ setStep }) => {
  return (
    <motion.div
      key={"step-1"}
      initial={{ x: "-20%", opacity: 0 }}
      animate={{ x: "0%", opacity: "100%" }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
      exit={{ x: "-20%", opacity: 0 }}
      className="space-y-[26px] font-inter"
    >
      <p className="text-2xl font-semibold font-clash text-grey600">
        Upload a Selfie
      </p>
      <p className="w-full text-[15px] leading-snug text-[#71879C]">
        We will be requiring a selfie from you please take note of the
        following:
      </p>

      <div className="rounded-2xl bg-[#F2F7FA] p-6 space-y-4">
        <div className="flex gap-2 items-center">
          <img src={check} alt="" />
          <p className="font-inter text-sm text-[#71879C]">
            Take image with a clear background.
          </p>
        </div>
        <div className="flex border-b border-dashed w-full border-neutral200 h-[1px]"></div>
        <div className="flex gap-2 items-center">
          <img src={check} alt="" />
          <p className="font-inter text-sm text-[#71879C]">
            Make sure you remove glass, hat and all other accessories from your
            face.
          </p>
        </div>
        <div className="flex border-b border-dashed w-full border-neutral200 h-[1px]"></div>
        <div className="flex gap-2 items-center">
          <img src={check} alt="" />
          <p className="font-inter text-sm text-[#71879C]">
            Make sure your two ears are showing.
          </p>
        </div>
      </div>

      <PrimaryButton
        label={"Take selfie"}
        onClick={() => {
          setStep(2);
        }}
      />
    </motion.div>
  );
};
const KYCStepFour = ({ setStep }) => {
  const [imageDataUrl, setImageDataUrl] = useState(null);

  return (
    <motion.div
      key={"step-1"}
      initial={{ x: "-20%", opacity: 0 }}
      animate={{ x: "0%", opacity: "100%" }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
      exit={{ x: "-20%", opacity: 0 }}
      className="space-y-[26px] font-inter"
    >
      <p className="text-2xl font-semibold font-clash text-grey600">
        Upload a Selfie
      </p>

      <SelfieCapture
        imageDataUrl={imageDataUrl}
        setImageDataUrl={setImageDataUrl}
        setStep={setStep}
      />
    </motion.div>
  );
};

const KYCStepFive = ({ setStep }) => {
  return (
    <motion.div
      key={"step-1"}
      initial={{ x: "-20%", opacity: 0 }}
      animate={{ x: "0%", opacity: "100%" }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
      exit={{ x: "-20%", opacity: 0 }}
      className="space-y-[26px] font-inter"
    >
      <div className="max-w-[353px] mx-auto h-[60vh] flex flex-col items-center">
        <div className="w-[270px] mx-auto">
          <div className="center mb-10">
            <lottie-player
              autoplay="true"
              loop="true"
              mode="normal"
              style={{
                width: "200px",
                height: "200px",
                marginHorizontal: "auto",
              }}
              src="https://assets9.lottiefiles.com/packages/lf20_R09JykuodG.json"
            />
          </div>
          <div className="h-4"></div>
          <p className="text-2xl font-medium text-[#1B#0014281B1B] font-clash text-center">
            Details uploaded successfully
          </p>
          <div className="h-1 5"></div>
          <p className="text-center text-[#71879C]">
            We have received your details and are currently validating it, check
            back soon.
          </p>
        </div>
        <PrimaryButton
          className="w-full flex items-center justify-center bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] my-auto"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
          width="w-fit mt-10"
          label={"Done"}
        />
      </div>
    </motion.div>
  );
};

const Tier3Verification = ({ toggle, setToggle }) => {
  const [documentType, setDocumentType] = useState("");
  const [step, setStep] = useState(1);

  return (
    <SideBarWrapper toggle={toggle}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <p className="text-sm font-medium leading-normal text-grey400">
            Tier 3 Verification
          </p>
          <UserGroupIcon className=" h-[20px] text-blue25" />
        </div>
        <CloseButton
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      <div className="h-9" />
      <div className="h-full overflow-y-scroll pb-14 font-inter ">
        {/* box */}
        <div className="bg-white  rounded-[8px] p-10">
          <div className="mx-auto w-[353px] space-y-6">
            <AnimatePresence>
              {/* Selfie Instruction */}
              {step === 1 && (
                <KYCStepThree setStep={setStep} documentType={documentType} />
              )}

              {/* Upload Selfie */}
              {step === 2 && (
                <KYCStepFour setStep={setStep} documentType={documentType} />
              )}

              {/* {step === 2 && (
                <KYCStepTwo setStep={setStep} documentType={documentType} />
              )} */}

              {step === 3 && (
                <UploadGovtID
                  setStep={setStep}
                  setDocumentType={setDocumentType}
                />
              )}
              {step === 4 && (
                <UploadUtilityDoc
                  setStep={setStep}
                  setDocumentType={setDocumentType}
                />
              )}

              {step === 5 && (
                <KYCStepFive setStep={setStep} documentType={documentType} />
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="h-9" />

        <div className="h-[42px]" />
      </div>
    </SideBarWrapper>
  );
};

export default Tier3Verification;
