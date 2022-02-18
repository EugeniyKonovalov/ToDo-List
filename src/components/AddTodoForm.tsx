import { useRef } from "react";
import { Button, Card, FormControl } from "react-bootstrap";
import AddBtn from "./Buttons/AddBtn";

const AddTodoForm = (props: any) => {
  const { todoIncomplete } = props;

  const input = useRef<HTMLInputElement>(null);
  const addTodo = () => {
    if (input.current) {
      const val = input.current.value;
      input.current.value = "";
      todoIncomplete(val);
    }
  };
  return (
    <div className="d-flex align-items-center mt-3">
      <Card className="m-3 border-0 d-flex flex-row flex-fill justify-content-between">
        <FormControl
          placeholder="Додати нову справу"
          style={{ fontSize: "20px", backgroundColor: "azure", height: "45px" }}
          ref={input}
        />
        <AddBtn addTodo={addTodo} />
      </Card>
    </div>
  );
};

export default AddTodoForm;
