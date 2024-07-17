import BcaTabContent from "./bca";
import BniTabContent from "./bni";
import BriTabContent from "./bri";
import BsiTabContent from "./bsi";
import CimbTabContent from "./cimb";
import CitiTabContent from "./citi";
import DbsTabContent from "./dbs";
import HsbcTabContent from "./hsbc";
import JeniusTabContent from "./jenius";
import MandiriTabContent from "./mandiri";
import MaybankTabContent from "./maybank";
import UobTabContent from "./uob";

const TabContents = () => {
  return (
    <>
      <BcaTabContent />
      <BniTabContent />
      <BriTabContent />
      <BsiTabContent />
      <CimbTabContent />
      <CitiTabContent />
      <DbsTabContent />
      <HsbcTabContent />
      <JeniusTabContent />
      <MandiriTabContent />
      <MaybankTabContent />
      <UobTabContent />
    </>
  );
};

export default TabContents;
