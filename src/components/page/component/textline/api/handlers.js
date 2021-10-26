import React from 'react';
import SectionHandlers from 'app/section/handlers';

export default class ApiHandlers extends React.Component {

    render() {
        return (
            <SectionHandlers
                rows={[
                    [
                        'onChange',
                        ['name, value'],
                        'Triggers when value changes',
                    ],
                    [
                        'onFocus',
                        [],
                        'Native Input onFocus event',
                    ],
                    [
                        'onBlur',
                        [],
                        'Native Input onBlur event',
                    ],
                    [
                        'onKeyPress',
                        [],
                        'Native Input onKeyPress event',
                    ],
                    [
                        'onKeyDown',
                        [],
                        'Native Input onKeyDown event',
                    ],
                    [
                        'onKeyUp',
                        [],
                        'Native Input onKeyUp event',
                    ],
                ]}
            />
        );
    };

};
