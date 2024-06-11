import { ConnectButton } from '@rainbow-me/rainbowkit'

import toast, { Toaster } from 'react-hot-toast'
import NavItems from './NavItems'

const Header = () => {

  const notifyConnectWallet = () =>
    toast.error('Connect wallet.', { duration: 2000 })
  
  return (
    <div className="mb-4 w-full px-8 py-4 mx-auto flex flex-col items-center justify-between">
      <div className="flex sm:flex-row flex-col gap-10 w-full items-center justify-between">
        <div className="text-lg text-[cyan] flex items-center">
          <img src="/logo.svg" alt="logo" />
          <h1 className="text-2xl">CryptoApp</h1>
        </div>
        <div className="flex">
          <ConnectButton className="mx-8" accountStatus={"full"} />
        </div>
      </div>
      <NavItems />

      <Toaster />
    </div>
  );
}

export default Header
