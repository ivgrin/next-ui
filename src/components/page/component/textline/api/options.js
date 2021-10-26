import React from 'react';
import SectionOptions from 'app/section/options';

export default class ApiOptions extends React.Component {

    render() {
        return (
            <SectionOptions
                rows={[
                    [
                        'theme',
                        'object',
                        [],
                        '',
                        'CSS Modules styles',
                    ],
                    [
                        'classNames',
                        'object',
                        [],
                        '',
                        'CSS Modules styles',
                    ],
                    [
                        'className',
                        'object',
                        [],
                        '',
                        'CSS Modules style for container',
                    ],
                    [
                        'name',
                        'string',
                        [],
                        '',
                        'Native Input name property',
                    ],
                    [
                        'value',
                        'string',
                        [],
                        '',
                        'Native Input value property',
                    ],
                    [
                        'type',
                        'string',
                        ['text','email','...'],
                        'text',
                        'Native Input type property',
                    ],
                    [
                        'pattern',
                        'string',
                        [],
                        '',
                        'Native Input pattern property',
                    ],
                    [
                        'autoComplete',
                        'string',
                        ['off', 'on'],
                        'off',
                        'Native Input autoComplete property',
                    ],
                    [
                        'autoFocus',
                        'string',
                        ['true', 'false'],
                        'false',
                        'Native Input autoFocus property',
                    ],
                    [
                        'placeholder',
                        'string',
                        [],
                        '',
                        'Placeholder',
                    ],
                    [
                        'useNativePlaceholder',
                        'boolean',
                        ['true', 'false'],
                        'false',
                        'Switch between native and animated placeholders',
                    ],
                    [
                        'useClear',
                        'boolean',
                        ['true', 'false'],
                        'true',
                        'Display "Clear Input" controll',
                    ],
                    [
                        'useUnravel',
                        'boolean',
                        ['true', 'false'],
                        'true',
                        'Display "View Password" controll',
                    ],
                    [
                        'disabled',
                        'bool',
                        ['true', 'false'],
                        'false',
                        'Is field in disabled state',
                    ],
                    [
                        'errored',
                        'bool',
                        ['true', 'false'],
                        'false',
                        'Is field in error state',
                    ],
                ]}
            />
        );
    };

};
