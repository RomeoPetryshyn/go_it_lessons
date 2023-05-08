import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="container">
            <h1 className="page-title">Home page</h1>
            <Link to={`/posts/1`}>Post 1</Link>
        </div>
    )
}

export default HomePage;