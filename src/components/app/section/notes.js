import React from 'react';
import Section from './index';
import CheckList from 'app/checklist';

export default class SectionNotes extends React.Component {

    render() {

        if (!this.props.items) {
            return '';
        }

        return (
            <Section size="xs" name="@ Notes:">
                <CheckList
                    items={this.props.items}
                />
            </Section>
        );

    };

};
