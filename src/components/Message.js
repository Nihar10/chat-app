import React from 'react'
import styled from 'styled-components'


function Message({ message, timestamp, user, userImage }) {
    return (
        < MessageContainer>
            <img src={userImage} alt='' />
            <MessageInfo>
                <h4>
                    {user}<span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>

            </MessageInfo>

        </MessageContainer>
    )
}

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    >img{
        height:50px;
        border-radius: 8px;
    }
`;
const MessageInfo = styled.div`
    padding: 10px;
    >h4 >span{
        color:white;
        font-weight: 400;
        margin-left: 4px;
        font-size: 10px;
    }
`;

export default Message
