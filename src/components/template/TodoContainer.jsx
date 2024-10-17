import { memo } from "react";
import { TextInput } from "../atoms/TextInput";
import { TodoList } from "../organisms/TodoList";

export const TodoContainer = memo((props) => {
  const {
    todoText,
    onChangeTodoText,
    onClickAddTodo,
    totalCount,
    completedCount,
    incompleteCount,
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
    <div className="container">
      <h1>ToDoアプリ</h1>

      {/* 入力フィールドと保存ボタン */}
      <div className="input-area">
        <TextInput
          value={todoText}
          onChange={onChangeTodoText}
          placeholder="タスクを入力してください"
        />
        <button onClick={onClickAddTodo}>保存</button>
      </div>

      {/* タスクのカウンター */}
      <div className="task-counter">
        全てのタスク: <span>{totalCount}</span> | 完了済み:{" "}
        <span>{completedCount}</span> | 未完了: <span>{incompleteCount}</span>
      </div>
      {/* ToDo一覧 */}
      <TodoList
        todos={todos}
        editText={editText}
        editingIndex={editingIndex}
        setEditText={setEditText}
        onClickSave={onClickSave}
        onChangeCompleted={onChangeCompleted}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
    </div>
  );
});
