import PageComponent from 'page/component';

export default function Handler(props) {
    return <PageComponent {...props} />;
};

export async function getServerSideProps({req, res, params, locale}) {
    return {
        props: {
            componentName: params.componentName,
        },
    };
};