import React from 'react';
import Layout from 'layout/index';
import DocTextline from './textline';
import styles from './index.module.css';

export default class Home extends React.Component {

    render() {
        return (
            <Layout>
                {this.renderContent()}
            </Layout>
        );
    };

    renderContent = () => {
        return (
            <div className={styles.container}>
                {this.renderDoc()}
            </div>
        );
    };

    renderDoc = () => {
        switch (this.props.componentName) {
            case 'textline':
                return <DocTextline />;
        }
    };

};
