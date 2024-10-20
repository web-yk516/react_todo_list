import "../../index.css";
import { TodoContainer } from "../template/TodoContainer";
import { useTodo } from "../../hooks/useTodo";

export const Todo = () => {
  const {
    todoText,
    todos,
    totalCount,
    completedCount,
    incompleteCount,
    editingIndex,
    editText,
    onChangeTodoText,
    onClickAddTodo,
    onClickDelete,
    onChangeCompleted,
    onClickEdit,
    onClickSave,
    setEditText,
  } = useTodo();

  return (
    <>
      <TodoContainer
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAddTodo={onClickAddTodo}
        totalCount={totalCount}
        completedCount={completedCount}
        incompleteCount={incompleteCount}
        todos={todos}
        editText={editText}
        editingIndex={editingIndex}
        setEditText={setEditText}
        onClickSave={onClickSave}
        onChangeCompleted={onChangeCompleted}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
    </>
  );
};

export default Todo;
