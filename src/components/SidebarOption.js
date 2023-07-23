import React from 'react'
import styled from 'styled-components';
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux"
import { enterRoom } from '../features/appSlice';
function SidebarOption({ Icon, title, addChannelOption, id }) {
    const dispatch = useDispatch();

    const addchannel = () => {
        const channelName = prompt("Please enter the channel name:");
        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    };
    const selectchannel = () => {
        if (id) {
            dispatch(
                enterRoom({
                    roomId: id,
                })
            );
        }


    };
    return (
        <SidebarOptionContainer1>
            <SidebarOptionContainer
                onClick={addChannelOption ? addchannel : selectchannel}>
                {Icon && <Icon fontsize="small" style={{ padding: 10 }} />}
                {Icon ? (
                    <h3>{title}</h3>
                ) : (
                    <SidebarOptionChannel>
                        <span>#</span>{title}
                    </SidebarOptionChannel>
                )}
            </SidebarOptionContainer>
        </SidebarOptionContainer1>

    )
}
const SidebarOptionContainer1 = styled.div`
    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }
`;
const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left:2px;
    
    cursor: pointer;
    
    >h3{
        font-weight: 500;
    }
    >h3>span{
        padding: 15px;
    }
`;
const SidebarOptionChannel = styled.div`
    padding: 10px 15px;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 2px;
    >span{
        margin-right: 10px;
    }

    
        
   
    
    
    
`;
export default SidebarOption
