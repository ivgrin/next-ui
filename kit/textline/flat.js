import Component from './core';
import theme from './themes/flat.module.css';

export default (props) => {
    return <Component {...props} theme={theme} />;
};
