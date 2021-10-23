import React from 'react';
import Layout from 'layout/index';
import PageTextline from './textline';
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
                {this.renderPage()}
            </div>
        );
    };

    renderPage = () => {
        switch (this.props.page) {
            case 'textline':
                return <PageTextline />;
        }
    };

};
