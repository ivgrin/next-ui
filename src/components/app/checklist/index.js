import React from 'react';
import styles from './index.module.css';

export default class Checklist extends React.Component {

    render() {
        return (
            <ul className={this._class()}>
                {this.props.items.map((i, ii) => {
                    return (
                        <li key={ii} className={this._itemClass(i)}>
                            {i.text}
                        </li>
                    );
                })}
            </ul>
        );
    }

    _class(i) {
        var className = [styles.container];
        if (this.props.preset) {
            className.push(styles[this.props.preset + 'Preset']);
        }
        return className.join(' ');
    }

    _itemClass(i) {
        var className = [styles.item];
        if (i.type) {
            className.push(styles[i.type + 'Type']);
        }
        return className.join(' ');
    }

};
