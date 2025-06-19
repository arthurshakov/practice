import {Routes, Route} from 'react-router-dom';
import { Error, Header, Footer, Modal } from './components';
import { Authorization, Registration, Users, Post, Main } from './pages';
import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { ERROR } from './constants';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
`;

const Page = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
`;

const H1 = styled.h1`
  text-align: center;
`;

const H2 = styled.h2`
  text-align: center;
`;

export const Blog = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem('userData');

    if (!currentUserDataJSON) {
      return;
    }

    const currentUserData = JSON.parse(currentUserDataJSON);

    dispatch(setUser({
      ...currentUserData,
      roleId: Number(currentUserData.roleId),
    }));
  }, [dispatch]);

  return (
    <AppWrapper>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/edit" element={<Post />} />
          <Route path="*" element={<Error errorMessage={ERROR[404]} />} />
        </Routes>
      </Page>
      <Footer />
      <Modal />
    </AppWrapper>
  )
}
