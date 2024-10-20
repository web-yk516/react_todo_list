import { useCallback, useState } from "react";

export const useTodo = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const onChangeTodoText = (e) => setTodoText(e.target.value || "");
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const incompleteCount = todos.length - completedCount;

  const onClickAddTodo = useCallback(() => {
    if (todoText === "") return;
    const newTodo = { text: todoText || "", completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoText("");
    totalCount;
  }, [todoText, todos, totalCount]);

  const onClickDelete = useCallback((index) => {
    if (confirm("本当によろしいですか？")) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
      totalCount;
    }
  }, [todos, totalCount]);

  const onChangeCompleted = useCallback((index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }, [todos]);

  const onClickEdit = useCallback((index) => {
    // タスクのテキストを取得
    const currentText = todos[index]?.text || "";
    // inputと保存ボタンを表示
    setEditingIndex(index);
    setEditText(currentText !== undefined ? currentText : "");
  }, [todos]);

  const onClickSave = useCallback((index) => {
    const newTodos = [...todos];
    // 変更したtext取得
    newTodos[index].text = editText || "";
    setTodos(newTodos);
    setEditingIndex(null);
    setEditText(newTodos[index].text);
  }, [todos, editText]);

  return {
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
  };
};
