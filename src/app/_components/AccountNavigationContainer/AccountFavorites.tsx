import { HeartIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

function AccountFavorites() {
  return (
    <Link
      href="/"
      className="grid grid-cols-[.2fr_1fr] text-start gap-3 cursor-pointer"
    >
      <HeartIcon className="h-6 w-6 text-gray-500" />
      <span>Favori</span>
    </Link>
  );
}

export default AccountFavorites;
