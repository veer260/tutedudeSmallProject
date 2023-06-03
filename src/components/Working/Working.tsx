import Work from "../Work/Work";
import { IoMdWallet } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { TbDiscount } from "react-icons/tb";
import { MdDiscount } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const Working = () => {
  return (
    <div className="grid grid-rows-5 gap-4 pb-12 md:grid-cols-2 md:w-full md:gap-x-16 md:gap-y-12 md:grid-rows-3">
      <Work
        Icon={IoIosPeople}
        heading="Invite your Friends"
        text="Share the link tutedude.com with your friends"
      />
      <Work
        Icon={IoMdWallet}
        heading="Friend purchases any course"
        text="Using your REFERRAL CODE in the pymensts page"
      />
      <Work
        Icon={MdDiscount}
        heading="You get &#x20B9; 200 as referral money  "
        text="Of total purchase your friend makes sharable to your wallet"
      />
      <Work
        Icon={TbDiscount}
        heading="Your friend gets &#x20B9; 200 off"
        text="On his overrall feeon successfull purchase using your referral code"
      />
      <Work
        Icon={BiRupee}
        heading="Transfer money from your wallet"
        text="When the wallet balance reaches &#x20B9; 200 or more, you can withdraw it"
      />
    </div>
  );
};

export default Working;
