import React, { useEffect, useState } from "react";
import TokenBalance from "./TokenBalance";
import { useAccount } from "wagmi";
import toast, { Toaster } from "react-hot-toast";



 const TokensBalances = () => {

   const [tokenBalComp, setTokenBalComp] = useState();
   

   const { address } = useAccount();
   
  const notifyConnectWallet = () =>
    toast.error("Connect wallet.", { duration: 2000 });
   
  useEffect(() => {
    setTokenBalComp(
      <div className="flex gap-2 p-4 flex-wrap flex-row">
        <TokenBalance name={"tBTC"} walletAddress={address} />
        <TokenBalance name={"tBNB"} walletAddress={address} />
        <TokenBalance name={"tMATIC"} walletAddress={address} />
      </div>
    );

    if (!address) notifyConnectWallet();
  }, [address]);

  return (
    <div className="flex items-center">
      {tokenBalComp} <Toaster />
    </div>
  );
};

export default TokensBalances;