import { useSelector } from "react-redux";
import { Error } from "../Error/Error";
import { selectUserRole } from "../../selectors";
import { ERROR } from "../../constants";
import { checkAccess } from "../../utils";

export const PrivateContent = ({children, access, serverError}) => {
  const userRole = useSelector(selectUserRole);

  const accessError = checkAccess(access, userRole) ? null : ERROR[403];

  const errorMessage = serverError || accessError;

  return errorMessage ? <Error errorMessage={errorMessage} /> : children;
}
