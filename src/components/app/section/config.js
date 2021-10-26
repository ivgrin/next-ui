import React from 'react';
import Section from './index';
import Table from 'app/table';

export default class SectionConfig extends React.Component {

    render() {

        const rows = [];
        this.props.rows.forEach((r) => {
            rows.push({
                name: r[0],
                default: r[1],
            });
        });

        return (
            <Section size="s" name="Config" preset="panel">
                <Table
                    preset="config"
                    size="max"
                    cols={['name','default']}
                    rows={rows}
                />
            </Section>
        );

    }

};
