import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import chart from "../assets/images/chart.svg";
import TransactionType from "./TransactionComponents/TransactionType";
import { useSelector } from "react-redux";
import { EmptyTransaction } from "./TransactionBody";
import convertToSentenceCase from "../utils/convertToSentence";
import { truncateText } from "../utils/TruncateText";
import { format } from "date-fns";

const TransactionCard = ({ type, title, desc, product, price }) => {
  return (
    <div className="inline-flex items-center justify-center w-full bg-white  rounded-lg gap-4 font-inter">
      <TransactionType type={type} />

      <div className="flex-1 flex justify-between">
        <div className="space-y-1">
          <p className="font-medium leading-3 text-grey400">{title}</p>
          <p className="text-sm  text-neutral300">{desc}</p>
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

  const { transactions } = useSelector((state) => state.transactions);

  let recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 6);

  return (
    <div className="flex-1 self-start bg-white border border-[#E5ECF5] rounded-[20px] p-7 space-y-6 font-inter">
      <div className="flex justify-between items-center">
        <p className=" font-medium leading-normal">Recent transactions</p>

        <div className="flex items-center gap-2">
          <p className=" font-medium leading-tight text-grey150">See all </p>
          <ChevronRightIcon className="h-4 text-green600" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-neutral200" />
      <div className="flex items-center gap-[30px] justify-between p-6">
        <img src={chart} alt="" />
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <div className="bg-[#5DADEC] h-2.5 w-2.5 rounded-full" />
            <p className="text-base font-medium leading-normal text-gray-400">
              Total Funding
            </p>
          </div>
          <p className="text-lg font-medium leading-normal text-[#001428] font-clash">
            1,020,000,000
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
            1,020,000,000
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
                    type={transaction.narration.split(" ")[0].toLowerCase()}
                    title={`${convertToSentenceCase(
                      transaction.narration.split(" ")[0]
                    )} Purchase`}
                    desc={truncateText(transaction.narration)}
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
                  type={transaction.narration.split(" ")[0].toLowerCase()}
                  title={`${convertToSentenceCase(
                    transaction.narration.split(" ")[0]
                  )} Purchase`}
                  desc={truncateText(transaction.narration)}
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
