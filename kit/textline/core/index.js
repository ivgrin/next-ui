import React from 'react';
import SvgCross from './cross.svg';
import SvgEyeOpen from './eye-open.svg';
import SvgEyeClose from './eye-close.svg';
import styles from './index.module.css';

export default class Textline extends React.Component {

    static defaultProps = {

        theme: null,
        classNames: null,
        className: null,

        name: null,
        value: null,
        type: 'text',
        pattern: null,
        autoComplete: 'off',
        autoFocus: false,
        placeholder: null,
        useNativePlaceholder: false,
        useClear: true,
        useUnravel: true,
        disabled: false,
        errored: false,

        onChange: null,
        onFocus: null,
        onBlur: null,
        onKeyPress: null,
        onKeyDown: null,
        onKeyUp: null,

        inputRef: null,

    };

    state = {
        focused: false,
        autofilled: false,
        unravelled: false,
    };

    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.placeholderRef = React.createRef();
    };

    componentDidMount() {

        const input = this.containerRef.current.querySelector('input');
        input.addEventListener('animationstart', this.onAnimationStart, false);

        setTimeout(() => {
            if (this.ifAutofilled()) {
                this.setState({
                    autofilled: true,
                });
            }
        }, 100);

    };

    componentDidUpdate(prevProps) {

        if (!this.props.value && this.state.autofilled) {
            if (!this.ifAutofilled()) {
                const state = this.state;
                state.autofilled = false;
                this.setState(state);
            }
        }

    };

    render() {
        return (
            <div {...this.getContainerAttrs()}>
                {this.renderValue()}
                {this.renderClear()}
                {this.renderUnravel()}
            </div>
        );
    };

    getContainerAttrs = () => {

        const attrs = {
            className: this.getContainerClassName(),
            ref: this.containerRef,
        };

        const allowed = [
            'id',
            'onClick',
            'style',
        ];

        allowed.forEach((attr) => {
            if (this.props[attr]) {
                attrs[attr] = this.props[attr];
            }
        });

        return attrs;

    };

    getContainerClassName = () => {
        let className = [this._classes('container')];
        if (this.props.placeholder && !this.props.useNativePlaceholder) {
            className.push(this._classes('hasPlaceholder'));
        }
        if (
            (this.props.useClear && this.props.value && this.props.type != 'password')
            ||
            (this.props.useUnravel && this.props.value && this.props.type == 'password')
        ) {
            className.push(this._classes('hasControl'));
        }
        if (this.props.value || this.state.autofilled) {
            className.push(this._classes('filled'));
        } else {
            className.push(this._classes('empty'));
        }
        if (this.props.errored) {
            className.push(this._classes('errored'));
        }
        if (this.state.focused) {
            className.push(this._classes('focused'));
        }
        if (this.props.disabled) {
            className.push(this._classes('disabled'));
        }
        if (this.props.className) {
            className.push(this.props.className);
        }
        return className.join(' ');
    };

    renderValue = () => {
        return (
            <div className={this._classes('value')}>
                {this.renderPlaceholder()}
                {this.renderInput()}
            </div>
        );
    };

    renderPlaceholder = () => {
        if (this.props.placeholder && !this.props.useNativePlaceholder) {
            return (
                <div 
                    className={this._classes('placeholder')}
                    onClick={this.onClickPlaceholder}
                    ref={this.placeholderRef}
                >
                    {this.props.placeholder}
                </div>
            );
        }
    };

    renderInput = () => {
        return (
            <input
                name={this.props.name}
                value={this.props.value !== null ? this.props.value : ""}
                type={this.state.unravelled ? 'text' : this.props.type}
                pattern={this.props.pattern}
                autoComplete={this.props.autoComplete}
                autoFocus={this.props.autoFocus}
                placeholder={this.props.useNativePlaceholder ? this.props.placeholder : null}
                disabled={this.props.disabled}
                {...this.getInputAttrs()}
            />
        );
    };

    getInputAttrs = () => {

        const attrs = {
            className: this._classes('input'),
            ref: this.props.inputRef,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
        };

        const allowed = [
            'onKeyPress',
            'onKeyDown',
            'onKeyUp',
        ];

        allowed.forEach((attr) => {
            if (this.props[attr]) {
                attrs[attr] = this.props[attr];
            }
        });

        return attrs;

    };

    renderClear = () => {
        if (this.props.useClear && this.props.value && this.props.type != 'password') {
            return (
                <button type="button" className={[this._classes('control'), this._classes('clear')].join(' ')} onClick={this.onClear} tabIndex="-1">
                    <SvgCross />
                </button>
            );
        }
    };

    renderUnravel = () => {
        if (this.props.useUnravel && this.props.value && this.props.type == 'password') {
            return (
                <button type="button" className={[this._classes('control'), this._classes('unravel')].join(' ')} onClick={this.onToogleUnravel} tabIndex="-1">
                    {this.state.unravelled && (
                        <SvgEyeClose />
                    ) || (
                        <SvgEyeOpen />
                    )}
                </button>
            );
        }
    };

    ifAutofilled = () => {

        const input = this.containerRef.current.querySelector('input');
        const appearance = getComputedStyle(input, null).getPropertyValue('appearance');

        if (appearance == 'menulist-button') {
            return true;
        } else {
            return false;
        }

    };

    onAnimationStart = ({ animationName }) => {
        switch (animationName) {
            case 'onAutoFillStart':
                return this.onAutoFillStart();
            case 'onAutoFillCancel':
                return this.onAutoFillCancel();
        }
    };

    onAutoFillStart = () => {
        this.setState({
            autofilled: true,
        });
    };

    onAutoFillCancel = () => {
        this.setState({
            autofilled: false,
        });
    };

    onChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange.apply(null, [this.props.name, e.target.value]);
        }
    };

    onClear = () => {
        if (this.props.onChange) {
            this.props.onChange.apply(null, [this.props.name, null]);
        }
    };

    onToogleUnravel = () => {
        const state = this.state;
        state.unravelled = !state.unravelled;
        this.setState(state);
    };

    onFocus = (e) => {

        this.setState({
            focused: true,
        });

        if (this.props.onFocus) {
            this.props.onFocus.apply(null, [this.props.name, e.target.value]);
        }

    };

    onBlur = (e) => {

        this.setState({
            focused: false,
        });

        if (this.props.onBlur) {
            this.props.onBlur.apply(null, [this.props.name, e.target.value]);
        }

    };

    onClickPlaceholder = () => {
        this.placeholderRef.current.parentNode.querySelector('input').focus();
    };

    _classes = (name) => {
        const classNames = [];
        if (styles[name]) {
            classNames.push(styles[name]);
        }
        if (this.props.theme) {
            classNames.push(this.props.theme[name]);
        }
        if (this.props.classNames) {
            classNames.push(this.props.classNames[name]);
        }
        return classNames.join(' ');
    };

};
