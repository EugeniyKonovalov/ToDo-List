import React from "react";
import { connect } from "react-redux";
import { todoComplete } from "./store/action-creators/todoComplete";
import { todoIncomplete } from "./store/action-creators/todoIncomplete";
import { deleteTodo } from "./store/action-creators/deleteTodo";
import storeType from "./types/storeType";
import AppPropType from "./types/AppPropType";
import { Container, Card } from "react-bootstrap";

import AddTodoForm from "./components/AddTodoForm";
import RenderList from "./components/RenderList";

const App: React.FC<AppPropType> = ({
  complete,
  incomplete,
  deleteTodo,
  todoComplete,
  todoIncomplete,
}) => {
  return (
    <Container>
      <Card.Header className="text-center mt-5 fs-1">Список справ</Card.Header>
      <Card className="mt-5">
        <AddTodoForm todoIncomplete={todoIncomplete} />
        <div>
          <RenderList
            complete={complete}
            incomplete={incomplete}
            todoComplete={todoComplete}
            todoIncomplete={todoIncomplete}
            deleteTodo={deleteTodo}
          />
        </div>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state: storeType) => {
  return {
    complete: state.complete,
    incomplete: state.incomplete,
  };
};

export default connect(mapStateToProps, {
  deleteTodo,
  todoComplete,
  todoIncomplete,
})(App);
