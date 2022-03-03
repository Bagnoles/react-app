
import ChatList from "../components/ChatList";
import Messenger from "../components/Messenger";



const Chats = () => {

    return (
        <div className="messenger-wrp">
            <div>
                <ChatList />
            </div>
            <div>
                <Messenger />
            </div>
        </div>
    )
}

export default Chats;