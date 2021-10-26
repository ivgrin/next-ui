import React from 'react';
import styles from './index.module.css';

export default class Table extends React.Component {

    render() {
        return (
            <table className={this._class()}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        {this.props.cols.map((c, ci) => {
                            var name = !c.match(/^_/) ? c : null;
                            return (
                                <th className={styles.th} key={ci}>{name}</th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {this.props.rows.map((r, ri) => {
                        return (
                            <tr className={styles.tr} key={ri}>
                                {this.props.cols.map((c, ci) => {

                                    if (['values'].includes(c)) {

                                        var data = typeof r[c] !== 'undefined' ? r[c] : [];
                                        var def = typeof r.default !== 'undefined' ? r.default : null;

                                        return (
                                            <td className={styles.td} key={ci}>
                                                {this.renderValues(data, def)}
                                            </td>
                                        );

                                    } else if (['modifiers'].includes(c)) {

                                        var data = typeof r[c] !== 'undefined' ? r[c] : [];
                                        var def = typeof r.default !== 'undefined' ? r.default : null;

                                        return (
                                            <td className={styles.td} key={ci}>
                                                {this.renderModifiers(data, def)}
                                            </td>
                                        );

                                    } else {

                                        var data = typeof r[c] !== 'undefined' ? r[c] : '-';

                                        return (
                                            <td className={styles.td} key={ci}>{data}</td>
                                        );

                                    }

                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    renderValues(values, def) {
        return (
            <ul className={styles.values}>
                {values.map((v, i) => {
                    return (
                        <li key={i} className={v == def ? styles.default : null}>
                            {v}
                        </li>
                    );
                })}
            </ul>
        );
    }

    renderModifiers(values, def) {
        return (
            <ul className={styles.modifiers}>
                {values.map((v, i) => {
                    return (
                        <li key={i} className={v == def ? styles.default : null}>
                            {v}
                        </li>
                    );
                })}
            </ul>
        );
    }

    _class() {
        let className = [styles.container];
        if (this.props.size) {
            className.push(styles[this.props.size + 'Size']);
        }
        if (this.props.preset) {
            className.push(styles[this.props.preset + 'Preset']);
        }
        return className.join(' ');
    }

};
