import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";
//import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const Welcome = () => {
  console.log(TransactionContext)
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex w-full justify-center items-center">
        <h1>Joopal Pay</h1>
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    </div>
  );
};

export default Welcome;
