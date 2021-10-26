import React from 'react';
import Section from './index';
import SyntaxHighlighter from 'react-syntax-highlighter';
import trimCode from 'assist/trimCode';
import syntax from './syntax.json';

export default class SectionCode extends React.Component {

    render() {
        return (
            <Section size="s" preset={this.props.component ? 'componentCode' : 'code'} component={true} some={1}>
                <SyntaxHighlighter language={this.props.lang} style={syntax}>
                    {trimCode(this.props.code)}
                </SyntaxHighlighter>
            </Section>
        );
    };

};
