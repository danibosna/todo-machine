import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { MainLayout } from "./MainLayout";
import { TodosError } from "../TodosError";
import { TodosLoad } from "../TodosLoad";
import { TodosEmty } from "../TodosEmty";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <MainLayout>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {error && <TodosError error={error} />}
          {loading && (
            <>
              <TodosLoad />
              <TodosLoad />
              <TodosLoad />
            </>
          )}
          {!loading && !searchedTodos.length && <TodosEmty />}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </MainLayout>
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
