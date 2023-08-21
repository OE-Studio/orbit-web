import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  GlobeAltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import SideBarWrapper from "../SideBarWrapper";
import { fetchDataId, purchaseData, validateCable } from "./ServiceApi";
import PrimaryButton from "../Inputs/PrimaryButton";
import PinDialog from "../TransactionPin/PinDialog";
import { Spinner } from "../Spinner";
import SuccessPage from "../TransactionStatus/TransactionSuccess";
import TransactionFailed from "../TransactionStatus/TransactionFailed";
import Receipt from "../Receipts/Receipt";
import { fetchTransactions } from "../../features/TransactionsSlice";
import { MdRouter, MdSupportAgent } from "react-icons/md";
import { truncateText } from "../../utils/TruncateText";

const CableSubscription = ({ toggle, setToggle }) => {
  const [network, setNetwork] = useState(null);
  const [networkDrop, setNetworkDrop] = useState(false);
  const [plan, setPlan] = useState({});
  const [planDrop, setPlanDrop] = useState(false);

  const [dataProvider, setDataProvider] = useState(null);
  const [dataProducts, setDataProducts] = useState(null);

  const [step, setStep] = useState(0);

  const setAllProvider = async () => {
    const response = await fetchDataId();
    setDataProvider(response.result.cabelTV_provider);
    setDataProducts(response.result.cableTV_products);
  };

  useEffect(() => {
    setAllProvider();
  }, []);

  // eslint-disable-next-line
  const copyText = (value) => {
    navigator.clipboard.writeText(value);
  };

  const [meter_number, setMeter_number] = useState("");
  const [meterDetail, setMeterDetail] = useState(null);
  const [meterLoading, setMeterLoading] = useState(false);

  const validMeter = async () => {
    setMeterLoading(true);
    setMeterDetail("");
    try {
      const response = await validateCable({
        smart_card_number: meter_number,
        cable_plan_api_id: network.id,
      });
      setMeterLoading(false);
      setMeterDetail(response.data.customer_name);
      console.log(response.data);
    } catch (error) {}
  };

  React.useEffect(() => {
    const getData = setTimeout(() => {
      if (meter_number.length === 11 || meter_number.length === 10) {
        validMeter();
      }
    }, 500);

    return () => clearTimeout(getData);
    // eslint-disable-next-line
  }, [meter_number, network]);

  // PIN
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenFailed, setIsOpenFailed] = useState(false);
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [error, setError] = useState("");
  const [failedMsg, setFailedMsg] = useState("");

  const dispatch = useDispatch();

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  // Receipt
  const [toggleReceipt, setToggleReceipt] = useState(false);
  const [transaction, setTransaction] = useState("");
  // "5697c4c9-78e4-4c21-9d9c-92d439a2b71e"

  const { products } = useSelector((state) => state.product);

  const wallet = useSelector((state) => state.wallet);

  let data_product = products?.filter((item) => {
    return item.product === "Cable Plan";
  });

  return (
    <>
      {toggleReceipt ? (
        <Receipt
          transaction={transaction}
          setToggle={setToggleReceipt}
          toggle={toggleReceipt}
        />
      ) : null}
      <SideBarWrapper toggle={toggle}>
        {/* Header */}
        {step === 0 ? (
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <MdRouter className=" h-[20px] text-blue25" />
              <p className="text-sm font-medium leading-normal text-grey400">
                Cable subscription
              </p>
            </div>
            <div
              className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <XMarkIcon className=" w-6 h-6" />
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div
              className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => {
                setStep(0);
              }}
            >
              <ChevronLeftIcon className=" w-6 h-6" />
            </div>

            <div className="flex gap-2">
              <GlobeAltIcon className=" h-[20px] text-blue25" />
              <p className="text-sm font-medium leading-normal text-grey400">
                Confirm Purchase
              </p>
            </div>
          </div>
        )}
        <div className="h-9" />
        <div className="h-full overflow-y-scroll pb-14 font-inter ">
          {/* box */}
          <div className="bg-white border border-[#E5ECF5] rounded-[8px] p-10">
            {step === 0 && (
              <div className="mx-auto w-[353px] space-y-6">
                {/* Support */}
                <div>
                  <div className="bg-purple5 border border-purple50 rounded-t-lg p-4 space-y-2.5">
                    <div className="rounded-full w-10 h-10 bg-purple50 center">
                      <MdSupportAgent className="text-2xl text-purple500" />
                    </div>
                    <p className="text-purple300 text-sm">
                      For assistance, you can contact the DSTV/GOTV Customers
                      Care unit on 01-2703232/08039003788 or on the toll-free
                      lines: 08149860333, 07080630333 and 09090630333
                    </p>
                  </div>
                  <div className="bg-purple5 border border-purple50 rounded-b-lg p-4 space-y-2.5 -mt-1">
                    <p className="text-purple300 text-sm">
                      Contact the StarTimes Customers Care unit on 09-4618888,
                      01-4618888
                    </p>
                  </div>
                </div>

                {/* Network */}
                <div className="relative">
                  <div
                    className="bg-neutral100 flex p-2.5 rounded-lg justify-between items-center"
                    onClick={() => {
                      setNetworkDrop(!networkDrop);
                    }}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">
                        Cable TV Service Provide
                      </p>
                      <p className="text-[16px] text-neutral300">
                        {network?.name || "Select"}
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-6 w-6 ">
                      {networkDrop ? (
                        <ChevronUpIcon className="h-4 text-grey150" />
                      ) : (
                        <ChevronDownIcon className="h-4 text-grey150" />
                      )}
                    </div>
                  </div>
                  {networkDrop && (
                    <div className="absolute top-full mt-1 p-2 space-y-2 bg-white w-full rounded-lg z-10">
                      {dataProvider?.map((networkItem, index) => {
                        return (
                          <div
                            className="flex rounded-full px-3 py-[5px] hover:bg-neutral100 justify-between cursor-pointer"
                            key={index}
                            onClick={() => {
                              setNetwork(networkItem);

                              setNetworkDrop(false);
                            }}
                          >
                            <p className="text-grey200 text-[14px] font-medium">
                              {networkItem.name}
                            </p>

                            <div className="h-4 w-4 border border-[B8C0CC] rounded-full center">
                              {networkItem === network && (
                                <div className="w-2.5 h-2.5 rounded-full bg-neutral300" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Cable SmartCard Number */}
                <div>
                  <div
                    className={`bg-neutral100 flex p-2.5 rounded-t-lg justify-between items-center ${
                      error ? "border border-red400" : ""
                    }`}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">
                        Smart Card number / IUC number
                      </p>
                      <input
                        type="number"
                        value={meter_number}
                        placeholder="000 0000 0000"
                        className="text-neutral300 focus:outline-none w-full bg-transparent"
                        onChange={(e) => {
                          setMeter_number(e.target.value);
                        }}
                      />
                    </div>
                    {meterLoading ? <Spinner color="#00AA61" /> : null}
                  </div>
                  <div className="flex justify-between items-center border border-neutral100 border-t-0 rounded-b-lg">
                    <div className="flex gap-1 px-4 py-2 h-9">
                      <p className="text-xs text-text100">
                        {meterDetail && truncateText(meterDetail, 40)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plan */}
                <div className="relative">
                  <div
                    className="bg-neutral100 flex p-2.5 rounded-lg justify-between items-center"
                    onClick={() => {
                      setPlanDrop(!planDrop);
                    }}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">Cable PLAN</p>
                      <p className="text-[16px] text-neutral300">
                        {plan?.description || "Select"}
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-6 w-6 ">
                      {planDrop ? (
                        <ChevronUpIcon className="h-4 text-grey150" />
                      ) : (
                        <ChevronDownIcon className="h-4 text-grey150" />
                      )}
                    </div>
                  </div>
                  {planDrop && (
                    <div className="absolute top-full mt-1 p-2 space-y-4 bg-white w-full rounded-lg z-[5] max-h-[350px] overflow-y-scroll">
                      {data_product
                        .filter((item) => {
                          if (network) {
                            return (
                              item.product_provider ===
                              network.name.toUpperCase()
                            );
                          }
                          return true;
                        })
                        .map((networkItem, index) => {
                          const currentProduct = dataProducts.find(
                            (item) => item.id === networkItem.id
                          );

                          return (
                            <div
                              className="flex rounded-md px-3 py-[5px] hover:bg-neutral100 justify-between cursor-pointer"
                              key={index}
                              onClick={() => {
                                setPlan({
                                  ...networkItem,
                                  ...currentProduct,
                                });
                                setPlanDrop(false);
                              }}
                            >
                              <div>
                                <p className="text-grey400 text-[14px] font-medium">
                                  {currentProduct?.description}{" "}
                                  {currentProduct?.cable_type.toUpperCase()}
                                </p>
                                <div className="h-2" />
                                <p className="text-neutral-300 text-[14px] font-medium">
                                  ₦{networkItem.price}
                                </p>
                              </div>

                              <div className="h-4 w-4 border border-[B8C0CC] rounded-full center">
                                {networkItem === network && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-neutral300" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>

                {/* Amount */}
                <div className="rounded-lg  overflow-hidden">
                  <div className="bg-neutral100 flex p-2.5 justify-between items-center ">
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">Amount to pay</p>
                      <p className="text-[16px] text-neutral300">
                        ₦ {plan?.price || "Select"}
                      </p>
                    </div>
                    {/* <div className="flex items-center gap-1 text-primaryColor py-1 px-2 bg-white rounded-full">
                      <p>2% Discount</p>
                      <GiftIcon className="h-5" />
                    </div> */}
                  </div>
                  <div
                    className={`p-2 
                  ${
                    plan.price > wallet?.data?.data.balance
                      ? "bg-red500"
                      : "bg-green700"
                  } flex items-center gap-2 text-white font-inter text-xs`}
                  >
                    {plan.price > wallet?.data?.data.balance ? (
                      <p>You do not have sufficient balance</p>
                    ) : (
                      <>
                        <p>Wallet Balance</p>
                        <p className="font-bold">
                          {" "}
                          ₦ {wallet?.data?.data?.balance.toFixed(2)}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-full h-[1px] bg-neutral100" />

                {/* Coupon Code */}
                <div className="rounded-lg  overflow-hidden">
                  <div className="bg-neutral100 flex p-2.5 justify-between items-center ">
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">Coupon Code</p>
                      <input
                        type="numeric"
                        placeholder="000000"
                        className="text-neutral300 focus:outline-none w-full bg-transparent"
                        onChange={(e) => {}}
                      />
                    </div>
                  </div>
                </div>
                <div />

                <PrimaryButton
                  disabled={
                    !(
                      plan &&
                      meter_number &&
                      network &&
                      meterDetail &&
                      plan.price < wallet?.data?.data.balance
                    )
                  }
                  label={"Continue"}
                  onClick={() => {
                    setError("");
                    setStep(1);
                  }}
                />
              </div>
            )}
            {step === 1 && (
              <div className="mx-auto w-[353px] space-y-6">
                <div className="w-full h-[1px] bg-neutral100" />

                <div className="rounded-lg bg-neutral100  overflow-hidden px-6 py-7 gap-y-4">
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">Network</p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      {network?.name}
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">Data</p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      {plan?.description}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">
                      Amount to pay
                    </p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      ₦ {plan?.price}
                    </p>
                  </div>
                </div>
                <div />

                {loading ? (
                  <div className="w-full rounded-full bg-[#00AA61] py-4 flex center">
                    <Spinner />
                  </div>
                ) : (
                  <PrimaryButton label={"Confirm"} onClick={onClose} />
                )}
              </div>
            )}
          </div>
          <div className="h-9" />

          <div className="h-[42px]" />
        </div>
      </SideBarWrapper>
      <PinDialog
        pin={pin}
        setPin={setPin}
        isOpen={isOpen}
        pinError={pinError}
        setPinError={setPinError}
        onClose={onClose}
        onClick={async () => {
          setLoading(true);
          onClose();
          let userInput = {
            smart_card_number: meter_number,
            cable_plan_api_id: plan.id,
            validated_customer_name: meterDetail,
          };
          console.log(userInput);

          try {
            const response = await purchaseData(userInput, pin);
            console.log(response);
            setLoading(false);

            if (response && response.success) {
              console.log(response.trxDetails.transactionId);
              setTransaction(response.trxDetails.transactionId);
              dispatch(fetchTransactions());
              setIsOpenSuccess(true);
              return;
            }

            if (response && !response.success) {
              setLoading(false);
              // Incorrect Pin
              if (
                response.message === "Incorrect transaction pin" ||
                response.message === "input correct transaction pin"
              ) {
                setPin("");
                setIsOpen(true);
                setPinError(true);
                return;
              }

              // Invalid Number
              if (response.message === "invalid network selection") {
                console.log("Incorrect pin");
                setStep(0);
                setError("Invalid network selection");
                return;
              }

              setFailedMsg(response.message);
              setIsOpenFailed(true);
              return;
            }
          } catch (error) {
            console.log(error.response);
          }
        }}
      />
      <SuccessPage
        isOpen={isOpenSuccess}
        onClose={() => {
          setIsOpenSuccess(!isOpenSuccess);
        }}
        onDone={() => {
          setToggle(!toggle);
          setIsOpenSuccess(!isOpenSuccess);
          window.location.reload();
        }}
        onReceipt={() => {
          setToggle(false);
          setIsOpenSuccess(!isOpenSuccess);
          setToggleReceipt(true);
        }}
      />

      <TransactionFailed
        isOpen={isOpenFailed}
        onClose={() => {
          setIsOpenFailed(!isOpenFailed);
        }}
        onDone={() => {
          setToggle(!toggle);
          setIsOpenFailed(!isOpenFailed);
          window.location.reload();
        }}
        failedMsg={failedMsg}
        onReset={() => {
          setStep(0);
          setIsOpenFailed(!isOpenFailed);
        }}
      />
    </>
  );
};

export default CableSubscription;
