import Side from 'layout/side';
import Main from 'layout/main';
import styles from './index.module.css';

export default function Layout(props) {
    return (
        <div className={styles.container}>
            <Side />
            <Main>
                {props.children}
            </Main>
        </div>
    );
}