import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  BoltIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  GlobeAltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import SideBarWrapper from "../SideBarWrapper";
import { fetchDataId, purchaseElectricity, validateMeter } from "./ServiceApi";
import PrimaryButton from "../Inputs/PrimaryButton";
import PinDialog from "../TransactionPin/PinDialog";
import { Spinner } from "../Spinner";
import SuccessPage from "../TransactionStatus/TransactionSuccess";
import TransactionFailed from "../TransactionStatus/TransactionFailed";
import { MdSupportAgent } from "react-icons/md";
import { truncateText } from "../../utils/TruncateText";
import Receipt from "../Receipts/Receipt";
import { fetchTransactions } from "../../features/TransactionsSlice";

const minimumAmount = [
  {
    name: "PH",
    amount: 200,
  },
  {
    name: "Abuja",
    amount: 200,
  },
  {
    name: "Kaduna",
    amount: 1000,
  },
  {
    name: "Jos",
    amount: 1000,
  },
  {
    name: "Eko",
    amount: 1000,
  },
  {
    name: "Ikeja",
    amount: 1100,
  },
  {
    name: "Ibadan",
    amount: 100,
  },
  {
    name: "Enugu",
    amount: 200,
  },
  {
    name: "Kano",
    amount: 100,
  },
];

const Electricity = ({ toggle, setToggle }) => {
  const [network, setNetwork] = useState(null);
  const [networkDrop, setNetworkDrop] = useState(false);
  const [plan, setPlan] = useState({});
  const [planDrop, setPlanDrop] = useState(false);
  const [balanceCheckDrop, setBalanceCheckDrop] = useState(false);

  const [provider, setProvider] = useState(null);
  const [currentProducts, setCurrentProducts] = useState(null);
  const [meter_number, setMeter_number] = useState("");
  const [amount, setAmount] = useState(0);
  const [step, setStep] = useState(0);
  const [mobile_number, setMobile_number] = useState("");

  const setAllProvider = async () => {
    const response = await fetchDataId();
    setProvider(response.result.electric_provider);
    setCurrentProducts(response.result.electric_products);
  };

  useEffect(() => {
    setAllProvider();
  }, []);

  const [meterDetail, setMeterDetail] = useState(null);
  const [meterLoading, setMeterLoading] = useState(false);

  const validMeter = async () => {
    setMeterLoading(true);
    try {
      const response = await validateMeter({
        metre_number: meter_number,
        electricity_plan_api_id: plan.product_id,
      });

      if (response.data.success) {
        setMeterDetail(response.data.customer);
      }

      if (!response.data.success) {
        let response = {
          customerName: "Invalid Customer Detail",
        };
        setMeterDetail({ ...response });
      }

      setMeterLoading(false);
      console.log(response.data);
    } catch (error) {}
  };

  React.useEffect(() => {
    const getData = setTimeout(() => {
      if (meter_number.length === 11) {
        validMeter();
      }
    }, 500);

    return () => clearTimeout(getData);
    // eslint-disable-next-line
  }, [meter_number, plan]);

  // PIN
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenFailed, setIsOpenFailed] = useState(false);

  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [error, setError] = useState("");
  const [failedMsg, setFailedMsg] = useState("");

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  const { products } = useSelector((state) => state.product);

  const wallet = useSelector((state) => state.wallet);

  let data_product = products.electricity;
  const meterTypes = [...new Set(data_product.map((item) => item.meter_type))];
  const [toggleReceipt, setToggleReceipt] = useState(false);
  const [transaction, setTransaction] = useState("");
  const dispatch = useDispatch();

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
              <BoltIcon className=" h-[20px] text-blue25" />
              <p className="text-sm font-medium leading-normal text-grey400">
                Electricity
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
          <div className="bg-white rounded-[8px] p-10">
            {step === 0 && (
              <div className="mx-auto w-[353px] space-y-6">
                {/* Support */}
                <div className="bg-purple5 border border-purple50 rounded-lg p-4 space-y-2.5">
                  <div className="rounded-full w-10 h-10 bg-purple50 center">
                    <MdSupportAgent className="text-2xl text-purple500" />
                  </div>
                  <p className="text-purple300 text-sm">
                    For assistance, you can contact your DISCO Customers Care
                    unit.
                  </p>
                </div>

                {/* Minimum bill payment */}
                <div className="relative">
                  <div
                    className="bg-neutral100 flex px-2.5 py-[14px] rounded-lg justify-between items-center"
                    onClick={() => {
                      setBalanceCheckDrop(!balanceCheckDrop);
                    }}
                  >
                    <p className="text-[14px] text-neutral300">
                      Minimum Bill Payment
                    </p>
                    <div className="flex items-center justify-center h-6 w-6 ">
                      {balanceCheckDrop ? (
                        <ChevronUpIcon className="h-4 text-grey150" />
                      ) : (
                        <ChevronDownIcon className="h-4 text-grey150" />
                      )}
                    </div>
                  </div>
                  {balanceCheckDrop && (
                    <div className="absolute top-full mt-1 p-2 space-y-2 bg-white w-full rounded-lg z-10 shadow-[10px_40px_100px_0px_rgba(0,_0,_0,_0.08)]">
                      <div className="bg-neutral100 border border-neutral200 rounded-lg">
                        {minimumAmount.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={`flex border-b border-neutral200`}
                            >
                              <div className="flex-1 py-2 px-4 border-r border-neutral200">
                                <p className="text-sm text-text100">
                                  {item.name}
                                </p>
                              </div>
                              <div className="flex-1 py-2 px-4">
                                <p className="text-sm text-text100">
                                  ₦ {item.amount}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Electricity Meter type */}
                <div className="relative">
                  <div
                    className="bg-neutral100 flex p-2.5 rounded-lg justify-between items-center"
                    onClick={() => {
                      setNetworkDrop(!networkDrop);
                    }}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">
                        Electricity Meter type
                      </p>
                      <p className="text-[16px] text-neutral300">
                        {network?.toUpperCase() || "Select"}
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
                      {meterTypes?.map((networkItem, index) => {
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
                              {networkItem?.toUpperCase()}
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

                {/* Electricity DISCO Operator */}
                <div className="relative">
                  <div
                    className="bg-neutral100 flex p-2.5 rounded-lg justify-between items-center"
                    onClick={() => {
                      setPlanDrop(!planDrop);
                    }}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">
                        Electricity DISCO Operator
                      </p>
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
                    <div className="absolute top-full mt-1 p-2 space-y-4 bg-white w-full rounded-lg z-10 max-h-[350px] overflow-y-scroll">
                      {network &&
                        data_product
                          .filter((item) => {
                            return item.meter_type === network;
                          })
                          .map((networkItem, index) => {
                            

                            return (
                              <div
                                className="flex rounded-md px-3 py-[5px] hover:bg-neutral100 justify-between cursor-pointer"
                                key={index}
                                onClick={() => {
                                  setPlan({
                                    ...networkItem,
                                    
                                  });
                                  setPlanDrop(false);
                                }}
                              >
                                <div>
                                  <p className="text-grey400 text-[14px] font-medium">
                                    {networkItem?.description}
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

                {/* Electricity Meter Number */}
                <div>
                  <div
                    className={`bg-neutral100 flex p-2.5 rounded-t-lg justify-between items-center ${
                      error ? "border border-red400" : ""
                    }`}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">
                        Electricity Meter Number
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
                    {meterLoading ? <Spinner color="gray" /> : null}
                  </div>
                  <div className="flex justify-between items-center border border-neutral100">
                    <div className="flex gap-1 px-4 py-2 h-9">
                      <p className="text-xs text-text100">
                        {meterDetail?.customerName}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border border-neutral100 border-t-0">
                    <div className="flex gap-1 px-4 py-2 h-9">
                      <p className="text-xs text-text100">
                        {meterDetail &&
                          meterDetail?.customerAddress &&
                          truncateText(meterDetail?.customerAddress, 40)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <div>
                    <div
                      className={`bg-neutral100 flex p-2.5 rounded-lg justify-between items-center ${
                        error ? "border border-red400" : ""
                      }`}
                    >
                      <div className="space-y-2">
                        <p className="text-[11px] text-text100">
                          Mobile number
                        </p>
                        <input
                          type="number"
                          value={mobile_number}
                          placeholder="000 0000 0000"
                          className="text-neutral300 focus:outline-none w-full bg-transparent"
                          onChange={(e) => {
                            setMobile_number(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    {error && (
                      <p className="mt-2 text-red400 text-sm">{error}</p>
                    )}
                  </div>
                  <div className="h-1.5" />
                  {/* Validate Phone number
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <input type="checkbox" name="validate_phone" id="validate_phone" disabled={false} className=""/>
                   <p className="text-text100 text-xs font-inter">Validate mobile number</p>                  
                  </div>
                </div> */}
                </div>

                {/* Amount to pay */}
                <div className="rounded-lg  overflow-hidden">
                  <div className="bg-neutral100 flex p-2.5 justify-between items-center ">
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">Amount to pay</p>
                      <div className="flex">
                        <p className="text-[16px] text-neutral300 mr-1">₦</p>
                        <input
                          type="number"
                          value={amount}
                          placeholder="0"
                          className="text-neutral300 focus:outline-none w-full bg-transparent flex-1"
                          onChange={(e) => {
                            setAmount(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    {/* <div className="flex items-center gap-1 text-primaryColor py-1 px-2 bg-white rounded-full">
                      <p>2% Discount</p>
                      <GiftIcon className="h-5" />
                    </div> */}
                  </div>
                  <div
                    className={`p-2 
                  ${
                    amount > wallet?.data?.data.balance
                      ? "bg-red500"
                      : "bg-green700"
                  } flex items-center gap-2 text-white font-inter text-xs`}
                  >
                    {amount > wallet?.data?.data.balance ? (
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
                        placeholder="0"
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
                      mobile_number &&
                      meter_number &&
                      meterDetail &&
                      meterDetail.customerAddress &&
                      meterDetail.customerName &&
                      network &&
                      amount &&
                      amount < wallet?.data?.data.balance
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
                    <p className="text-[11px] text-text100 text-xs">
                      Electricity Meter type
                    </p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      {network?.name}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">
                      DISCO Operator
                    </p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      {plan?.description}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">
                      Elctricity Meter Number
                    </p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      {meter_number}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">
                      Amount to pay
                    </p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      ₦ {amount}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">Name</p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      {meterDetail.customerName}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">
                      Mobile number
                    </p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      {mobile_number}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">Address</p>
                    <p className="text-[11px] text-neutral300 text-xs w-[60%] text-right">
                      {meterDetail.customerAddress}
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
            metre_number: meter_number.toString(),
            phone_number: mobile_number,
            electricity_plan_api_id: plan.product_id,
            validated_customer_name: meterDetail.customerName,
            validated_address: meterDetail.customerAddress,
            amount: amount,
          };
          console.log(userInput);

          try {
            const response = await purchaseElectricity(userInput, pin);
            console.log(response);

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
            console.log(error);
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
          console.log(transaction);
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

export default Electricity;
