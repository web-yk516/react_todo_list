import { memo } from "react";
import { Button } from "../atoms/Button";
import { TodoItem } from "../molecule/TodoItem";

export const TodoList = memo((props) => {
  const {
    todos,
    editText,
    editingIndex,
    setEditText,
    onClickSave,
    onChangeCompleted,
    onClickEdit,
    onClickDelete,
  } = props;

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <TodoItem
            todo={todo}
            index={index}
            editText={editText}
            editingIndex={editingIndex}
            setEditText={setEditText}
            onClickSave={onClickSave}
            onChangeCompleted={onChangeCompleted}
          />
          <div className="task-actions">
            <Button
              onClick={() => onClickEdit(index)}
              label="編集"
              disabled={editingIndex === index}
            />
            <Button onClick={() => onClickDelete(index)} label="削除" />
          </div>
        </div>
      ))}
    </div>
  );
});
