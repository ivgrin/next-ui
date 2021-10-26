import React from 'react';
import Section from './index';
import Table from 'app/table';

export default class SectionExample extends React.Component {

    render() {

        var rows = [];
        this.props.rows.forEach((r) => {
            rows.push({
                case: r[0],
                preview: r[1]
            });
        });

        return (
            <Section size="s" name={this.props.name} preset="panel">
                {this.props.desc && (
                    <div>{this.props.desc}</div>
                )}
                <Table
                    preset="example"
                    size="max"
                    cols={['case','preview']}
                    rows={rows}
                />
            </Section>
        );

    };

};
