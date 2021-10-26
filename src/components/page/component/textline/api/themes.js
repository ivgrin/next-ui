import React from 'react';
import SectionThemes from 'app/section/themes';

export default class ApiThemes extends React.Component {

    render() {
        return (
            <SectionThemes
                rows={[
                    [
                        'default',
                        "import Textline from 'next-ui/textline';",
                    ],
                    [
                        'flat',
                        "import Textline from 'next-ui/textline/flat';",
                    ],
                    [
                        'linear',
                        "import Textline from 'next-ui/textline/linear';",
                    ],
                ]}
            />
        );
    };

};
