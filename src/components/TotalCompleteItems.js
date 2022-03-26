import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return <h5 className="mt-3">Total complete items: {todos.length}</h5>;
};

export default TotalCompleteItems;
