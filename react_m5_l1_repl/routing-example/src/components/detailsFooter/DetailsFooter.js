import { useParams, useLocation, useSearchParams } from 'react-router-dom';

function DetailsFooter() {
    const location = useLocation();
    console.log({ location });

    return (
        <div>Details page footer</div>
    )
}

export default DetailsFooter;