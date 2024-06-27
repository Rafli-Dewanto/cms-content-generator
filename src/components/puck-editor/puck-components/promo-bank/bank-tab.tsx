import { cn } from "@/lib/utils";

type Props = {
  id: string;
  imageSource: string;
  imageAlt: string;
  className?: string;
};

const BankTab = (props: Props) => {
  const { id, imageSource, imageAlt, className } = props;
  return (
    <>
      <input
        id={id}
        type="radio"
        name="tabs"
        className={cn(`peer/${id} absolute opacity-0`, className)}
        defaultChecked={id === "bca"}
      />
      <label
        htmlFor={id}
        className={`block peer-checked/${id}:border-gray-400 box-border flex max-w-[10rem] cursor-pointer items-center justify-center rounded-md border-2 border-slate-200 bg-white px-5 py-3 text-sm font-medium peer-checked/${id}:border-4 peer-checked/${id}:border-[#88867E]`}
      >
        <img src={imageSource} alt={imageAlt} />
      </label>
    </>
  );
};

export default BankTab;
