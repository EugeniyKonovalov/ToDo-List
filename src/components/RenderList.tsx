import React from "react";
import TodoList from "./TodoList";
const RenderList = (props: any) => {
  const { complete, incomplete, deleteTodo, todoComplete, todoIncomplete } =
    props;
  const renderList = (type: "Виконані" | "Невиконані") => {
    return (
      <TodoList
        complete={complete}
        incomplete={incomplete}
        type={type}
        todoComplete={todoComplete}
        todoIncomplete={todoIncomplete}
        deleteTodo={deleteTodo}
      />
    );
  };

  return (
    <div>
      <div className="text-center">{renderList("Невиконані")}</div>
      <hr />
      <div className="text-center">{renderList("Виконані")}</div>
    </div>
  );
};

export default RenderList;
