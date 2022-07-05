
import CommonSection from "../components/ui/Common-section/CommonSection";
import FireChat from "../components/ui/Chat-section/FireChat";

const Chat = () => {

  return (
    <>
      <CommonSection title="Live Chat" />
      <div className="chat">
        <FireChat />
      </div>
    </>
  );
};

export default Chat;
