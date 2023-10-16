import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import TransactionType from "./TransactionComponents/TransactionType";
import { useSelector } from "react-redux";
import emptyTransaction from "../assets/empty-state/emptyTransaction.svg";
import convertToSentenceCase from "../utils/convertToSentence";
import { format } from "date-fns";

import { truncateText } from "../utils/TruncateText";
import Receipt, { StatusState } from "./Receipts/Receipt";

export const IndividualTransaction = ({
  title,
  description,
  price,
  type,
  transaction,
  setCurrent,
  status
}) => {
  const [toggleReceipt, setToggleReceipt] = useState(false);

  return (
    <>
      {toggleReceipt ? (
        <Receipt
          transaction={transaction}
          setToggle={setToggleReceipt}
          toggle={toggleReceipt}
        />
      ) : null}
      <div
        className="w-full flex font-inter border-t border-neutral100 py-4 cursor-pointer hover:bg-gray-50"
        onClick={() => {
          setToggleReceipt(true);
        }}
      >
        <div className="inline-flex gap-2 items-center w-[25%]">
          <TransactionType type={type.toLowerCase()} />
          <p className="text-[15px] font-medium text-grey400">{title}</p>
        </div>

        <div className="flex gap-2 items-center w-[50%]">
          <p className="text-[15px] font-medium text-neutral300">
            {description}
          </p>
        </div>
        <div className="flex gap-4 items-center w-[10%] ">
          <StatusState status={status}/>
        </div>
        <div className="flex gap-4 items-center w-[15%] justify-end">
          <p className="text-[15px]  text-neutral300 font-semibold">{price}</p>
          <ChevronRightIcon className="h-4" />
        </div>
      </div>
    </>
  );
};

export const EmptyTransaction = () => {
  return (
    <div className="center flex-col h-[350px] w-full">
      <img src={emptyTransaction} alt="" />
      <div className="h-4"></div>
      <p className="text-neutral300">No transaction recorded</p>
    </div>
  );
};

const TransactionBody = ({ transactionFilter, dateFilter, searchFilter }) => {
  const [filteredTransactions, setFilteredTransactions] = useState(null);

  const { transactions, status } = useSelector((state) => state.transactions);
  console.log(transactions);

  useEffect(() => {
    if (status === "fulfilled") {
      setFilteredTransactions(transactions);
    }
    // eslint-disable-next-line
  }, [status]);

  let currentDate = null;

  useEffect(() => {
    let filterOperation = transactions;

    // Filter by date
    if (dateFilter === "Today") {
      const today = new Date().toISOString().split("T")[0];
      filterOperation = filterOperation.filter((transaction) => {
        return transaction.updatedAt.split("T")[0] === today;
      });
    } else if (dateFilter === "Last 7 Days") {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const fromDate = sevenDaysAgo.toISOString().split("T")[0];
      filterOperation = filterOperation.filter((transaction) => {
        console.log(transaction.updatedAt >= fromDate);
        return transaction.updatedAt >= fromDate;
      });
    } else if (dateFilter === "This Month") {
      const currentMonth = new Date()
        .toISOString()
        .split("-")
        .slice(0, 2)
        .join("-");

      console.log(currentMonth);
      filterOperation = filterOperation.filter((transaction) =>
        transaction.updatedAt.startsWith(currentMonth)
      );
    } else if (dateFilter === "Last 3 months") {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      const fromDate = threeMonthsAgo
        .toISOString()
        .split("-")
        .slice(0, 2)
        .join("-");
      filterOperation = filterOperation.filter(
        (transaction) => transaction.updatedAt >= fromDate
      );
    }

    // Filter by transaction type
    if (transactionFilter !== "All Transactions") {
      filterOperation = filterOperation.filter((transaction) => {
        console.log(transactionFilter.toLowerCase());
        return transaction.narration
          .toLowerCase()
          .includes(transactionFilter.toLowerCase());
      });
    }

    // Filter by search query
    if (searchFilter) {
      const query = searchFilter.toLowerCase();
      console.log(query);
      filterOperation = filterOperation.filter((transaction) =>
        transaction.narration.toLowerCase().includes(query)
      );
    }

    // Sort by date in descending order
    if (filterOperation !== null) {
      filterOperation = [...filterOperation].sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
    }

    setFilteredTransactions(filterOperation);
    // eslint-disable-next-line
  }, [transactionFilter, dateFilter, searchFilter]);

  return (
    <Container>
      <div className="h-6" />
      {filteredTransactions?.length > 0 ? (
        filteredTransactions.map((transaction, index) => {
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
                    <div className="h-4" />
                  </div>
                )}
                <IndividualTransaction
                  type={transaction.narration.split(" ")[0]}
                  status={transaction.status}
                  title={
                    `${convertToSentenceCase(
                      transaction.narration.split(" ")[0]
                    )}` +
                    `${
                      transaction.narration.split(" ")[0] === "wallet"
                        ? " funding"
                        : transaction.narration.split(" ")[0] === "money"
                        ? " transfer"
                        : " purchase"
                    }`
                  }
                  description={truncateText(transaction.narration)}
                  price={`₦ ${transaction.amount}`}
                  transaction={transaction.transactionId}
                />
              </>
            );

            currentDate = transactionDate;
            return value;
          }

          return (
            <div key={index}>
              {/* <div className="h-4" /> */}
              <IndividualTransaction
                type={transaction.narration.split(" ")[0]}
                status={transaction.status}
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
                      : " purchase"
                  }`
                }
                description={truncateText(transaction.narration)}
                price={`₦ ${transaction.amount}`}
                transaction={transaction.transactionId}
              />
            </div>
          );
        })
      ) : (
        <EmptyTransaction />
      )}
      <div className="h-10"></div>
    </Container>
  );
};

export default TransactionBody;
