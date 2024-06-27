import { cn } from "@/lib/utils";

type Props = {
  title: string;
  icon: string;
  description: string;
  subheading: string;
  listItems: { text: string }[];
  anchorTitle: string;
  anchorHref: string;
  className?: string;
};

export default function CaraMembeliBlocks(props: Props) {
  const { title, icon, description, subheading, listItems, anchorTitle, anchorHref, className } =
    props;
  return (
    <div className={cn(`col-span-6 rounded border border-[#dedede] p-6 lg:col-span-2`, className)}>
      <section className="flex pb-8">
        <figure className="h-[65px] w-[65px]">
          <img className="mx-auto mt-2" src={icon} width="70%" alt="" />
        </figure>
        <div className="block pl-2">
          <h1 className="text-2xl font-bold tracking-[0.03em]">{title}</h1>
          <div className="text-base tracking-[0.03em] text-[#AAAAAA]">{subheading}</div>
        </div>
      </section>
      <article className="h-[250px]">
        <div className="text-sm tracking-[0.03em]">{description}</div>
        <div className="pl-4">
          <ul className="list-decimal">
            {listItems.map(item => (
              <li key={item.text} className="text-sm tracking-[0.03em]">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </article>
      <div className="pt-4">
        <a href={anchorHref} target="_blank" rel="noreferrer">
          <div
            className="text-sm font-bold tracking-[0.03em] text-primary underline"
            style={{ color: "#88867E" }}
          >
            {anchorTitle}
          </div>
        </a>
      </div>
    </div>
  );
}
