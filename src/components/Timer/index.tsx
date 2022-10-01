import { useState, useEffect } from "react";

import { timeToSeconds } from "../../common/utils/time";
import { InterfaceTask } from "../../types/task";

import Button from "../Button";
import Clock from "./Clock";

import styles from "./styles.module.scss";

interface Props {
  selected: InterfaceTask | undefined;
  finishTask: () => void;
}

function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={styles.timer}>
      <p className={styles.title}>
        Escolha uma tarefa para iniciar o cronômetro!
      </p>
      <div className={styles.clockWrapper}>
        <Clock time={time} />
      </div>

      <Button
        disabled={!!selected ? false : true}
        onClick={() => countdown(time)}
      >
        Começar
      </Button>
    </div>
  );
}

export default Timer;
