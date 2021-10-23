import PageHome from 'page/home';
import PageDoc from 'page/doc';

export default function Handler(props) {
    switch (props.page) {
        case 'home':
            return <PageHome />;
        default:
            return <PageDoc {...props} />;
    }
};

export async function getServerSideProps({req, res, params, locale}) {

    if (!params.path) {
        return {
            props: {
                page: 'home',
            },
        };
    }

    return {
        props: {
            page: params.path[0],
        },
    };

};