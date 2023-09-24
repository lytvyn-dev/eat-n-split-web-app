import Button from "./Button";
import { useState } from "react";

function SplitForm({ friend, onSplit }) {
  const [inputsState, setInputsState] = useState({
    billValue: "",
    yourExpense: "",
    whoIsPaying: "user",
  });

  const paidByFriend = inputsState.billValue - inputsState.yourExpense;

  const submitFormHandler = (e) => {
    e.preventDefault();
    onSplit(inputsState.whoIsPaying === "user" ? paidByFriend : -inputsState.yourExpense);
  };

  return (
    <>
      {friend && (
        <form onSubmit={submitFormHandler} className="form-split-bill">
          <h2>Splitt a bill with {friend?.name}</h2>
          <label htmlFor="bill-value">💵 Bill value</label>
          <input
            onChange={(e) =>
              setInputsState((prevState) => ({
                ...prevState,
                billValue: e.target.value,
              }))
            }
            value={inputsState?.billValue}
            id="bill-value"
            type="number"
          />
          <label htmlFor="your-expanse">🙋‍♂️ Your expanse</label>
          <input
            onChange={(e) =>
              setInputsState((prevState) => ({
                ...prevState,
                yourExpense:
                  +e.target.value > +inputsState.billValue
                    ? inputsState.yourExpense
                    : e.target.value,
              }))
            }
            value={inputsState?.yourExpense}
            id="your-expanse"
            type="number"
          />
          <label htmlFor="friend-expanse">👯‍♂️ {friend?.name} expense</label>
          <input value={paidByFriend} disabled id="friend-expanse" type="number" />
          <label htmlFor="who-was-pay">🤮 Who is paying the bill?</label>
          <select
            onChange={(e) =>
              setInputsState((prevState) => ({
                ...prevState,
                whoIsPaying: e.target.value,
              }))
            }
            name="who-was-pay"
            id="who-was-pay"
          >
            <option value="user">You</option>
            <option value="friend">{friend?.name}</option>
          </select>
          <Button text={"Split bill"} />
        </form>
      )}
    </>
  );
}

export default SplitForm;
