import styles from './Clock.module.css';
import {
  getHours,
  getMinutes,
  getSeconds,
  getMilliseconds,
} from 'date-fns';

function Clock() {
  const date = new Date();
  const hourDegStart = getHours(date) * 30;
  const minDegStart = getMinutes(date) * 6;
  const secDegStart = getSeconds(date) * 6;
  const milDegStart = getMilliseconds(date) * .06;

  return (
    <section className={styles.container}>
      <div className={styles.circle}>
        <section className={styles.handsContainer}>
          <article
            className={styles.hour}
            style={{
              transform: `rotate(${hourDegStart}deg)`,
            }}
          ></article>
          <article
            className={styles.minute}
            style={{
              transform: `rotate(${minDegStart}deg)`,
            }}
          ></article>
          <article
            className={styles.second}
            style={{
              '--thing': `${secDegStart + 360}deg`,
              transform: `rotate(${secDegStart}deg)`,
            }}></article>
          <article
            className={styles.millisecond}
            style={{
              '--thing': `${milDegStart + 360}deg`,
              transform: `rotate(${milDegStart}deg)`,
            }}
          ></article>
        </section>

        <section className={styles.numberContainer}>
          <div className={styles.number12}>12</div>
          <div className={styles.number1}>1</div>
          <div className={styles.number2}>2</div>
          <div className={styles.number3}>3</div>
          <div className={styles.number4}>4</div>
          <div className={styles.number5}>5</div>
          <div className={styles.number6}>6</div>
          <div className={styles.number7}>7</div>
          <div className={styles.number8}>8</div>
          <div className={styles.number9}>9</div>
          <div className={styles.number10}>10</div>
          <div className={styles.number11}>11</div>
        </section>
      </div>
    </section>
  );
}

export default Clock;