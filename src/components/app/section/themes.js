import React from 'react';
import Section from './index';
import Table from 'app/table';
import SyntaxHighlighter from 'react-syntax-highlighter';
import syntax from './syntax.json';

export default class SectionThemes extends React.Component {

    render() {

        const rows = [];
        this.props.rows.forEach((r) => {
            rows.push({
                name: r[0],
                import: (
                    <SyntaxHighlighter language="javascript">
                        {r[1]}
                    </SyntaxHighlighter>
                ),
            });
        });

        return (
            <Section size="s" name="Themes" preset="panel">
                <Table
                    preset="themes"
                    size="max"
                    cols={['name','import']}
                    rows={rows}
                />
            </Section>
        );

    }

};
