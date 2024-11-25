import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../skeletons/MessageSkeletons";
import Message from "./Message";

import { useEffect, useRef } from "react";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-xs text-center">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};
export default Messages;

//todo: stopped at 3:54
