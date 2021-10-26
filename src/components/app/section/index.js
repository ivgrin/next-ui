import React from 'react';
import styles from './index.module.css';

export default class Section extends React.Component {

    render() {
        return (
            <div className={this._class()}>
                {this.renderName()}
                {this.renderDesc()}
                {this.renderContent()}
            </div>
        );
    }

    renderName() {
        if (this.props.name) {
            return (
                <div className={styles.name}>{this.props.name}</div>
            );
        }
    }

    renderDesc() {
        if (this.props.desc) {
            return (
                <div className={styles.desc}>{this.props.desc}</div>
            );
        }
    }

    renderContent() {
        if (this.props.children) {
            return (
                <div className={styles.content}>{this.props.children}</div>
            );
        }
    }

    _class() {
        var className = [styles.container];
        if (this.props.size) {
            className.push(styles[this.props.size + 'Size']);
        }
        if (this.props.preset) {
            className.push(styles[this.props.preset + 'Preset']);
        }
        return className.join(' ');
    }

};
