import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] overflow-hidden md:h-[550px] bg-gray-400 bg-opacity-0 shadow-md rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
      <SideBar />
      <MessageContainer />
    </div>
  );
};
export default Home;
