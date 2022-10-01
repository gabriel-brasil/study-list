import styles from "../styles.module.scss";

interface Props {
  time: number | undefined;
}

function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteTen, minuteUnity] = String(minutes).padStart(2, "0");
  const [secondTen, secondUnity] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={styles.clockNumber}>{minuteTen}</span>
      <span className={styles.clockNumber}>{minuteUnity}</span>
      <span className={styles.clockDivider}>:</span>
      <span className={styles.clockNumber}>{secondTen}</span>
      <span className={styles.clockNumber}>{secondUnity}</span>
    </>
  );
}

export default Clock;
