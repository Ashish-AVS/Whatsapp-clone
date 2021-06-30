import React from "react";
import styled from "styled-components";
import { Avatar, Button } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import * as EmailValidator from "email-validator";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from '../components/Chat'

export default function Sidebar() {
  const [user] = useAuthState(auth);
  const userChatRef = db.collection('chats').where('users', 'array-contains', user.email)
  const [chatsSnapshot] = useCollection(userChatRef)

  const createChat = () => {
    const input = prompt("Please enter your email address");
    if (!input) return;
    if (EmailValidator.validate(input) && input!=user.email && !chatAlreadyExists(input)) {
      // if email is valid add chat
      db.collection("chats").add({
        users: [user.email, input],
      });
    }
    
  };

  const chatAlreadyExists = recipientEmail => (
    !!chatsSnapshot?.docs.find(
      (chat) => 
         chat.data().users.find((user) => user === recipientEmail)?.length > 0
    )
  )

  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={() => auth.signOut()} />
        <IconsContainer>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search Chat" />
      </Search>

      <SidebarButton onClick={createChat}>Start a new Chat</SidebarButton>

      {chatsSnapshot?.docs.map(chat => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}

    </Container>
  );
}

const Container = styled.div``;

const Header = styled.h2`
  display: flex;
  position: sticky;
  z-index: 1;
  justify-content: space-between;
  top: 0;
  padding: 5px;
  margin: 15px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 20px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  padding: 10px;
  border: none;
  flex: 1;
  margin-left: 10px;
`;

const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    /* Inc specificity of this styles */
    border: 1px solid whitesmoke;
  }
`;
