import React, { useEffect, useState, useRef } from "react";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/queries";
import { ethers } from "ethers";
import TransactionStatus from "./TransactionStatus";
import toast, { Toaster } from "react-hot-toast";

import {
  ClipboardIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";

const TokenBalance = ({ name, walletAddress }) => {
  const [tokenAddress, setTokenAddress] = useState();

  const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });

  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction completed.");


  async function fetchTokenBalance() {
    const bal = await getTokenBalance(name, walletAddress);
  }

  

  async function fetchTokenAddress() {
    const address = await getTokenAddress(name);
    setTokenAddress(address);
  }

  return (
    <div className="flex">
      <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
        <p className="text-sm">{name}</p>
        <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">
          14.5
        </p>
      </div>

      <div className="flex items-center p-2 px-2 bg-[cyan] rounded-r-lg">
        <copyIcon.icon
          className="h-6 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(tokenAddress);
            setCopyIcon({ icon: ClipboardCheckIcon });
          }}
        />
      </div>

      {txPending && <TransactionStatus />}

      <Toaster />
    </div>
  );
};

export default TokenBalance;
