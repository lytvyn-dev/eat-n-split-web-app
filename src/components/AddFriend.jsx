import Button from "./Button";
import { useState } from "react";

function AddFriend(props) {
  const [isForm, setIsForm] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  const formHadler = () => {
    setIsForm(!isForm);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID;
    const newFriend = {
      id,
      name,
      image: `${imageUrl}?=${id}`,
      balance: 0,
    };

    props.onAddFriend(newFriend);
    setName("");
    setImageUrl("https://i.pravatar.cc/48");
  };

  return (
    <>
      {isForm && (
        <div className="form">
          <form onSubmit={addUserHandler} className="form-add-friend">
            <label htmlFor="friend-name">👯‍♀️ Friend name</label>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" />
            <label htmlFor="imageUrl">🎇 Image URL</label>
            <input onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} type="text" />
            <button className="button" type="submit">
              Add
            </button>
          </form>
        </div>
      )}
      <Button text={isForm ? "Close" : "Add friend"} onClick={formHadler} />
    </>
  );
}

export default AddFriend;
