import { InterfaceTask } from "../../types/task";
import Item from "./Item";

import styles from "./styles.module.scss";

interface props {
  tasks: Array<InterfaceTask>;
  selectTask: (selectedTask: InterfaceTask) => void;
}

function List({ tasks, selectTask }: props) {
  return (
    <aside className={styles.taskList}>
      <h2>Lista de estudos</h2>
      <ul>
        {tasks.map((task) => (
          <Item selectTask={selectTask} key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
