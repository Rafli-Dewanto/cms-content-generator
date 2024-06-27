import { Red_Hat_Display } from "next/font/google";
import { TabOneContent, TabThreeContent, TabTwoContent } from "./tab-contents";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

const Installment = () => {
  return (
    <section
      className={`m-8 mx-auto flex flex-row flex-wrap items-center justify-center space-x-3 space-y-2 ${redHatDisplay.className}`}
    >
      <input
        id="tab-one"
        type="radio"
        name="tabs"
        className="peer/tab-one absolute opacity-0"
        checked
        aria-checked="true"
        defaultChecked
      />
      <label
        htmlFor="tab-one"
        className="box-border block cursor-default rounded-md rounded-t-lg border-2 border-slate-100 bg-white p-4 px-5 py-3 text-sm font-medium hover:bg-slate-200 peer-checked/tab-one:border-[#88867E] peer-checked/tab-one:bg-[#F1F0EE]"
      >
        iPhone 16
      </label>

      <input id="tab-two" type="radio" name="tabs" className="peer/tab-two absolute opacity-0" />
      <label
        htmlFor="tab-two"
        className="box-border block cursor-default rounded-md rounded-t-lg border-2 border-slate-100 bg-white p-4 px-5 py-3 text-sm font-semibold hover:bg-slate-200 peer-checked/tab-two:border-[#88867E] peer-checked/tab-two:bg-[#F1F0EE]"
      >
        iPhone 16 Plus
      </label>

      <input
        id="tab-three"
        type="radio"
        name="tabs"
        className="peer/tab-three absolute opacity-0"
      />
      <label
        htmlFor="tab-three"
        className="box-border block cursor-default rounded-md rounded-t-lg border-2 border-slate-100 bg-white p-4 px-5 py-3 text-sm font-semibold hover:bg-slate-200 peer-checked/tab-three:border-[#88867E] peer-checked/tab-three:bg-[#F1F0EE]"
      >
        iPhone 16 Pro Max
      </label>
      <TabOneContent />
      <TabTwoContent />
      <TabThreeContent />
    </section>
  );
};

export default Installment;
