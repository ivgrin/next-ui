import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

export default class Side extends React.Component {

    state = {
        page: null,
    };

    componentDidMount() {
        this.setState({
            page: window.location.pathname,
        });
    };

    componentDidUpdate() {
        if (this.state.page != window.location.pathname) {
            this.setState({
                page: window.location.pathname,
            });
        }
    };

    render() {
        return (
            <aside className={styles.container}>
                {this.renderHead()}
                {this.renderNav()}
            </aside>
        );
    };

    renderHead = () => {
        return (
            <header className={styles.head}>
                Next UI
            </header>
        );
    };

    renderNav = () => {

        const options = [
            {
                type: 'link',
                url: '/textline',
                title: 'Textline',
            },
            {
                type: 'link',
                url: '/textarea',
                title: 'Textarea',
            },
        ];

        return (
            <div className={styles.nav}>
                {options.map((option, index) => {
                    switch (option.type) {
                        case 'link':
                            return this.renderLink(option, index);
                        case 'delimiter':
                            return this.renderDelimiter(option, index);
                    }
                })}
            </div>
        );

    };

    renderLink = (option, index) => {
        return (
            <Link key={index} href={option.url}>
                <a className={[styles.navItem, this.state.page == option.url ? styles.active : null].join(' ')}>
                    {option.title}
                </a>
            </Link>
        );
    };

    renderDelimiter = (option, index) => {
        return (
            <div key={index} className={styles.navDelimiter}>
                <div></div>
            </div>
        );
    };

};