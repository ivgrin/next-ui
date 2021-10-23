import styles from './index.module.css';

export default function Main(props) {
    return (
        <main className={styles.container}>
            {props.children}
        </main>
    );
};