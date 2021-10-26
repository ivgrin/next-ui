import React from 'react';
import Section from './index';
import Table from 'app/table';

export default class SectionOptions extends React.Component {

    render() {

        const rows = [];
        this.props.rows.forEach((r) => {
            rows.push({
                name: r[0],
                type: r[1],
                values: r[2],
                default: r[3],
                description: r[4]
            });
        });

        return (
            <Section size="s" name="Options" desc="* - Required Fields" preset="panel">
                <Table
                    preset="options"
                    size="max"
                    cols={['name','type','values','description']}
                    rows={rows}
                />
            </Section>
        );

    }

};
