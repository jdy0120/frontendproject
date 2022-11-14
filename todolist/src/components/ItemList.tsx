import { Item } from "../types/type";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList = ({ items, setItems }: Props) => {
  const clickDelete = (data: Item) => {
    setItems(items.filter((item: Item) => item.itemId !== data.itemId));
  };

  const clickComplete = (data: Item) => {
    setItems(
      items.map((item: Item) => {
        if (item.itemId === data.itemId) {
          return { ...item, clear: !item.clear };
        }
        return item;
      })
    );
  };

  return (
    <ul>
      {items.map((data: Item) => {
        return (
          <li className="list-item" key={data.itemId}>
            <p className={`${data.clear ? "complete" : ""}`}>{data.itemName}</p>
            <div>
              <button
                className="button-delete"
                onClick={() => clickDelete(data)}
              >{`삭제`}</button>
              <button
                className="button-complete"
                onClick={() => clickComplete(data)}
              >{`해결`}</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
