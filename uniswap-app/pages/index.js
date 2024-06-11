import Header from '../components/Header'
import SwapComponent from '../components/SwapComponent'
import TokensBalances from '../components/TokensBalances'

export default function Home() {
  return (
    <div className="w-full h-screen  items-center justify-center bg-[#282c34]">
      <Header />
      <div className=" relative max-w-[40rem] mx-auto flex items-center flex-col gap-10">
        {/* <TokensBalances /> */}
        <SwapComponent />
      </div>
    </div>
  );
}
