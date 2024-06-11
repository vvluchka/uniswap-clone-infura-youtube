import React, { useState } from "react";

const NavItems = () => {
  const SWAP = "Token Swap";
  const CRYPTO = "Crypto";
  const TRENDING = "Trending";
  const SAVED = "Saved";

  const [activeLink, setActiveLink] = useState(CRYPTO); // Set default active link

  return (
    <div className="md:flex-row w-fit h-fit flex flex-col mt-4 font-mono font-semibold items-center border justify-between border-[cyan] p-2 gap-2 rounded-lg">
      <p
        className={
          activeLink === SWAP
            ? "bg-gray-600 rounded  text-base text-center font-mono"
            : "bg-[cyan] text-[#282c34]  flex items-center justify-center w-[110px]  rounded text-center"
        }
        onClick={() => setActiveLink(SWAP)}
      >
        {SWAP}
      </p>
      <a
        href="http://localhost:3001/"
        className="bg-gray-600 rounded text-gray-500 flex items-center justify-center hover:text-[cyan] w-[110px] text-base text-center font-mono"
      >
        {CRYPTO}
      </a>
      <a
        href="http://localhost:3001/trending"
        className="bg-gray-600 rounded  text-gray-500 w-[110px] flex items-center justify-center hover:text-[cyan] text-base text-center font-mono"
      >
        {TRENDING}
      </a>
      <a
        href="http://localhost:3001/saved"
        className="bg-gray-600 rounded  text-gray-500 w-[110px] flex items-center justify-center hover:text-[cyan] text-base text-center font-mono"
      >
        {SAVED}
      </a>
    </div>
  );
};

export default NavItems;
