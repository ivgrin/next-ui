import React from 'react';
import Section from './index';
import Table from 'app/table';

export default class SectionClasses extends React.Component {

    render() {

        const rows = [];
        this.props.rows.forEach((r) => {
            rows.push({
                name: r[0],
                modifiers: r[1],
                description: r[2]
            });
        });

        return (
            <Section size="s" name="Classes" preset="panel">
                <Table
                    preset="classes"
                    size="max"
                    cols={['name','modifiers','description']}
                    rows={rows}
                />
            </Section>
        );

    }

};
