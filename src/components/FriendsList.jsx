import Friend from "./Friend";

function FriendsList({ friends, onSelect, onSelected }) {
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend onSelected={onSelected} onSelect={onSelect} key={friend.id} data={friend} />;
      })}
    </ul>
  );
}

export default FriendsList;
