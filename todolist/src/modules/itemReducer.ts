import { toUnicode } from "punycode";
import { Item } from "../types/type";

const ADD = "itemReducer/ADD" as const;
const DELETE = "itemReducer/DELETE" as const;
const CLEAR = "itemReducer/CLEAR" as const;

// const initialState = JSON.parse(localStorage.getItem("todos") || "");
// 액션 생성함수를 선언합니다
export const addItem = (id: string, name: string, clear: boolean) => ({
  type: ADD,
  payload: { id, name, clear },
});

export const deleteItem = (id: string) => ({
  type: DELETE,
  payload: id,
});

export const clearItem = (id: string) => ({
  type: CLEAR,
  payload: id,
});

type TodoAction =
  | ReturnType<typeof addItem>
  | ReturnType<typeof deleteItem>
  | ReturnType<typeof clearItem>;

type TodoState = {
  todo: Item[];
};

const initialTodo = {
  todo: [],
};

const itemReducer = (
  state: TodoState = initialTodo,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case ADD:
      return {
        todo: state.todo.concat({
          itemId: action.payload.id,
          itemName: action.payload.name,
          clear: action.payload.clear,
        }),
      };
    case DELETE:
      return {
        todo: state.todo.filter((todo) => {
          return todo.itemId === action.payload ? false : true;
        }),
      };

    case CLEAR:
      return {
        todo: state.todo.map((todo) => {
          return todo.itemId === action.payload
            ? { ...todo, clear: !todo.clear }
            : todo;
        }),
      };

    default:
      return state;
  }
};

export default itemReducer;
