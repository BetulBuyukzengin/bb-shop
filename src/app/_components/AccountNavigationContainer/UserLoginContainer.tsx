import { UserIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import NewLoginDropdown from "./NewLoginDropdown";
import CustomHoverDropdown from "../CustomHoverDropdown";

function UserLoginContainer() {
  return (
    <Link
      href="/"
    >
      <CustomHoverDropdown
        title="Giriş Yap"
        href="/"
        icon={<UserIcon className="h-6 w-6 text-gray-500" />}
      >
        <NewLoginDropdown />
      </CustomHoverDropdown>
    </Link>
  );
}

export default UserLoginContainer;
