import React from "react";
import { Button } from "react-bootstrap";

const CompleteBtn = (props: any) => {
  const { type, todoIncomplete, todoComplete, todo } = props;
  return (
    <div>
      <Button
        variant="primary"
        style={{ width: "130px", border: "1px solid black" }}
        onClick={() => {
          type === "Виконані" ? todoIncomplete(todo) : todoComplete(todo);
        }}
      >
        {type === "Виконані" ? "Незавершена" : "Завершена"}
      </Button>
    </div>
  );
};

export default CompleteBtn;
