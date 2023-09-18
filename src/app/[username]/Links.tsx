import Link from "next/link";
import { Link as LinkType } from "./types";

type Props = {
  links: LinkType[];
};

export default function LinksComponent({ links }: Props) {
  return (
    <div className="flex flex-col p-4 gap-2">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className="w-full text-center border-2 border-gray-700 hover:border-gray-500 hover:bg-gray-700 transition-all py-2 px-4 rounded-full "
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
