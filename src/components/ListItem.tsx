import React from "react";
import { Button, Card } from "react-bootstrap";
import CompleteBtn from "./Buttons/CompleteBtn";
import DeleteBtn from "./Buttons/DeleteBtn";

const ListItem = (props: any) => {
  const { todo, type, todoComplete, todoIncomplete, deleteTodo } = props;
  return (
    <div>
      <Card
        className="d-flex flex-row align-items-center m-1 px-1 py-2"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid black",
          backgroundColor: type === "Виконані" ? "green" : "red",
          fontSize: "20px",
        }}
      >
        <div className="d-flex flex-fill overflow-auto ">{todo}</div>
        <div>
          <CompleteBtn
            type={type}
            todo={todo}
            todoIncomplete={todoIncomplete}
            todoComplete={todoComplete}
          />
        </div>
        <DeleteBtn todo={todo} deleteTodo={deleteTodo} />
      </Card>
    </div>
  );
};

export default ListItem;
