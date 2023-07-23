import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db } from "../firebase";
import firebase from 'firebase/compat/app';
// import 'firebase/compat/storage';
// import 'firebase/compat/database';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


function ChatInput({ channelName, channelId, chatRef }) {
    // const intputRef = useRef(null);
    const [input, setInput] = useState("");
    console.log(channelId);
    const sendMessage = (e) => {
        e.preventDefault();
        if (!channelId) {
            return false;
        }
        console.log(channelId);
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "IGrace",
            userImage: 'https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg',
        });
        chatRef.current.scrollIntoView({
            behavior: "smooth",
        }
        );

        setInput("");

    };
    return (
        <ChatInputContainer>
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`} />
                <Button hidden type='sumbit' onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    )
}

const ChatInputContainer = styled.div`
    border-radius: 20px;
    >form{
        position: relative;
        display: flex;
        justify-content: center;
    }
    >form >input{
        position: fixed;
        bottom:30px;
        width:60%;
        border:1px solid gray;
        border-radius: 3px;
        padding:20px;
        outline: none;
    }
    >form >button{
        display: none !important;
    }


`;

export default ChatInput
