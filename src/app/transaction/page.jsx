"use client";

import api from "@/api";
import Layouts from "@/components/Layouts";
import TransactionList from "@/components/elements/TransactionList/TransactionList";
import { useEffect, useState } from "react";

const Page = () => {
  const [transctions, settransctions] = useState([]);

  const fetchTransctions = async () => {
    const response = await api.get("/transactions");
    const data = await response.data.payload.transactions;
    settransctions(data);
  };

  useEffect(() => {
    fetchTransctions();
  }, []);

  return (
    <Layouts>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="mt-4">History Transactions</h1>
        <TransactionList transactions={transctions} />
      </div>
    </Layouts>
  );
};

export default Page;
