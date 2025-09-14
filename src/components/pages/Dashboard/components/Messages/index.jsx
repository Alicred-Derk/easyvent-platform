import ChatMenu from "./components/ChatMenu";
import ChatBox from "./components/ChatBox";

const Messages = () => {
  return (
    <div className="flex gap-4 p-4 pt-0 h-[80vh] overflow-hidden">
      <ChatMenu />

      <ChatBox />
    </div>
  )
};

export default Messages;