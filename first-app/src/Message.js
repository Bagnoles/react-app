
function Message(props) {
    return (
        <div className="Message">
            <h4>Message component</h4>
            <p>Send message: {props.message}</p>
        </div>
    )
}

export default Message;