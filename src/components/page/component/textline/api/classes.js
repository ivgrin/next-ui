import React from 'react';
import SectionClasses from 'app/section/classes';

export default class ApiClasses extends React.Component {

    render() {
        return (
            <SectionClasses
                rows={[
                    [
                        'container',
                        ['hasPlaceholder', 'hasControl', 'filled', 'focused', 'errored', 'disabled'],
                        'Root component class',
                    ],
                    [
                        'value',
                        [],
                        'Wrapper for Input + Placeholder',
                    ],
                    [
                        'input',
                        [],
                        'Native Input element',
                    ],
                    [
                        'placeholder',
                        [],
                        'Custom Placeholder element',
                    ],
                    [
                        'control',
                        ['clear', 'unravel'],
                        'Buttons',
                    ],
                ]}
            />
        );
    };

};
