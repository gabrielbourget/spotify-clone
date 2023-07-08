import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type SidebarItemProps = {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
  key: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { icon: Icon, label, active, href } = props;

  return (
    <Link
      href={href}
      className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`, active ? "text-white" : null)}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  )
};

export default SidebarItem;
