import Button from "./Button";

function Friend({ data, onSelect, onSelected }) {
  return (
    <li className={onSelected?.id === data.id ? "selected" : ""}>
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      {data.balance > 0 && (
        <p className="green">
          {data.name} owe you {Math.abs(data.balance)}
        </p>
      )}
      {data.balance < 0 && (
        <p className="red">
          You owe {data.name} {Math.abs(data.balance)}
        </p>
      )}
      {data.balance === 0 && <p>You and your friend are even</p>}
      <Button
        onClick={() => onSelect(data)}
        text={onSelected?.id === data.id ? "Close" : "Select"}
      />
    </li>
  );
}

export default Friend;
