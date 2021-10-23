import React, {Fragment} from 'react';
import HtmlHead from 'next/head';
import styles from './index.module.css';

import Textline from 'kit/textline';
import defaultTheme from './defaultTheme.module.css';

export default class PageTextline extends React.Component {

    render() {
        return (
            <Fragment>
                {this.renderMeta()}
                {this.renderContent()}
            </Fragment>
        );
    };

    renderMeta = () => {
        return (
            <HtmlHead>
                <title>Next UI - Textline</title>
            </HtmlHead>
        );
    };

    renderContent = () => {
        return (
            <div className={styles.container}>
                <Textline 
                    theme={defaultTheme}
                    classNames={{
                        container: styles.textline,
                    }}
                    placeholder="Enter Text"
                />
            </div>
        );
    };

};
