import React from 'react';
import Section from './index';
import Table from 'app/table';

export default class SectionHandlers extends React.Component {

    render() {

        var rows = [];
        this.props.rows.forEach((r) => {
            rows.push({
                name: r[0],
                arguments: r[1],
                description: r[2]
            });
        });

        return (
            <Section size="s" name="Handlers" desc="* - Required Fields" preset="panel">
                <Table
                    preset="handlers"
                    size="max"
                    cols={['name','arguments','description']}
                    rows={rows}
                />
            </Section>
        );

    };

};
