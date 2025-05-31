import {Routes, Route} from 'react-router-dom';
import { Header } from './components';
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

const Content = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
`;

const H1 = styled.h1`
  text-align: center;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Footer = () => <footer>Footer</footer>;

export const Blog = () => {
  return (
    <AppWrapper>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<div>Главная</div>} />
          <Route path="/login" element={<div>Логин</div>} />
          <Route path="/register" element={<div>Регистрация</div>} />
          <Route path="/users" element={<div>Пользователи</div>} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/post/:post_id" element={<div>Статья</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
        <i className="fa fa-calendar"></i>
        <H1>Content</H1>
      </Content>
      <Footer />
    </AppWrapper>
  )
}
