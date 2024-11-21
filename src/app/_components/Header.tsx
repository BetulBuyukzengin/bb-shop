import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import CustomInput from "./CustomInput";
import AccountNavigationContainer from "./AccountNavigationContainer/AccountNavigationContainer";

function Header() {
  return (
    <header className="grid grid-cols-[1fr_2fr_1fr] gap-4 py-10 px-5 items-center justify-between">
      <span className="font-semibold text-xl">B&B SHOP</span>
      <CustomInput placeholder="Aradığınız ürün, kategori veya markayı yazınız">
        <MagnifyingGlassIcon className="h-6 w-6 bg-slate-50" />
      </CustomInput>
      <AccountNavigationContainer />
    </header>
  );
}

export default Header;
