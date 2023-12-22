import styles from "./Command.module.scss";
const Command = (props) => {
  return (
    <div className={styles.Command}>
      <div className={styles.prompt}>portfolio@karan:-$ </div>
      {props.command}
    </div>
  );
};

export default Command;
