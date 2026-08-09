import { Icon } from "./Icon";

type SectionTitleProps = {
  label: string;
  children: React.ReactNode;
  iconId?: string;
};

export function SectionTitle({ children, iconId, label, }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="inline-flex self-start items-center gap-1 text-dark-blue bg-light-blue px-3 py-1 rounded-xl">
        {iconId && <Icon id={iconId} className="w-3.5 h-3.5" />}
        <span className="text-xs">{label}</span>
      </h2>
      <h1 className="text-[80px] leading-[1.1] font-newsreader tracking-tight">
        {children}
      </h1>
    </div>
  );
}
