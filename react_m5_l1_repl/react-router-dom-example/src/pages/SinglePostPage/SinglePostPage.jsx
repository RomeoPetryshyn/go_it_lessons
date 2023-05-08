import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

import { getPostById } from "../../shared/api/posts";

const SinglePostPage = () => {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=> {
        const fetchPost = async() => {
            try {
                setLoading(true);
                setError(null);

                const result = await getPostById(id);
                setState(result);
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false)
            }
        };

        fetchPost()
    }, [setState, setLoading, setError, id]);

    const goBack = () => navigate(-1);

    return (
        <div className="container">
            <button onClick={goBack}>Go back</button>
            {loading && <p>...Loading</p>}
            {state && (<>
                <h1 className="page-title">{state.title}</h1>
                <p>{state.body}</p>
            </>)}
        </div>
    )
}

export default SinglePostPage;