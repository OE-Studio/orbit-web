import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SideBarWrapper from "../SideBarWrapper";

import {
  ArrowDownOnSquareIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  ReceiptPercentIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { format } from "date-fns";

import convertToSentenceCase from "../../utils/convertToSentence";
import transactionImg from "../../assets/empty-state/emptyTransaction.svg";
import cut from "../../assets/receipt/bottom.svg";
import html2canvas from "html2canvas";
import { HourglassHigh } from "phosphor-react";
// import html2pdf from "html2pdf.js";

export const ReceiptHeader = ({
  topLabel,
  topDesc,
  bottomLabel,
  bottomDesc,
}) => {
  // const [allBg, setAllBg] = useState(null);
  const [selectedBg, setSelectedBg] = useState(null);
  const user = useSelector((state) => state.user.user);
  const allBg = useSelector((state) => state.backgrounds.data);
 

  useEffect(() => {
    const bgDataFetch = async () => {
      // const response = await GetAllBackgrounds();
      // setAllBg(response.allImages);
    };

    bgDataFetch();

    if (allBg) {
      const preferredBg = user.preferredBg;

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
    <div className="bg-blue500 h-[156px] rounded-[10px] relative overflow-hidden flex items-center space-x-4 p-4">
      <div className="absolute top-0 left-0 z-0">
        <img src={selectedBg?.bgLink} alt="" />
      </div>

      <div className="space-y-1 relative z-1 ">
        <div className="w-2 h-2 rounded-full bg-[#00FF91]" />
        <div className="h-20 w-[1px] mx-auto bg-[#00FF91]"></div>
        <div className="w-2 h-2 rounded-full bg-[#00FF91]" />
      </div>
      <div className="flex-1 flex flex-col relative z-1 justify-between h-full ">
        <div className="mb-auto">
          <p className="text-[#00FF91] font-inter font-semi-bold text-xs">
            {topLabel}
          </p>
          <p className="text-purple25 font-inter ">{topDesc}</p>
        </div>

        <div className="mt-auto">
          <p className="text-[#00FF91] font-inter font-semi-bold text-xs">
            {bottomLabel}
          </p>
          <p className="text-purple25 font-inter">{bottomDesc}</p>
        </div>
      </div>
    </div>
  );
};

export const StatusState = ({ status }) => {
  let statusIcon;
  let statusStyle;

  switch (status) {
    case "successful":
      statusStyle = "border-[#00CC74] text-[#00AA61] bg-[#E5FFF4]";
      statusIcon = <CheckBadgeIcon className="h-4" />;
      break;

    case "pending":
      statusStyle = "border-grey300 text-grey300 ";
      statusIcon = <HourglassHigh className="h-4" weight="fill" />;
      break;

    case "failed":
      statusStyle = "border-orange400 text-orange500 bg-orange50";
      statusIcon = <ExclamationTriangleIcon className="h-4" />;
      break;

    default:
      break;
  }
  return (
    <div
      className={`flex px-2.5 center py-1.5 border rounded-full ${statusStyle}`}
    >
      <p className="text-sm">{convertToSentenceCase(status)}</p>
      <div className="w-2"></div>
      {statusIcon}
    </div>
  );
};

function downloadImage(imageData) {
  const link = document.createElement("a");
  link.href = imageData;
  link.download = "receipt.png";
  link.click();
}

const Receipt = ({ transaction, toggle, setToggle }) => {
  const { transactions, status } = useSelector((state) => state.transactions);

  const [current, setCurrent] = useState(null);
  const [toggleActions, setToggleActions] = useState(false);

  useEffect(() => {
    if (status === "fulfilled") {
      let selected = transactions.find((item) => {
        return item.transactionId === transaction;
      });
      setCurrent(selected);
    }
    // eslint-disable-next-line
  }, [status]);

  let receiptBody;

  // Data Receipt
  if (current?.narration.startsWith("data")) {
    receiptBody = (
      <>
        <div className="max-w-[350px] mx-auto">
          <ReceiptHeader
            topLabel={"Data"}
            topDesc={
              <>
                {current.description} {current.product_type} ₦
                <span className="font-semibold">
                  {" "}
                  {current.amount.toFixed(2)}
                </span>
              </>
            }
            bottomLabel={"Phone number"}
            bottomDesc={
              <span className="font-semibold"> {current.recipient_name}</span>
            }
          />
          <div className="h-6"></div>
          {/* Wallet */}
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">Account</p>
              <p className="text-sm font-inter text-grey300 text-right font-semibold w-[45%]">
                {" "}
                Wallet
              </p>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Transaction Reference */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">
                Transaction reference
              </p>
              <p className="text-sm font-inter text-grey300 text-right font-semibold w-[45%]">
                {" "}
                # {current.transactionId}
              </p>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Status */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">Status</p>
              <StatusState status={current.status} />
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Date */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-md font-inter text-grey200">Date</p>
              <div className="w-[45%]">
                <p className="text-sm font-inter text-grey300 text-right font-semibold">
                  {format(Date.parse(current.updatedAt), "do MMM, yyyy")}
                </p>
                <p className="text-xs font-inter text-grey300 text-right font-medium">
                  {format(Date.parse(current.updatedAt), "h:mmaaaa")}
                </p>
              </div>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>
        </div>
      </>
    );
  }

  // Airtime Receipt
  if (current?.narration.startsWith("airtime")) {
    receiptBody = (
      <>
        <div className="max-w-[350px] mx-auto">
          <ReceiptHeader
            topLabel={"Airtime"}
            topDesc={
              <>
                ₦
                <span className="font-semibold">
                  {" "}
                  {current.amount.toFixed(2)}
                </span>
              </>
            }
            bottomLabel={"Phone number"}
            bottomDesc={
              <span className="font-semibold"> {current.recipient_name}</span>
            }
          />
          <div className="h-6"></div>
          {/* Wallet */}
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">Account</p>
              <p className="text-sm font-inter text-grey300 text-right font-semibold w-[45%]">
                {" "}
                Wallet
              </p>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Transaction Reference */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">
                Transaction reference
              </p>
              <p className="text-sm font-inter text-grey300 text-right font-semibold w-[45%]">
                {" "}
                # {current.transactionId}
              </p>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Status */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">Status</p>
              <StatusState status={current.status} />
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Date */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-md font-inter text-grey200">Date</p>
              <div className="w-[45%]">
                <p className="text-sm font-inter text-grey300 text-right font-semibold">
                  {format(Date.parse(current.updatedAt), "do MMM, yyyy")}
                </p>
                <p className="text-xs font-inter text-grey300 text-right font-medium">
                  {format(Date.parse(current.updatedAt), "h:mmaaaa")}
                </p>
              </div>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>
        </div>
      </>
    );
  }

  // Transfer Receipt
  if (current?.narration.includes("transfer")) {
    receiptBody = (
      <>
        <div className="max-w-[350px] mx-auto">
          <ReceiptHeader
            topLabel={"Amount"}
            topDesc={
              <>
                ₦
                <span className="font-semibold">
                  {" "}
                  {current.amount.toFixed(2)}
                </span>
              </>
            }
            bottomLabel={"Receiver"}
            bottomDesc={
              <span className="font-semibold"> {current.recipient_name}</span>
            }
          />
          <div className="h-6"></div>
          {/* Wallet */}
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">Account</p>
              <p className="text-sm font-inter text-grey300 text-right font-semibold w-[45%]">
                {" "}
                Wallet
              </p>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Transaction Reference */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">
                Transaction reference
              </p>
              <p className="text-sm font-inter text-grey300 text-right font-semibold w-[45%]">
                {" "}
                # {current.transactionId}
              </p>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Status */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">Status</p>
              <StatusState status={current.status} />
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Date */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-md font-inter text-grey200">Date</p>
              <div className="w-[45%]">
                <p className="text-sm font-inter text-grey300 text-right font-semibold">
                  {format(Date.parse(current.updatedAt), "do MMM, yyyy")}
                </p>
                <p className="text-xs font-inter text-grey300 text-right font-medium">
                  {format(Date.parse(current.updatedAt), "h:mmaaaa")}
                </p>
              </div>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>
        </div>
      </>
    );
  }

  // Electricity Receipt
  if (current?.narration.toLowerCase().startsWith("electricity")) {
    receiptBody = (
      <>
        <div className="max-w-[350px] mx-auto">
          <ReceiptHeader
            topLabel={"Electricity"}
            topDesc={
              <>
                ₦
                <span className="font-semibold">
                  {" "}
                  {current.amount.toFixed(2)}
                </span>
              </>
            }
            bottomLabel={"METER NUMBER"}
            bottomDesc={
              <span className="font-semibold"> {current.meter_number}</span>
            }
          />
          <div className="h-6"></div>
          {/* Wallet */}
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">Account</p>
              <p className="text-sm font-inter text-grey300 text-right font-semibold w-[45%]">
                {" "}
                Wallet
              </p>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Transaction Reference */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">
                Transaction reference
              </p>
              <p className="text-sm font-inter text-grey300 text-right font-semibold w-[45%]">
                {" "}
                # {current.transactionId}
              </p>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Date */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-md font-inter text-grey200">Date</p>
              <div className="w-[45%]">
                <p className="text-sm font-inter text-grey300 text-right font-semibold">
                  {format(Date.parse(current.updatedAt), "do MMM, yyyy")}
                </p>
                <p className="text-xs font-inter text-grey300 text-right font-medium">
                  {format(Date.parse(current.updatedAt), "h:mmaaaa")}
                </p>
              </div>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Name */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-md font-inter text-grey200">Name</p>
              <div className="w-[45%]">
                <p className="text-sm font-inter text-grey300 text-right font-semibold">
                  {current.recipient_name}
                </p>
              </div>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Address */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-md font-inter text-grey200">Address</p>
              <div className="w-[60%]">
                <p className="text-xs font-inter text-grey300 text-right font-medium">
                  {current.address}
                </p>
              </div>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Token */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-md font-inter text-grey200">Token</p>
              <div className="w-[60%]">
                <p className="text-xs font-inter text-grey300 text-right font-medium">
                  {current.narration}
                </p>
              </div>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Email */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-md font-inter text-grey200">Email</p>
              <div className="w-[45%]">
                <p className="text-sm font-inter text-grey300 text-right font-semibold">
                  {current.email_trx}
                </p>
              </div>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Phone number */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-md font-inter text-grey200">Phone number</p>
              <div className="w-[45%]">
                <p className="text-sm font-inter text-grey300 text-right font-semibold">
                  {current.phone_number_trx}
                </p>
              </div>
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>

          {/* Status */}
          <div className="h-6"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm font-inter text-grey200">Status</p>
              <StatusState status={current.status} />
            </div>
          </div>
          <div className="h-5"></div>
          <div className="w-full border-b-[1.5px] border-dashed border-neutral200"></div>
        </div>
      </>
    );
  }

  return (
    <SideBarWrapper toggle={toggle}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <ReceiptPercentIcon className=" h-[20px] text-blue25" />
          <p className="text-sm font-medium leading-normal text-grey400">
            Receipt
          </p>
        </div>
        <div
          className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center"
          onClick={() => {
            setToggle(false);
          }}
        >
          <XMarkIcon className=" w-6 h-6" />
        </div>
      </div>
      <div className="h-9" />
      <div className="h-full overflow-y-scroll pb-14 font-inter ">
        {/* box */}
        <div className="bg-white rounded-[8px] p-10">
          <div className="">{receiptBody}</div>
          {/* Cover the Receipt */}
          <div className="w-full h-full fixed bg-white z-[-199]"></div>
          {/* Downloadable Receipt */}
          <div className=" fixed z-[-200] bg-neutral100">
            <div
              id="receipt"
              className=" center bg-neutral100 relative p-[60px] w-full h-full"
            >
              <div className="relative bg-white p-4">
                <div className="absolute bottom-0 left-0">
                  <img
                    src={cut}
                    alt=""
                    className="w-[400px] relative top-[7px]"
                  />
                </div>
                <img src={transactionImg} alt="" className="mx-auto" />
                <div className="h-4"></div>
                <p className="text-center font-clash font-medium text-[#001428]">
                  Transaction Receipt
                </p>
                <div className="h-4"></div>

                {receiptBody}
              </div>
            </div>
          </div>
          <div className="max-w-[350px] mx-auto">
            <div className="h-6"></div>

            {/* Actions */}
            <div className="flex gap-8 font-clash font-medium">
              <button className="flex-1 rounded-full text-red500 bg-orange-50 center py-2.5 ">
                Report
              </button>
              <div className="relative flex-1">
                <button
                  className="w-full rounded-full text-white bg-green700 center py-2.5 "
                  onClick={() => {
                    setToggleActions(!toggleActions);
                  }}
                >
                  Share
                </button>
                {toggleActions && (
                  <div className="absolute top-full lift right-0 w-[186px] p-2 space-y-2 bg-white font-inter rounded-lg shadow-[10px_40px_100px_0px_rgba(0,_0,_0,_0.08)]">
                    <button
                      className="flex justify-between items-center w-full text-grey200 px-3 py-1.5 mt-2 hover:bg-neutral100 rounded-full"
                      onClick={() => {
                        setToggleActions(!toggleActions);
                        html2canvas(document.getElementById("receipt")).then(
                          (canvas) => {
                            const imageData = canvas.toDataURL("image/png");
                            downloadImage(imageData);
                          }
                        );
                      }}
                    >
                      <p>Image</p>
                      <ArrowDownOnSquareIcon className="text-neutral300 h-4" />
                    </button>

                    <button
                      className="flex justify-between items-center w-full text-grey200 px-3 py-1.5 mt-2 hover:bg-neutral100 rounded-full"
                      onClick={() => {
                        setToggleActions(!toggleActions);
                        // const receipt = document.getElementById("receipt");

                        // let elem = document.querySelector(".print");
                        // var WinPrint = window.open(
                        //   "",
                        //   "",
                        //   "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
                        // );
                        // WinPrint.document.write("<html><head><title></title>");
                        // WinPrint.document.write("</style>");
                        // WinPrint.document.write("</head>");
                        // WinPrint.document.write("<body>");
                        // WinPrint.document.write(receipt.innerHTML);
                        // WinPrint.document.write("</body>");
                        // WinPrint.document.write("</html>");
                        // WinPrint.document.close();
                        // WinPrint.focus();
                        // WinPrint.print();

                        // html2canvas(receipt).then((canvas) => {
                        //   const imageData = canvas.toDataURL("image/png");

                        //   const pdfOptions = {
                        //     margin: 10,
                        //     filename: "receipt.pdf",
                        //     image: { type: "png", data: imageData },
                        //     jsPDF: {
                        //       format: "A5",
                        //       orientation: "portrait",
                        //     },
                        //   };

                        //   html2pdf().from(canvas).set(pdfOptions).save();
                        // });
                      }}
                    >
                      <p>PDF</p>
                      <ArrowDownOnSquareIcon className="text-neutral300 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-9" />
        <div className="h-[42px]" />
      </div>
    </SideBarWrapper>
  );
};

export default Receipt;
