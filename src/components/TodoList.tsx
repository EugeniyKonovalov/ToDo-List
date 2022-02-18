import React from "react";
import { Button, Card } from "react-bootstrap";
import ListItem from "./ListItem";

const TodoList = (props: any) => {
  const {
    complete,
    incomplete,
    type,
    todoComplete,
    todoIncomplete,
    deleteTodo,
  } = props;
  const looperList = type === "Виконані" ? complete : incomplete;
  return (
    <div>
      <Card className="ms-2 me-3 mb-2 border-0">
        <h3>{type}</h3>
        {looperList.map((todo: string, index: number) => {
          return (
            <div key={index}>
              <ListItem
                type={type}
                todo={todo}
                todoComplete={todoComplete}
                todoIncomplete={todoIncomplete}
                deleteTodo={deleteTodo}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default TodoList;
