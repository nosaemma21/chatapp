import { useState } from "react";
import { IoSendOutline } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="relative w-ful">
        <input
          type="text"
          className="input placeholder:border border-gray-600 text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center px-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <IoSendOutline />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
