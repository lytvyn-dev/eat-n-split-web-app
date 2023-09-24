import { useState } from "react";
import SplitForm from "./components/SplitForm";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendsState, setFriendsState] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(undefined);
  const [isSplitForm, setIsSplitForm] = useState(false);

  const addFriendHandler = (friend) => {
    setFriendsState((prevState) => [...prevState, friend]);
  };

  const selectUser = (user) => {
    setSelectedFriend(user);
    setIsSplitForm((prevState) => !prevState);
  };

  const splitBillHandler = (value) => {
    setFriendsState((friends) =>
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return { ...friend, balance: friend.balance + value };
        }
        return friend;
      })
    );
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          onSelected={selectedFriend}
          onSelect={selectUser}
          friends={friendsState}
          onAddFriend={addFriendHandler}
        />
        <AddFriend onAddFriend={addFriendHandler} />
      </div>
      {isSplitForm && <SplitForm onSplit={splitBillHandler} friend={selectedFriend} />}
    </div>
  );
}

export default App;
