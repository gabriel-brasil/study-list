import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { InterfaceTask } from "../../types/task";

import Button from "../Button";

import styles from "./styles.module.scss";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Array<InterfaceTask>>>;
}

function Form({ setTasks }: Props) {
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTasks((oldTasks) => [
      ...oldTasks,
      {
        description,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);

    setDescription("");
    setTime("");
  }

  return (
    <form className={styles.newTask} onSubmit={addTask}>
      <div className={styles.inputContainer}>
        <label htmlFor="description">Adicione um novo estudo:</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="time">Tempo:</label>
        <input
          type="time"
          min="00:00"
          max="01:30"
          value={time}
          name="time"
          id="time"
          onChange={(event) => setTime(event.target.value)}
          required
        />
      </div>
      <Button disabled={!!description && !!time ? false : true} type="submit">
        Adicionar
      </Button>
    </form>
  );
}

// Como era feito utilizando classes

// class Form extends React.Component<{
//   setTasks: React.Dispatch<React.SetStateAction<Array<InterfaceTask>>>;
// }> {
//   state = {
//     description: "",
//     time: "00:00:00",
//   };

//   addTask(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     this.props.setTasks((oldTasks) => [
//       ...oldTasks,
//       {
//         ...this.state,
//         selected: false,
//         completed: false,
//         id: uuidv4(),
//       },
//     ]);

//     this.setState({
//       description: "",
//       time: "00:00:00",
//     });
//   }

//   render() {
//     return (
//       <form className={styles.newTask} onSubmit={this.addTask.bind(this)}>
//         <div className={styles.inputContainer}>
//           <label htmlFor="task">Adicione um novo estudo:</label>
//           <input
//             type="text"
//             name="task"
//             id="task"
//             placeholder="descrição"
//             value={this.state.description}
//             onChange={(event) =>
//               this.setState({ ...this.state, description: event.target.value })
//             }
//             required
//           />
//         </div>
//         <div className={styles.inputContainer}>
//           <label htmlFor="time">Tempo:</label>
//           <input
//             type="time"
//             step="1"
//             min="00:00:00"
//             max="01:30:00"
//             value={this.state.time}
//             name="time"
//             id="time"
//             onChange={(event) =>
//               this.setState({ ...this.state, time: event.target.value })
//             }
//             required
//           />
//         </div>
//         <Button type="submit">Adicionar</Button>
//       </form>
//     );
//   }
// }

export default Form;
