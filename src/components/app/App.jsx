import { DivStyled } from './AppStyled';

import { Suspense, lazy, useEffect } from 'react';
import { LoaderSpinner } from 'components/Loader/Loader';
import { Link, Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk, refreshUserThunk } from 'redux/userThunks';

const HomePage = lazy(() => import('../../Page/HomePage'));
const LogInPage = lazy(() => import('../../Page/LogInPage'));
const RegisterPage = lazy(() => import('../../Page/RegisterPage'));
const ContactsPage = lazy(() => import('../../Page/ContactsPage'));

function App() {
  const userData = useSelector(state => state.user.userData);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  
  console.log(`user data після перезавантаження APP.jsx: `, userData);
  console.log(`token після синхроніхації STATE та LOCAL STORAGE :`, token);

  useEffect(() => {
    if(!token) return;
    dispatch(refreshUserThunk());
  }, [dispatch, token]);


  const handleLogOut = () =>{
    dispatch(logOutThunk ());
}

  return (
    <DivStyled>
      <header>
        <nav>
          <Link to="/home">home</Link>
          {userData ? (
            <>
              <Link to="/contacts">Contacts</Link>
              <div>
                <p>акаунт <b>{userData.name}</b></p>
                <button onClick={handleLogOut} type="button">Log out</button>
              </div>
              
            </>
          ) : (
            <>
              <Link to="/login">log in</Link>
              <Link to="/registration">sign in</Link>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<LoaderSpinner />}>
          <Routes>
            <Route path="/home" element={<HomePage />}>
              <Route path="login" element={<LogInPage />} />
              <Route path="registration" element={<RegisterPage />} />
              <Route path="contacts" element={<ContactsPage />} />
            </Route>
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LogInPage />}/>
              <Route path="registration" element={<RegisterPage />}>
            </Route>
            <Route path="/registration" element={<RegisterPage />}>
              <Route path="login" element={<LogInPage />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </DivStyled>
  );
}

export default App;
