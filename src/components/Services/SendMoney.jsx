import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  GlobeAltIcon
} from "@heroicons/react/24/solid";
import SideBarWrapper from "../SideBarWrapper";
import { BankTransfer, fetchAccountName } from "./ServiceApi";
import PrimaryButton from "../Inputs/PrimaryButton";
import PinDialog from "../TransactionPin/PinDialog";
import { Spinner } from "../Spinner";
import SuccessPage from "../TransactionStatus/TransactionSuccess";
import TransactionFailed from "../TransactionStatus/TransactionFailed";
import Receipt from "../Receipts/Receipt";
import { fetchTransactions } from "../../features/TransactionsSlice";
import { PaperPlaneTilt } from "phosphor-react";
import CloseButton from "../Inputs/CloseButton";

const SendMoney = ({ toggle, setToggle }) => {
  const bankList = useSelector((state) => state.bankList.data);
  let listOfBanks = bankList && Object.values(bankList);

  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
  };

  const [network, setNetwork] = useState(null);
  const [accountName, setAccountName] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);
  const [meterLoading, setMeterLoading] = useState(false);
  const [amount, setAmount] = useState(null);
  const [narrations, setNarrations] = useState(null);

  const validMeter = async () => {
    setMeterLoading(true);
    setAccountName(null);
    try {
      const response = await fetchAccountName({
        bank_id: network.bank_id,
        account_number: accountNumber,
      });

      if (response.message) {
        setAccountName(response.account_name);
      }

      if (!response.message) {
        setAccountName("");
      }
      setMeterLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      if (accountNumber && accountNumber.length === 10) {
        validMeter();
      }
    }, 500);

    return () => clearTimeout(getData);
    // eslint-disable-next-line
  }, [accountNumber, network]);

  const [networkDrop, setNetworkDrop] = useState(false);

  const [step, setStep] = useState(0);

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

  const wallet = useSelector((state) => state.wallet);

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
              <PaperPlaneTilt weight="fill" className=" h-[20px] text-blue25" />
              <p className="text-sm font-medium leading-normal text-grey400">
                Send Money
              </p>
            </div>
            <CloseButton
            onClick={() => {
              setToggle(!toggle);
            }}
        />
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div
              className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
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
          <div className="bg-white  rounded-[8px] p-10">
            {step === 0 && (
              <div className="mx-auto w-[353px] space-y-6">
                {/* Select Bank */}
                <div className="relative">
                  <div
                    className="bg-neutral100 flex p-2.5 rounded-lg justify-between items-center cursor-pointer"
                    onClick={() => {
                      setNetworkDrop(!networkDrop);
                    }}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">Bank name</p>
                      <p className="text-[16px] inputText">
                        {network?.desc2 || "Select"}
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
                    <div className="absolute top-full mt-1 p-2 space-y-2 bg-white w-full rounded-lg z-10 max-h-[250px] scroll-smooth overflow-scroll">
                      <input
                        autoFocus
                        type="search"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                        placeholder="Search..."
                        className="w-full focus:outline-none border-b border-gray-200 mb-2 text-sm placeholder:text-sm pb-3"
                      />
                      {listOfBanks
                        ?.filter((option) =>
                          option.desc2
                            .toLowerCase()
                            .includes(searchInput.toLowerCase())
                        )
                        .map((bank, index) => {
                          return (
                            <div
                              className="flex rounded-full px-3 py-[5px] hover:bg-neutral100 justify-between cursor-pointer"
                              key={index}
                              onClick={() => {
                                setNetwork(bank);
                                setNetworkDrop(false);
                              }}
                            >
                              <p className="text-grey200 text-[14px] font-medium">
                                {bank.desc2}
                              </p>

                              <div className="h-4 w-4 border border-[B8C0CC] rounded-full center">
                                {bank === network && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-neutral300" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>

                {/* Account Number */}
                <div>
                  <div
                    className={`bg-neutral100 flex p-2.5 rounded-lg justify-between items-center ${
                      error ? "border border-red400" : ""
                    }`}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">Account number</p>
                      <input
                        type="number"
                        value={accountNumber}
                        placeholder="000 0000 0000"
                        className="inputText focus:outline-none w-full bg-transparent"
                        onChange={(e) => {
                          setAccountNumber(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {error && <p className="mt-2 text-red400 text-sm">{error}</p>}
                </div>

                {/* Account Name */}
                <div>
                  <div
                    className={`bg-neutral100 flex p-2.5 rounded-lg justify-between items-center ${
                      error ? "border border-red400" : ""
                    }`}
                  >
                    <div className="space-y-2 w-full">
                      <p className="text-[11px] text-text100">Account Name</p>
                      <input
                        type="text"
                        value={
                          accountName === ""
                            ? "Invalid Bank Details"
                            : accountName
                        }
                        readOnly
                        placeholder="Account Name"
                        className={` placeholder:text-neutral300 focus:outline-none w-full bg-transparent block text-sm 
                        ${accountName === "" ? "text-red500" : "text-grey500"}
                        `}
                      />
                    </div>
                    {meterLoading ? <Spinner color="gray" /> : null}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Kindly confirm the Account Name
                  </p>
                </div>

                {/* Amount */}
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
                          className="inputText focus:outline-none w-full bg-transparent flex-1"
                          onChange={(e) => {
                            setAmount(e.target.value);
                          }}
                        />
                      </div>
                    </div>
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

                {/* Narration */}
                <div>
                  <div
                    className={`bg-neutral100 flex p-2.5 rounded-lg justify-between items-center ${
                      error ? "border border-red400" : ""
                    }`}
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] text-text100">Narration</p>
                      <input
                        type="text"
                        value={narrations}
                        placeholder="Transfer description"
                        className="inputText focus:outline-none w-full bg-transparent"
                        onChange={(e) => {
                          setNarrations(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {error && <p className="mt-2 text-red400 text-sm">{error}</p>}
                </div>
                <div className="flex justify-end">
                  <PrimaryButton
                    disabled={
                      !(
                        accountName &&
                        accountNumber &&
                        network &&
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
              </div>
            )}
            {step === 1 && (
              <div className="mx-auto w-[353px] space-y-6">
                <div className="w-full h-[1px] bg-neutral100" />

                <div className="rounded-lg bg-neutral100  overflow-hidden px-6 py-7 gap-y-4">
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">
                      Amount to pay
                    </p>
                    <p className="text-[11px] text-grey500 text-xs">
                      ₦ {amount}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">
                      Account Name
                    </p>
                    <p className="text-[11px] text-grey500 text-xs w-[60%] text-right">
                      {accountName}
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">
                      Account Number
                    </p>
                    <p className="text-[11px] text-grey500 text-xs ">
                      {accountNumber}
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">
                      Bank Name
                    </p>
                    <p className="text-[11px] text-grey500 text-xs ">
                      {network?.desc2}
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">
                      Narration
                    </p>
                    <p className="text-[11px] text-grey500 text-xs ">
                      {narrations}
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
            bank_id: network.bank_id,
            account_number: accountNumber,
            account_name: accountName,
            amount: amount,
            narration: narrations,
            reference: "",
          };
          

          try {
            const response = await BankTransfer(userInput, pin);
            
            setLoading(false);

            if (response && response.success) {
              
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
                
                setStep(0);
                setError("Invalid network selection");
                return;
              }

              setFailedMsg(response.message);
              setIsOpenFailed(true);
              return;
            }
          } catch (error) {
            
          }
        }}
      />
      <SuccessPage
        type={"Transfer"}
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
        type={"Transfer"}
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

export default SendMoney;
