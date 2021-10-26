import React, {Fragment} from 'react';
import HtmlHead from 'next/head';
import Section from 'app/section';

import AboutDesc from './about/desc';
import AboutNotes from './about/notes';

import ApiThemes from './api/themes';
import ApiOptions from './api/options';
import ApiHandlers from './api/handlers';
import ApiClasses from './api/classes';
import ApiConfig from './api/config';

import UsageCode from './usage/code';

import ThemeDefault from './theme/default';
import ThemeFlat from './theme/flat';
import ThemeLinear from './theme/linear';

import ExampleTypes from './example/types';

export default class PageTextline extends React.Component {

    render() {
        return (
            <Fragment>
                {this.renderMeta()}
                {this.renderContent()}
            </Fragment>
        );
    };

    renderMeta = () => {
        return (
            <HtmlHead>
                <title>Next UI - Textline</title>
            </HtmlHead>
        );
    };

    renderContent = () => {
        return (
            <Section size="l" name="Textline">
                <Section size="m" preset="quote">
                    <AboutDesc/>
                    <AboutNotes/>
                </Section>
                <Section size="m" name="Usage">
                    <UsageCode/>
                </Section>
                <Section size="m" name="Themes">
                    <ThemeDefault />
                    <ThemeFlat />
                    <ThemeLinear />
                </Section>
                <Section size="m" name="Examples">
                    <ExampleTypes />
                </Section>
                <Section size="m" name="API">
                    <ApiThemes />
                    <ApiOptions />
                    <ApiHandlers />
                    <ApiClasses />
                    <ApiConfig />
                </Section>
            </Section>
        );
    };

};
