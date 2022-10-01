// import React from "react";
// Não é necessário importar o React para functional components a partir da versão 17;

import { InterfaceTask } from "../../../types/task";

import styles from "./styles.module.scss";

interface props extends InterfaceTask {
  selectTask: (selectedTask: InterfaceTask) => void;
}

function Item({
  description,
  time,
  selected,
  completed,
  id,
  selectTask,
}: props) {
  return (
    <li
      className={`
      ${styles.item} 
      ${selected ? styles.selectedItem : ""} 
      ${completed ? styles.completedItem : ""}
      `}
      onClick={() =>
        !completed &&
        selectTask({
          description,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{description}</h3>
      {completed && (
        <span
          className={styles.completed}
          aria-label="Tarefa completada."
        ></span>
      )}
      <span>{time}</span>
    </li>
  );
}

export default Item;
