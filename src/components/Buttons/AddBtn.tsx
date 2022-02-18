import React from "react";
import { Button } from "react-bootstrap";

const AddBtn = (props: any) => {
  const { addTodo } = props;
  return (
    <div>
      <Button
        variant="dark"
        className="ms-2 "
        onClick={() => addTodo()}
        style={{ width: "100px", height: "45px" }}
      >
        Додати
      </Button>
    </div>
  );
};

export default AddBtn;
