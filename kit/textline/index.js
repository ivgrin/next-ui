import React from 'react';
import SvgCross from './cross.svg';
import SvgEyeOpen from './eye-open.svg';
import SvgEyeClose from './eye-close.svg';
import styles from './index.module.css';

export default class Textline extends React.Component {

    static defaultProps = {
        type: 'text',
        name: null,
        value: null,
        placeholder: null,
        nativePlaceholder: null,
        pattern: null,
        preset: null,
        disabled: false,
        autocomplete: 'off',
        error: false,
        icon: null,
        before: null,
        after: null,
        skipClear: false,
        skipUnravel: false,
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
            <div {...this._attrs()} ref={this.containerRef}>
                {this.renderBefore()}
                {this.renderIcon()}
                {this.renderValue()}
                {this.renderClear()}
                {this.renderUnravel()}
                {this.renderAfter()}
            </div>
        );
    };

    _attrs = () => {

        const allowed = [
            'id',
            'onClick',
            'style'
        ];

        let attrs = {
            className: this._class()
        };

        allowed.forEach((attr) => {
            if (this.props[attr]) {
                attrs[attr] = this.props[attr];
            }
        });

        return attrs;

    };

    _inputAttrs = () => {

        const allowed = [
            'onFocus',
            'onKeyPress',
            'onKeyDown',
            'onKeyUp',
            'autoFocus',
        ];

        let attrs = {
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
        };

        allowed.forEach((attr) => {
            if (this.props[attr]) {
                attrs[attr] = this.props[attr];
            }
        });

        return attrs;

    };

    _class = () => {
        let className = [styles.container];
        console.log('theme', this.props.theme);
        if (this.props.theme) {
            className.push(this.props.theme.container);
        }
        console.log('classNames', this.props.classNames);
        if (this.props.classNames && this.props.classNames.container) {
            className.push(this.props.classNames.container);
        }
        if (this.props.preset) {
            className.push(styles[this.props.preset + 'Preset']);
        }
        if (this.props.placeholder) {
            className.push(styles.hasPlaceholder);
        }
        if (this.state.focused) {
            className.push(styles.focused);
        }
        if (this.props.value || this.state.autofilled) {
            className.push(styles.filled);
        }
        if (this.props.disabled) {
            className.push(styles.disabled);
        }
        if (this.props.error) {
            className.push(styles.error);
        }
        if (this.props.className) {
            className.push(this.props.className);
        }
        return className.join(' ');
    };

    renderBefore = () => {
        if (this.props.before) {
            return (
                <div className={[styles.before, this.props.beforeClassName].join(' ')}>
                    {this.props.before}
                </div>
            );
        }
    };

    renderIcon = () => {
        if (this.props.icon) {
            return (
                <div className={[styles.icon, this.props.iconClassName].join(' ')}>
                    {this.props.icon}
                </div>
            );
        }
    };

    renderValue = () => {
        return (
            <div className={styles.value}>
                {this.props.placeholder && (
                    <div 
                        className={[styles.placeholder, this.props.placeholderClassName].join(' ')}
                        onClick={this.onClickPlaceholder}
                        ref={this.placeholderRef}
                    >
                        {this.props.placeholder}
                    </div>
                )}
                <input
                    className={styles.input}
                    type={this.state.unravelled ? 'text' : this.props.type}
                    name={this.props.name}
                    value={this.props.value !== null ? this.props.value : ""}
                    disabled={this.props.disabled}
                    autoComplete={this.props.autocomplete}
                    autoFocus={this.props.autofocus}
                    pattern={this.props.pattern}
                    placeholder={this.props.nativePlaceholder}
                    ref={this.props.inputRef}
                    {...this._inputAttrs()}
                />
            </div>
        );
    };

    renderClear = () => {
        if (!this.props.skipClear && this.props.value && this.props.type != 'password') {
            return (
                <button type="button" className={[styles.clear, this.props.clearClassName].join(' ')} onClick={this.onClear} tabIndex="-1">
                    <SvgCross />
                </button>
            );
        }
    };

    renderUnravel = () => {
        if (!this.props.skipUnravel && this.props.value && this.props.type == 'password') {
            return (
                <button type="button" className={[styles.unravel, this.props.unravelClassName].join(' ')} onClick={this.onToogleUnravel} tabIndex="-1">
                    {this.state.unravelled && (
                        <SvgEyeClose />
                    ) || (
                        <SvgEyeOpen />
                    )}
                </button>
            );
        }
    };

    renderAfter = () => {
        if (this.props.after) {
            return (
                <div className={[styles.after, this.props.afterClassName].join(' ')}>
                    {this.props.after}
                </div>
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

};
