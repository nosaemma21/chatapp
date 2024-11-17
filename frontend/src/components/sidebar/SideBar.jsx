import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";
import Conversations from "./Conversations";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="px-3 divider"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default SideBar;

// TODO: stopped at 2:12:53
