import React, { useState } from "react";
import TransactionBody from "../components/TransactionBody";
import TransactionHeader from "../components/TransactionHeader";

const Transaction = () => {
  const [transactionFilter, setTransactionFilter] = useState("All Transactions");
  const [dateFilter, setDateFilter] = useState("All Time");
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <>
      <TransactionHeader
        transactionFilter={transactionFilter}
        setTransactionFilter={setTransactionFilter}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <TransactionBody 
      transactionFilter={transactionFilter}
      dateFilter={dateFilter}
      searchFilter={searchFilter}
      />
    </>
  );
};

export default Transaction;
