import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const todoListAtom = atom({
  key: "TodoListState",
  default: [],
});
