import AccountFavorites from "./AccountFavorites";
import BasketPreview from "./BasketPreview";
import UserLoginContainer from "./UserLoginContainer";

function AccountNavigationContainer() {
  return (
    <div className="grid grid-cols-[.3fr_.3fr_.3fr] text-center gap-5 justify-between w-[100%]">
      <UserLoginContainer />
      <AccountFavorites />
      <BasketPreview />
    </div>
  );
}

export default AccountNavigationContainer;
