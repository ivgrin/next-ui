import React from 'react';
import SectionCode from 'app/section/code';

export default class UsageCode extends React.Component {

    render() {

        const code = `<Textline 
            type="text"
            name="name"
            value={value}
            placeholder="Enter text here..."
            onChange={onChange}
        />`;

        return (
            <SectionCode
                lang="jsx"
                code={code}
                component={true}
            />
        );
        
    };

};
