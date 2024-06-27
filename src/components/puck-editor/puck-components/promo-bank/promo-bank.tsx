import { bankTabs } from "@/helper/constants";
import BankTab from "./bank-tab";
import BcaTabContent from "./tab-content/bca";
import BniTabContent from "./tab-content/bni";
import BriTabContent from "./tab-content/bri";
import BsiTabContent from "./tab-content/bsi";
import CimbTabContent from "./tab-content/cimb";
import CitiTabContent from "./tab-content/citi";
import DbsTabContent from "./tab-content/dbs";
import HsbcTabContent from "./tab-content/hsbc";
import JeniusTabContent from "./tab-content/jenius";
import MandiriTabContent from "./tab-content/mandiri";
import MaybankTabContent from "./tab-content/maybank";
import UobTabContent from "./tab-content/uob";

const contentArray = [
  <BcaTabContent key={"bca"} />,
  <BniTabContent key={"bni"} />,
  <BriTabContent key={"bri"} />,
  <BsiTabContent key={"bsi"} />,
  <CimbTabContent key={"cimb"} />,
  <CitiTabContent key={"citi"} />,
  <DbsTabContent key={"dbs"} />,
  <HsbcTabContent key={"hsbc"} />,
  <JeniusTabContent key={"jenius"} />,
  <MandiriTabContent key={"mandiri"} />,
  <MaybankTabContent key={"maybank"} />,
  <UobTabContent key={"uob"} />,
];
/**
 * this component use peer tailwind utility class to switch between content without JavaScript
 * @see https://codepen.io/magikMaker/pen/BaGxXQx
 */
const PromoBank = () => {
  return (
    <section>
      <div className="grid grid-cols-1 content-center justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Object.values(bankTabs).map(tab => (
          <BankTab key={tab.id} id={tab.id} imageSource={tab.imageSource} imageAlt={tab.imageAlt} />
        ))}
        {contentArray.map(ChipContent => (
          <div
            key={ChipContent.key}
            className={`mx-auto hidden justify-items-center peer-checked/${ChipContent.key}:block sm:col-span-2 md:col-span-3 lg:col-span-4`}
          >
            {ChipContent}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoBank;
