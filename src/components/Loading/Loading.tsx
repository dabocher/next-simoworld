import styles from "./Loading.module.css";
interface LoadingProps {
  loadingText: string;
}

const Loading = ({ loadingText }: LoadingProps) => {
  return (
    <div className={styles.loader}>
      <div className={styles.scanner}>
        <span>{loadingText}</span>
      </div>
    </div>
  );
};

export default Loading;
