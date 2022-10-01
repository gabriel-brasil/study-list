import React, { useState } from "react";

import Form from "../../components/Form";
import List from "../../components/List";
import Timer from "../../components/Timer";
import { InterfaceTask } from "../../types/task";

import styles from "./styles.module.scss";

function App() {
  const [tasks, setTasks] = useState<Array<InterfaceTask> | []>([]);
  const [selected, setSelected] = useState<InterfaceTask>();

  function selectTask(selectedTask: InterfaceTask) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((oldTask) => ({
        ...oldTask,
        selected: oldTask.id === selectedTask.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((oldTask) => {
          if (oldTask.id === selected.id) {
            return {
              ...oldTask,
              selected: false,
              completed: true,
            };
          }
          return oldTask;
        })
      );
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
