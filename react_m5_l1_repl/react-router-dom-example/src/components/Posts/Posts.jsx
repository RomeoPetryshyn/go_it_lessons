import { useState, useEffect } from "react";

import PostList from "../../shared/components/PostList/PostList";

import { getPosts } from './../../shared/api/posts';

const Posts = () => {
    const [posts, setPosts] = useState({
        items: [],
        loading: false,
        error: null,
    });
    const [page, setPage] = useState(1);

    useEffect(()=> {
        const fetchPosts = async() => {
            try {
                setPosts(prevPosts => ({
                    ...prevPosts,
                    loading: true,
                }));
                const data = await getPosts(page);
                setPosts(prevPosts => ({
                    ...prevPosts,
                    items: [...prevPosts.items, ...data],
                }))
            } catch (error) {
                setPosts(prevPosts => ({
                    ...prevPosts,
                    error,
                }))
            }
            finally {
                setPosts(prevPosts => ({
                    ...prevPosts,
                    loading: false,
                }))
            }
        };

        fetchPosts()
    }, [setPosts, page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1)
    }

    const {items, loading, error} = posts;

    return (
        <div>
            <h2>Список статей</h2>
            {Boolean(items.length) && <PostList items={items} />}
            {loading && <p>...Loading</p>}
            {error && <p>Posts load fail</p>}
            {Boolean(items.length) && <button onClick={loadMore}>Load more</button>}
        </div>
    )
}

export default Posts;

/*
1. Создать функциональный компонент Posts и 
вставить его в App.
2. Создать состояние с готовыми данными.
3. Создать разметку на основе готовых данных из состояния.
4. Получить данные из бекенда и записать их в состояние:
    4.1. Добавить в состояние loading и error.
    4.2. Написать в разметке вывод сообщения о загрузке и об ошибке запроса.
    4.3. Создать функцию, которая будет запрашивать данные из бекенда 
    (если нет файла, которые запрашивает данные этого типа, создать его и 
    axios-instance с baseURL в нем).
    4.4. Импортировать хук useEffect и вызвать его с пустым массивом зависимостей.
    4.5. Внутри хука useEffect создать функцию fetchPosts, которая отправляет
    запрос, и в зависимости от ответа, изменяет состояние.
    4.6. Вызвать функцию fetchPosts после первого рендера компонента.
*/