## План заняття

0. Kahoot i питання.
1. Розглянемо приклад аплікації з реалізованим роутингом
2. Побудуємо власну аплікацію з роутингом по кроках
   1. Створюємо реакт аплікацію через == npm init react-app routing-example ==
   2. Встановлюємо роутер v6 через == npm install react-router-dom@6 ==
   3. Додаємо BrowserRouter в корінний index.js файл
   4. Створюємо компоненти сторінок які ми будемо показувати в навігації
      1. mkdir src/components
      2. mkdir src/components/home
      3. mkdir src/components/about
      4. mkdir src/components/posts
      5. mkdir src/components/header
      5. Створюємо власне js файли для наших компонентів з мінімальною базовою розміткою
   5. Оголошуємо (ініціалізуємо) наші роути в App.js через <Routes> ...<Route>... </Routes> (до прикладу - <Route path="/" element={ <Home/> } />)
   6. В нашому Header компоненті додаємо базову розмітку навігації, що включає кожну Link (до прикладу - <Link to="/" >  Home  </Link>)
   7. Наш Header компонент додаємо в App.js для відображення навігації
   8. Додамо Not Found сторінку яка відображається коли користувач переходить на неіснуючий роут
      1. mkdir src/pages
      2. mkdir src/pages/notFound
      2. Створимо власне js файл для нашого Not Found компоненту з базовою розміткою
      3. Додамо нашу NotFound сторінку в Роути нашого App.js (до прикладу - <Route path='*' element={ <NotFound/> }/>)
   9. Додамо компоненти Product i ProductDetails, де ProductDetails буде працювати по id продукту
      1. Додаємо роут <Route path="/products/:productId" element={<ProductDetails />} />
      2. Дістаємо productId через хук useParams, до прикладу - const { productId } = useParams();
   10. Розглянемо хук useNavigate https://reactrouter.com/en/main/hooks/use-navigate . Спробуємо використати його додавши кнопку в About компоненті яка буде робити переадресацію на Home
       1. useNavigate хук - повертає функцію для редіректі. Отримаємо цю функцію (до прикладу - const navigate = useNavigate();)
       2. зреалізуємо кнопку для переходу на Home та при натисканні будемо переходити туди (до прикладу - navigate('/'))
