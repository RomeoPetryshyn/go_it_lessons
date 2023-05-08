import {Routes, Route} from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import PostsPage from './pages/PostsPage/PostsPage';
import MyBooksPage from './pages/MyBooksPage/MyBooksPage';
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/my-books" element={<MyBooksPage />} />
            <Route path="/posts/:id" element={<SinglePostPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default UserRoutes;