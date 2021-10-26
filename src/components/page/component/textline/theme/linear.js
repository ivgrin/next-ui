import React from 'react';
import SectionExample from 'app/section/example';
import Textline from 'kit/textline/linear';
import styles from './styles.module.css';

export default class ThemeLinear extends React.Component {

    state = {
        blank: null,
        nativePlaceholder: null,
        filled: "Hello World!",
        disabled: null,
        errored: "Not Valid Data",
    };

    render() {
        return (
            <SectionExample
                name="Linear"
                rows={[
                    [
                        'blank',
                        this.renderBlank(),
                    ],
                    [
                        'native placeholder',
                        this.renderNativePlaceholder(),
                    ],
                    [
                        'filled',
                        this.renderFilled(),
                    ],
                    [
                        'disabled',
                        this.renderDisabled(),
                    ],
                    [
                        'errored',
                        this.renderErrored(),
                    ],
                ]}
            />
        );
    };

    renderBlank = () => {
        return (
            <Textline
                classNames={{
                    container: styles.textline,
                }}
                name="blank"
                value={this.state.blank}
                placeholder="Sample"
                onChange={this.onChangeForm}
            />
        );
    };

    renderNativePlaceholder = () => {
        return (
            <Textline
                classNames={{
                    container: styles.textline,
                }}
                name="nativePlaceholder"
                value={this.state.nativePlaceholder}
                placeholder="Sample"
                useNativePlaceholder={true}
                onChange={this.onChangeForm}
            />
        );
    };

    renderFilled = () => {
        return (
            <Textline
                classNames={{
                    container: styles.textline,
                }}
                name="filled"
                value={this.state.filled}
                placeholder="Sample"
                onChange={this.onChangeForm}
            />
        );
    };

    renderDisabled = () => {
        return (
            <Textline
                classNames={{
                    container: styles.textline,
                }}
                name="disabled"
                value={this.state.disabled}
                placeholder="Sample"
                disabled={true}
                onChange={this.onChangeForm}
            />
        );
    };

    renderErrored = () => {
        return (
            <Textline
                classNames={{
                    container: styles.textline,
                }}
                name="errored"
                value={this.state.errored}
                placeholder="Sample"
                errored={true}
                onChange={this.onChangeForm}
            />
        );
    };

    onChangeForm = (name, value) => {
        const state = this.state;
        state[name] = value;
        this.setState(state);
    };

};
