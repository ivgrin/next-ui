import React from 'react';
import SectionConfig from 'app/section/config';

export default class ApiConfig extends React.Component {

    render() {
        return (
            <SectionConfig
                rows={[
                    [
                        '--next-ui-textline-gap',
                        'var(--palette-gap-form)',
                    ],
                    [
                        '--next-ui-textline-width',
                        'var(--palette-width-form)',
                    ],
                    [
                        '--next-ui-textline-height',
                        'var(--palette-height-form)',
                    ],
                    ['',''],
                    [
                        '--next-ui-textline-color',
                        'var(--palette-color-text)',
                    ],
                    [
                        '--next-ui-textline-font-weight',
                        '600',
                    ],
                    [
                        '--next-ui-textline-font-size',
                        'var(--palette-font-size-text)',
                    ],
                    [
                        '--next-ui-textline-background-color',
                        'var(--palette-color-form-background)',
                    ],
                    [
                        '--next-ui-textline-border-width',
                        '1px',
                    ],
                    [
                        '--next-ui-textline-border-color',
                        'var(--palette-color-form-border)',
                    ],
                    [
                        '--next-ui-textline-border-radius',
                        'var(--palette-radius-form)',
                    ],
                    ['',''],
                    [
                        '--next-ui-textline-placeholder-color',
                        'var(--palette-color-text-placeholder)',
                    ],
                    [
                        '--next-ui-textline-placeholder-font-weight',
                        '500',
                    ],
                    ['',''],
                    [
                        '--next-ui-textline-control-gap',
                        'var(--palette-gap-form-control)',
                    ],
                    [
                        '--next-ui-textline-control-color',
                        'var(--next-ui-textline-color)',
                    ],
                    [
                        '--next-ui-textline-clear-size',
                        '10px',
                    ],
                    [
                        '--next-ui-textline-unravel-size',
                        '16px',
                    ],
                    ['',''],
                    [
                        '--next-ui-textline-hovered-background-color',
                        'var(--next-ui-textline-background-color)',
                    ],
                    [
                        '--next-ui-textline-hovered-border-color',
                        'var(--palette-color-form-border-hovered)',
                    ],
                    [
                        '--next-ui-textline-hovered-shadow',
                        'var(--next-ui-textline-shadow)',
                    ],
                    ['',''],
                    [
                        '--next-ui-textline-focused-color',
                        'var(--next-ui-textline-color)',
                    ],
                    [
                        '--next-ui-textline-focused-background-color',
                        'var(--next-ui-textline-background-color)',
                    ],
                    [
                        '--next-ui-textline-focused-border-color',
                        'var(--palette-color-primary)',
                    ],
                    [
                        '--next-ui-textline-focused-shadow',
                        '0 0 0 4px rgba(var(--palette-color-primary-rgb), 0.2)',
                    ],
                    [
                        '--next-ui-textline-focused-placeholder-color',
                        'var(--palette-color-text-placeholder)',
                    ],
                    [
                        '--next-ui-textline-focused-control-color',
                        'var(--next-ui-textline-color)',
                    ],
                    ['',''],
                    [
                        '--next-ui-textline-errored-color',
                        'var(--palette-color-error)',
                    ],
                    [
                        '--next-ui-textline-errored-background-color',
                        'var(--next-ui-textline-background-color)',
                    ],
                    [
                        '--next-ui-textline-errored-border-color',
                        'var(--palette-color-error)',
                    ],
                    [
                        '--next-ui-textline-errored-shadow',
                        'var(--next-ui-textline-shadow)',
                    ],
                    [
                        '--next-ui-textline-errored-placeholder-color',
                        'var(--palette-color-text-placeholder)',
                    ],
                    [
                        '--next-ui-textline-errored-control-color',
                        'var(--next-ui-textline-color)',
                    ],
                ]}
            />
        );
    };

};
