import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axios";

import {
  CheckBadgeIcon,
  ChevronLeftIcon,
  ExclamationTriangleIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/solid";
import SideBarWrapper from "../SideBarWrapper";
import { transfertoFriends } from "./ServiceApi";
import PrimaryButton from "../Inputs/PrimaryButton";
import PinDialog from "../TransactionPin/PinDialog";
import { Spinner } from "../Spinner";
import SuccessPage from "../TransactionStatus/TransactionSuccess";
import TransactionFailed from "../TransactionStatus/TransactionFailed";
import Receipt from "../Receipts/Receipt";
import { fetchTransactions } from "../../features/TransactionsSlice";
import { PaperPlaneTilt } from "phosphor-react";
import CloseButton from "../Inputs/CloseButton";

const TransfertoFriends = ({ toggle, setToggle }) => {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState();

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

  const wallet = useSelector((state) => state.wallet);

  //   UserName
  const [usernameError, setUsernameError] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  // Debounce Input to Check Username
  React.useEffect(() => {
    const getData = setTimeout(() => {
      if (username) {
        let currentUserName = JSON.parse(sessionStorage.getItem("user"));
        if (
          username === currentUserName.username ||
          username === currentUserName.email ||
          Number(username) === username.includes(currentUserName.phoneNumber)
        ) {
          setUsernameError(true);
          setError("You can can't send money to yourself");
          setUsernameAvailable(false);
          return;
        }

        axios
          .post(`/v1/users/checkUsername`, { username: username.toLowerCase() })
          .then((response) => {
            if (response.data.success) {
              if (
                response.data.message.trim() ===
                `username; ${username} is available`
              ) {
                setUsernameError(true);
                setUsernameAvailable(false);
              }
            } else {
              if (
                response.data.message ===
                `Username; ${username.toLowerCase()} already exists`
              ) {
                setUsernameError(false);
                setUsernameAvailable(true);
              }
            }
          });
      } else {
        setUsernameAvailable(false);
        setUsernameError(false);
      }
    }, 500);

    return () => clearTimeout(getData);
    // eslint-disable-next-line
  }, [username]);

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
                Transfer to friends
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
              className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => {
                setStep(0);
              }}
            >
              <ChevronLeftIcon className=" w-6 h-6" />
            </div>

            <div className="flex gap-2 items-center">
              <PaperAirplaneIcon className="-rotate-45 h-[20px] text-blue25" />
              <p className="text-sm font-medium leading-normal text-grey400">
                Confirm Transfer
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
                {/* Username */}
                <div>
                  <div
                    className={` ${
                      usernameError
                        ? "focus-within:-[#F26969]"
                        : "focus-within:border-[#5DADEC]"
                    } ${
                      usernameError ? "border-[#F26969]" : "border-transparent"
                    } border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]`}
                  >
                    <label
                      htmlFor="username"
                      className="text-xs text-[#71879C] font-inter"
                    >
                      Username
                    </label>
                    <br />
                    <div className="h-[2px]" />
                    <div className="flex items-center gap-2 ">
                      <div className="flex-1 flex gap-2 items-center">
                        <p className="text-sm text-[#71879C] font-inter">@</p>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          value={username}
                          placeholder="username"
                          className="text-[#5b5b5b] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
                          onChange={(e) => {
                            setUsername(e.target.value);
                            setUsernameAvailable(false);
                            setUsernameError(false);
                          }}
                        />
                      </div>

                      {username.length > 0 &&
                        !usernameError &&
                        !usernameAvailable && <Spinner color="#A6B0BF" />}

                      {username.length > 0 && usernameAvailable && (
                        <CheckBadgeIcon
                          className="text-[#00AA61] h-6"
                          size="16px"
                        />
                      )}

                      {username.length > 0 && usernameError && (
                        <ExclamationTriangleIcon
                          className="text-[#EF4444] h-6"
                          size="16px"
                        />
                      )}
                    </div>
                  </div>
                  <div className="h-2"></div>
                  {usernameError && (
                    <p className="text-[#EF4444] mt-1 text-sm">
                      {error || "username isn't available"}
                    </p>
                  )}
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

                <div />
                <div className="flex justify-end">
                  <PrimaryButton
                    disabled={
                      !(
                        username &&
                        !usernameError &&
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
              </div>
            )}
            {step === 1 && (
              <div className="mx-auto w-[353px] space-y-6">
                <div className="w-full h-[1px] bg-neutral100" />

                <div className="rounded-lg bg-neutral100  overflow-hidden px-6 py-7 gap-y-4">
                  <div className=" flex p-2.5 justify-between items-center ">
                    <p className="text-[11px] text-text100 text-xs">Username</p>
                    <p className="text-[11px] text-neutral300 text-xs">
                      {username}
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
            amount: amount,
            receiverIdentity: username,
          };

          try {
            const response = await transfertoFriends(userInput, pin);

            setLoading(false);

            if (response && response.success) {
              setTransaction(response.recordTransaction.transactionId);
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

              setFailedMsg(response.message);
              setIsOpenFailed(true);
              return;
            }
          } catch (error) {}
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
        type="Transfer"
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

export default TransfertoFriends;
