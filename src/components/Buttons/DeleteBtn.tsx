import React from "react";
import { Button } from "react-bootstrap";

const DeleteBtn = (props: any) => {
  const { todo, deleteTodo } = props;
  return (
    <div>
      <Button
        className="ms-2"
        style={{ width: "100px", border: "1px solid black" }}
        variant="dark"
        onClick={() => deleteTodo(todo)}
      >
        Видалити
      </Button>
    </div>
  );
};

export default DeleteBtn;
