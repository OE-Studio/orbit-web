import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  ClipboardDocumentIcon,
  GiftIcon,
  GlobeAltIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import SideBarWrapper from "../SideBarWrapper";
import { fetchDataId, purchaseData } from "./ServiceApi";
import PrimaryButton from "../Inputs/PrimaryButton";
import PinDialog from "../TransactionPin/PinDialog";
import { Spinner } from "../Spinner";
import SuccessPage from "../TransactionStatus/TransactionSuccess";
import TransactionFailed from "../TransactionStatus/TransactionFailed";
import Receipt from "../Receipts/Receipt";
import { fetchTransactions } from "../../features/TransactionsSlice";

const PurchaseData = ({ toggle, setToggle }) => {
  const [network, setNetwork] = useState(null);
  const [networkDrop, setNetworkDrop] = useState(false);
  const [plan, setPlan] = useState({});
  const [planDrop, setPlanDrop] = useState(false);
  const [planTypeDrop, setPlanTypeDrop] = useState(false);
  const [planType, setPlanType] = useState("");
  const [balanceCheckDrop, setBalanceCheckDrop] = useState(false);

  const [dataProvider, setDataProvider] = useState(null);
  const [dataProducts, setDataProducts] = useState(null);
  const [mobile_number, setMobile_number] = useState("");
  const [step, setStep] = useState(0);

  const setAllProvider = async () => {
    const response = await fetchDataId();
    setDataProvider(response.result.data_provider);
    setDataProducts(response.result.data_products);
  };

  useEffect(() => {
    setAllProvider();
  }, []);

  const copyText = (value) => {
    navigator.clipboard.writeText(value);
  };

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

  let data_product = products.filter((item) => {
    return item.product === "Data Plan";
  });

  const planTypes = ["sme", "gifting", "cg", "direct coupon"];

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
              <p className="text-sm font-medium leading-normal text-grey400">
                Purchase Data
              </p>
              <UserGroupIcon className=" h-[20px] text-blue25" />
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
                {/* Balance USSD */}
                <div className="relative">
                  <div
                    className="bg-neutral100 flex px-2.5 py-[14px] rounded-lg justify-between items-center"
                    onClick={() => {
                      setBalanceCheckDrop(!balanceCheckDrop);
                    }}
                  >
                    <p className="text-[14px] text-neutral300">
                      USD data balance check
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
                    <div className="absolute top-full mt-1 p-2 space-y-2 bg-white w-full rounded-lg z-10">
                      <div
                        className="flex rounded-full px-3 py-[5px] hover:bg-neutral100 justify-between cursor-pointer"
                        onClick={() => {
                          copyText("*461*4#");
                        }}
                      >
                        <p className="text-grey200 text-[14px] font-medium">
                          MTN [SME] *461*4#
                        </p>

                        <ClipboardDocumentIcon className="h-5 text-neutral300" />
                      </div>
                      <div
                        className="flex rounded-full px-3 py-[5px] hover:bg-neutral100 justify-between cursor-pointer"
                        onClick={() => {
                          copyText("*131*4#");
                        }}
                      >
                        <p className="text-grey200 text-[14px] font-medium">
                          MTN [Gifting] *131*4# or *460*260#
                        </p>

                        <ClipboardDocumentIcon className="h-5 text-neutral300" />
                      </div>
                    </div>
                  )}
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
                      <p className="text-[11px] text-text100">Network</p>
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

                {/* Mobile Number */}
                <div>
                  <div
                    className={`bg-neutral100 flex p-2.5 rounded-lg justify-between items-center ${
                      error ? "border border-red400" : ""
                    }`}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">Mobile number</p>
                      <input
                        type="numeric"
                        value={mobile_number}
                        placeholder="000 0000 0000"
                        className="text-neutral300 focus:outline-none w-full bg-transparent"
                        onChange={(e) => {
                          setMobile_number(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {error && <p className="mt-2 text-red400 text-sm">{error}</p>}
                </div>

                {/* PlanType */}
                <div className="relative">
                  <div
                    className="bg-neutral100 flex p-2.5 rounded-lg justify-between items-center"
                    onClick={() => {
                      setPlanTypeDrop(!planTypeDrop);
                    }}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">Plan type</p>
                      <p className="text-[16px] text-neutral300">
                        {planType.toUpperCase() || "Select"}
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-6 w-6 ">
                      {planTypeDrop ? (
                        <ChevronUpIcon className="h-4 text-grey150" />
                      ) : (
                        <ChevronDownIcon className="h-4 text-grey150" />
                      )}
                    </div>
                  </div>
                  {planTypeDrop && (
                    <div className="absolute top-full mt-1 p-2 space-y-4 bg-white w-full rounded-lg z-10 max-h-[350px] overflow-y-scroll">
                      {network &&
                        planTypes.map((item, index) => {
                          return (
                            <div
                              className="flex rounded-md px-3 py-[5px] hover:bg-neutral100 justify-between cursor-pointer"
                              key={index}
                              onClick={() => {
                                setPlanType(item);
                                setPlanTypeDrop(false);
                              }}
                            >
                              <div>
                                <p className="text-grey300 text-[14px] font-medium">
                                  {item.toUpperCase()}
                                </p>
                              </div>

                              <div className="h-4 w-4 border border-[B8C0CC] rounded-full center">
                                {planType === item && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-neutral300" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
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
                      <p className="text-[11px] text-text100">Plan</p>
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
                      {network &&
                        data_product
                          .filter((item) => {
                            return (
                              item.product_provider ===
                              network.name.toUpperCase()
                            );
                          })
                          .filter((item) => {
                            const currentProduct = dataProducts.find(
                              (data) => item.id === data.id
                            );
                            if (planType) {
                              return (
                                currentProduct?.plan_type.toLowerCase() ===
                                planType
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
                                    {currentProduct?.plan_type.toUpperCase()}
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
                    <div className="flex items-center gap-1 text-primaryColor py-1 px-2 bg-white rounded-full">
                      <p>2% Discount</p>
                      <GiftIcon className="h-5" />
                    </div>
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
                      mobile_number &&
                      network &&
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
                      Mobile number
                    </p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      {mobile_number}
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
            mobile_number: mobile_number,
            network_api_id: network.id,
            data_api_id: plan.id,
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

export default PurchaseData;
