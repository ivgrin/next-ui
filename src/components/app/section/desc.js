import React from 'react';
import Section from './index';

export default class SectionDesc extends React.Component {

    render() {
        return (
            <Section size="xs" preset="strong">
                {this.props.children}
            </Section>
        );
    }

};
