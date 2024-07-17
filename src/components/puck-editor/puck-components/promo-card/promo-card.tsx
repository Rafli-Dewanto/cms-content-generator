import Link from "next/link";
import React from "react";
import Cart from "../icons/cart";
import Debit from "../icons/debit";
import Delivery from "../icons/delivery";
import MyEraspace from "../icons/my-eraspace";
import MysteryPackage from "../icons/mystery-package";
import TecProtec from "../icons/tecprotec";
import Telkomsel from "../icons/telkomsel";
import TradeIn from "../icons/trade-in";
import Voucher from "../icons/voucher";
import Xl from "../icons/xl";
import Cicilan from "../icons/cicilan";
import { cn } from "@/lib/utils";

type Props = {
  icon: string;
  title: string;
  secondaryTitle: string;
  href: string;
  className?: string;
};

const icons: Record<string, JSX.Element> = {
  "mystery-package": <MysteryPackage />,
  cart: <Cart />,
  cicilan: <Cicilan />,
  debit: <Debit />,
  delivery: <Delivery />,
  "my-eraspace": <MyEraspace />,
  tecprotec: <TecProtec />,
  telkomsel: <Telkomsel />,
  "trade-in": <TradeIn />,
  voucher: <Voucher />,
  xl: <Xl />,
};

const PromoCard: React.FC<Props> = ({ icon, title, secondaryTitle, href, className }) => {
  return (
    <div className="w-full p-3">
      <div className="rounded border border-[#dedede]">
        <div className="p-4">
          <div className={cn(className)}>
            {icons[icon]}
            <div className="text-dark mb-8 text-base font-bold">
              {title}
              <br />
              {secondaryTitle}
            </div>
            <div>
              <Link
                href={href}
                className="disabled:bg-stroke disabled:text-gray border-1.5 inline-flex h-auto !w-auto !min-w-fit flex-shrink-0 flex-grow-0 items-center justify-center space-x-2 border-transparent bg-transparent px-0 py-0.5 text-sm font-bold capitalize tracking-wide !text-[#88867E] text-primary !underline focus:bg-transparent focus:text-primary/75 focus:outline-none focus:ring-1 focus:ring-transparent focus:ring-offset-0 active:ring-0 disabled:cursor-not-allowed"
                type="button"
              >
                <span className="leading-none tracking-[0.03em]">Lihat Informasi</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
