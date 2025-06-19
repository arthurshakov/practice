import { Error } from "../Error/Error";

export const Content = ({children, errorMessage}) =>
  errorMessage ? <Error errorMessage={errorMessage} /> : children;
