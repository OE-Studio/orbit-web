import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
// import chart from "../assets/images/chart.svg";
import TransactionType from "./TransactionComponents/TransactionType";
import { useSelector } from "react-redux";
import { EmptyTransaction } from "./TransactionBody";
import convertToSentenceCase from "../utils/convertToSentence";
import { truncateText } from "../utils/TruncateText";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import TransactionFlowChart from "./TransactionFlowChart";
import chartDefault from "../assets/donutDefault.svg";
import { capitalizeFirstLetter } from "../utils/capitalizeFirst";
const TransactionCard = ({ type, title, desc, product, price }) => {
  return (
    <div className="inline-flex items-center justify-center w-full bg-white  rounded-lg gap-4 font-inter">
      <TransactionType type={type} />

      <div className="flex-1 flex justify-between">
        <div className="space-y-1.5">
          <p className="font-medium leading-3 text-grey400">{title}</p>
          <p className="text-sm  text-neutral300">{capitalizeFirstLetter(desc)}</p>
        </div>
        <div className="space-y-1 flex flex-col items-end">
          <p className="text-sm font-semibold leading-3 text-grey300">
            {price}
          </p>

          <p className=" text-neutral300 uppercase text-xs rounded-full">
            {product}
          </p>
        </div>
      </div>
    </div>
  );
};

const RecentTransactions = () => {
  let currentDate = null;
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const { transactions } = useSelector((state) => state.transactions);
  const { cashFlow } = useSelector((state) => state.user);

  let recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 6);

  return (
    <div className="flex-1 self-start bg-white border border-[#E5ECF5] rounded-[20px] p-7 space-y-6 font-inter">
      <div className="flex justify-between items-center">
        <p className=" font-medium leading-normal">Recent transactions</p>

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            navigate("/transactions");
          }}
        >
          <p className=" font-medium leading-tight text-grey150">See all </p>
          <ChevronRightIcon className="h-4 text-green600" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-neutral200" />
      <div className="flex items-center gap-[30px] justify-between px-6">
        {cashFlow?.totalSpending === 0 && cashFlow?.totalFunding === 0 ? (
          <img src={chartDefault} alt="" />
        ) : (
          <TransactionFlowChart
            totalSpent={cashFlow?.totalSpending}
            totalFunded={cashFlow?.totalFunding}
          />
        )}
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <div className="bg-[#5DADEC] h-2.5 w-2.5 rounded-full" />
            <p className="text-base font-medium leading-normal text-gray-400">
              Total Funding
            </p>
          </div>
          <p className="text-lg font-medium leading-normal text-[#001428] font-clash">
            {cashFlow?.totalFunding.toFixed(2)}
          </p>
        </div>
        <div className="w-[1px] h-[45px] bg-neutral200" />
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <div className="bg-orange500 h-2.5 w-2.5 rounded-full" />
            <p className="text-base font-medium leading-normal text-gray-400">
              Total Spent{" "}
            </p>
          </div>
          <p className="text-lg font-medium leading-normal text-[#001428] font-clash">
            {cashFlow?.totalSpending.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-neutral200" />

      <div>
        {transactions?.length > 0 ? (
          recentTransactions.map((transaction, index) => {
            const transactionDate = format(
              Date.parse(transaction.updatedAt),
              "dd MMM, yyyy"
            );

            if (transactionDate !== currentDate) {
              let value = (
                <>
                  {transactionDate !== currentDate && (
                    <div key={index}>
                      <div className="h-6" />
                      <p className="text-sm font-medium text-neutral300">
                        {transactionDate}
                      </p>
                    </div>
                  )}
                  <div className="h-4" />
                  <div className="w-full h-[1px] bg-neutral200" />
                  <div className="h-4" />
                  <TransactionCard
                    type={
                      !transaction.recipient_name.includes("@")
                        ? transaction.narration.split(" ")[0]
                        : `@${user.username}` === transaction.recipient_name
                        ? "credit"
                        : "debit"
                    }
                    title={
                      `${
                        transaction.narration.split(" ")[0] === "money"
                          ? transaction.recipient_name
                          : convertToSentenceCase(
                              transaction.narration.split(" ")[0]
                            )
                      }` +
                      `${
                        transaction.narration.split(" ")[0] === "wallet"
                          ? " funding"
                          : transaction.narration.split(" ")[0] === "money"
                          ? ""
                          : transaction.narration.split(" ")[0] === "bank"
                          ? " transfer"
                          : " purchase"
                      }`
                    }
                    desc={truncateText(transaction.narration, 40)}
                    product={""}
                    price={`₦ ${transaction.amount}`}
                    transaction={transaction}
                  />
                </>
              );

              currentDate = transactionDate;
              return value;
            }

            return (
              <div key={index}>
                <div className="h-4" />
                <div className="w-full h-[1px] bg-neutral200" />
                <div className="h-4" />
                <TransactionCard
                  type={
                    !transaction.recipient_name.includes("@")
                      ? transaction.narration.split(" ")[0]
                      : `@${user.username}` === transaction.recipient_name
                      ? "credit"
                      : "debit"
                  }
                  
                  title={
                    `${
                      transaction.narration.split(" ")[0].toLowerCase() ===
                      "money"
                        ? transaction.recipient_name
                        : convertToSentenceCase(
                            transaction.narration.split(" ")[0]
                          )
                    }` +
                    `${
                      transaction.narration.split(" ")[0] === "wallet"
                        ? " funding"
                        : transaction.narration.split(" ")[0] === "money"
                        ? ""
                        : transaction.narration.split(" ")[0] === "bank"
                        ? " transfer"
                        : " purchase"
                    }`
                  }
                  desc={truncateText(transaction.narration, 40)}
                  product={""}
                  price={`₦ ${transaction.amount}`}
                  transaction={transaction}
                />
              </div>
            );
          })
        ) : (
          <EmptyTransaction />
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
