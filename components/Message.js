import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Message({ user, message }) {
    const [userLoggedIn] = useAuthState(auth);

    const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;

    return (
        <Container>
            <TypeOfMessage>
            {message.message}
            <TimeStamp>
                {message.timestamp ? moment(message.timestamp).format('LT') : "..."}
            </TimeStamp>
            </TypeOfMessage>
        </Container>
    )
}

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
    width: fit-content;
    padding: 15px;
    border-radius: 12px;
    margin: 10px;
    min-width: 60px;
    padding-bottom: 26px;
    position: relative;
    text-align: right;
    `;

const Sender = styled(MessageElement)`
    margin-left: auto;
    max-width: 600px;
    text-align: left;
    word-break: break-word;
    letter-spacing: 0.02rem;
    background-color: #e5fad4;
    `;

const Reciever = styled(MessageElement)`
    background-color: whitesmoke;
    max-width: 600px;
    text-align: left;
    word-break: break-word;
    letter-spacing: 0.02rem;    `;

const TimeStamp = styled.span`
    color: gray;
    padding: 10px;
    font-size: 10px;
    position: absolute;
    bottom: 0;
    text-align: right;
    right: 0;
    `;