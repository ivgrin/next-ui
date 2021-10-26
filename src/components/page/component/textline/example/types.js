import React from 'react';
import SectionExample from 'app/section/example';
import Textline from 'kit/textline';
import styles from './styles.module.css';

export default class ExampleTypes extends React.Component {

    state = {
        text: null,
        password: null,
    };

    render() {
        return (
            <SectionExample
                name="Types"
                rows={[
                    [
                        'text',
                        this.renderText(),
                    ],
                    [
                        'password',
                        this.renderPassword(),
                    ],
                ]}
            />
        );
    };

    renderText = () => {
        return (
            <Textline
                classNames={{
                    container: styles.textline,
                }}
                name="text"
                value={this.state.text}
                type="text"
                onChange={this.onChangeForm}
            />
        );
    };

    renderPassword = () => {
        return (
            <Textline
                classNames={{
                    container: styles.textline,
                }}
                name="password"
                value={this.state.password}
                type="password"
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
