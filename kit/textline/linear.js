import Component from './core';
import theme from './themes/linear.module.css';

export default (props) => {
    return <Component {...props} theme={theme} />;
};
