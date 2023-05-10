## План заняття

1. Kahoot i питання.
2. Розглянемо що таке програмна навігація. В нашому додатку, на сторінці NotFound додамо редірект при натисканні на кнопку. (replace)
3. Додамо приклад переадресації на домашню сторінку за допомогою компонента <Navigate> та роботою зі стейт
4. Додамо приклад Login сторінки
   1. Створимо Login сторінку (page)
   2. Додамо цю Login сторінку до наших роутів через <Route>
   3. В наш App компонент додамо стейт щоб перевіряти чи користувач isLoggedIn і хендлер для зміни стейту який будемо прокидувати в Login
      1. setIsLoggedIn(true);
      2. navigate('/', {replace: true});
   4. При натистанні на Login - будемо викликати пропсу-хендлер яка міняти стейт isLoggedIn нашого App
   5. В нашому App зреалізуємо перевірку і коли юзер не залогінений - показуємо виключно сторінку login
   6. Додамо ProtectedRoute
      1. https://www.robinwieruch.de/react-router-private-routes/ Створимо компонент ProtectedRoute
         const ProtectedRoute = ({ isLoggedIn, children }) => {
            if (!isLoggedIn) {
               return <Navigate to="/login" replace />;
            }
            return children;
         };
      2. Захистимо один з наших роутів нашим ProtectedRoute
         <Route path='/' element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
                 <Home />
            </ProtectedRoute>
         }/>
5. Швиденько розглянемо як нам дістати параметри з рядка запиту використовуючи useSearchParams
   1. В компоненті ProductDetails реалізуємо інпут для вводу type
      <input
         type="text"
         value={type}
         onChange={e => setSearchParams({ type: e.target.value })}
      />
   2. Дістанемо type через const [searchParams, setSearchParams] = useSearchParams(); const type = searchParams.get("type");
6. Розглянемо на прикладі ProductDetails що таке location: const location = useLocation(); Прокинемо стейт через <Link state={{test: 'test'}}

