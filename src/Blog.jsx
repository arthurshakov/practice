import {Routes, Route} from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registration, Users } from './pages';
import styled from 'styled-components';

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
  return (
    <AppWrapper>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<div>Главная</div>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/post/:post_id" element={<div>Статья</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Page>
      <Footer />
    </AppWrapper>
  )
}
