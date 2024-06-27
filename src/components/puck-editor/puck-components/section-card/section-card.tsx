import { cn } from "@/lib/utils";

type SectionCardProps = {
  id: string;
  title: string;
  className: string;
};

const SectionCard = (props: SectionCardProps) => {
  const { id, title, className } = props;
  return (
    <div className={cn(`mb-2 w-1/2 text-center lg:mr-4 lg:w-auto`, className)}>
      <a href={id ? `#${id}` : "#"}>
        <button className="active text-[rgba(51, 53, 56, 0.7)] box-border w-full rounded-md border-2 !border-[#88867E] bg-[#bab4a933] px-2 pb-4 pt-2 text-sm font-bold lg:w-[220px] lg:text-base">
          {title ?? "Cara Membeli"}
          <div className="mx-auto w-[60px] border-b-[2px] border-[#88867E] pt-2 text-center" />
        </button>
      </a>
    </div>
  );
};

export default SectionCard;
