const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500">
        {/* Avatar and name */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://avatar.iran.liara.run/public" alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">🎃</span>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="h-1 py-0 my-0 divider" />
    </>
  );
};
export default Conversation;
