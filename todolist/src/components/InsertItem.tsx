import { useState } from "react";
import { Item } from "../types/type";
import { v4 as uuid } from "uuid";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const InsertItem = ({ items, setItems }: Props) => {
  const [itemName, setItemName] = useState("");
  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const clickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setItems([...items, { itemId: uuid(), itemName, clear: false }]);

    setItemName("");
    console.log(itemName);
  };

  return (
    <>
      <input
        className="task-input"
        value={itemName}
        onChange={changeItemName}
        type="text"
      />
      <button className="button-add" onClick={clickButton}>{`생성`}</button>
    </>
  );
};

export default InsertItem;
