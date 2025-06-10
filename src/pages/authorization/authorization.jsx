import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { Input, Button, H1, AuthError } from '../../components';
import { useResetForm } from '../../hooks';
import { Link, Navigate } from 'react-router-dom';
import { setUser } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';

const authFormSchema = yup.object().shape({
  login: yup.string()
    .required('Заполните логин')
    .matches(/^\w+$/, 'Допускаются только буквы и цифры')
    .min(3, 'Логин должен состоять минимум из 3 символов')
    .max(15, 'Логин должен состоять максимум из 15 символов'),
  password: yup.string()
    .required('Заполните пароль')
    .matches(/^[\w#%]+$/,
      'Неверный формат пароля. Допускаются буквы и цифры, а также знаки # и %.'
    )
    .min(6, 'Пароль должен состоять минимум из 6 символов')
    .max(20, 'Пароль должен состоять максимум из 20 символов'),
});

const StyledRegisterLink = styled(Link)`
  text-align: center;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export const AuthorizationLayout = ({className}) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormSchema),
  });

  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();

  useResetForm(reset);

  const roleId = useSelector(selectUserRole);

  const onSubmit = ({login, password}) => {
    server.authorize(login, password)
      .then(({error, res}) => {
        if (error) {
          setServerError(`Ошибка запроса: ${error}`);
        }

        dispatch(setUser(res));

        sessionStorage.setItem('userData', JSON.stringify(res));
      });
  }

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/"></Navigate>
  }

  return (
    <div className={className}>
      <H1>Авторизация</H1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Логин" {...register('login', {
          onChange: () => setServerError(null)
        })} />

        <Input type="password" placeholder="Пароль" {...register('password', {
          onChange: () => setServerError(null)
        })} />

        <Button type="submit" disabled={formError}>Войти</Button>

        {errorMessage && <AuthError>{errorMessage}</AuthError>}

        <StyledRegisterLink to="/register">Регистрация</StyledRegisterLink>
      </form>
    </div>
  )
}

export const Authorization = styled(AuthorizationLayout)`
  display: grid;
  grid-template-columns: 100%;
  gap: 10px;
  justify-items: center;

  & > form {
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
    width: 260px;
  }
`;
