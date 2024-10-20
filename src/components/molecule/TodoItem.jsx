import { memo } from "react";
import { Button } from "../atoms/Button";
import { Checkbox } from "../atoms/Checkbox";
import { TextInput } from "../atoms/TextInput";

export const TodoItem = memo((props) => {
  const { editText, editingIndex, setEditText, todo, index, onClickSave, onChangeCompleted } = props;

  return (
    <div>
      {editingIndex === index ? (
        <div>
          <TextInput value={editText} onChange={(e) => setEditText(e.target.value)} />
          <Button label="保存" onClick={() => onClickSave(index)} />
        </div>
      ) : (
        <div>
          <Checkbox checked={todo.completed} onChange={() => onChangeCompleted(index)} />
          <span>{todo.text || ""}</span>
        </div>
      )}
    </div>
  );
});
