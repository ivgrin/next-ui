import React from 'react';
import HtmlHead from 'next/head';
import Layout from 'layout/index';
import styles from './index.module.css';

export default class Home extends React.Component {

    render() {
        return (
            <Layout>
                {this.renderMeta()}
                {this.renderContent()}
            </Layout>
        );
    };

    renderMeta = () => {
        return (
            <HtmlHead>
                <title>Next UI</title>
            </HtmlHead>
        );
    };

    renderContent = () => {
        return (
            <div className={styles.container}>
                Welcome
            </div>
        );
    };

};
