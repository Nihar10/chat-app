import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { doc } from 'firebase/firestore';
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function Siderbar() {
    const [channels, loading, error] = useCollection(db.collection("rooms"));
    console.log(channels)
    return (
        <SidebarContainer>
            <SiderbarHeader>
                <SidebarInfo>
                    <h2>IGrace</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        NIHAR
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SiderbarHeader>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user group" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />

            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
            {channels?.docs.map((doc) => (
                <SidebarOption
                    key={doc.id}
                    id={doc.id}

                    title={doc.data().name}
                />
            ))}

        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    /* display: fixed;
    width: 300px;
    height: 100vh; */
    background-color: var(--slack-color);
    flex: 0.3;
    color: white;
    border-top:1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    >hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
    

`;
const SiderbarHeader = styled.div`

    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    margin-right: auto;
    >.MuiSvgIcon-root{
        padding:8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius:999px;
    }
`;
const SidebarInfo = styled.div`
    flex:1;
    > h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3{
        display: flex;
        font-size: 13px;
        font-weight:  400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root{
        font-size:14px;
        margin-top: 1px;
        margin-right: 2px;
        color:green ;
    }
`;

export default Siderbar;

