import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-full input input-bordered"
      />
      <button type="submit" className="text-white btn btn-circle bg-sky-500">
        <FaSearch />
      </button>
    </form>
  );
};
export default SearchInput;
