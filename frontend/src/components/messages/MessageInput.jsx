import { IoSendOutline } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="relative w-ful">
        <input
          type="text"
          className="input placeholder:border border-gray-600 text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
          placeholder="Send a message"
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center px-3"
        >
          <IoSendOutline />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
