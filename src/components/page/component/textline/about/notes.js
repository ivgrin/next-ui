import React from 'react';
import SectionNotes from 'app/section/notes';

export default class AboutNotes extends React.Component {

    render() {
        return (
            <SectionNotes
                items={[
                    {
                        text: 'Note1',
                        type: 'new'
                    },
                    {
                        text: 'Note2',
                        type: 'new'
                    },
                ]}
            />
        );
    };

};
