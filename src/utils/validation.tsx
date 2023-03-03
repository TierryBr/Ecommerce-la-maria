import { userDataProps } from '@/pages/register';

const validation = ({ name, email, password, cf_password }: userDataProps) => {
  if (!name || !email || !password)
    return 'Por favor adicione todos os campos.';

  if (!validateEmail(email)) return 'Email inválido.';

  if (password.length < 6) return 'A senha deve conter mais de 6 caracteres.';

  if (password !== cf_password) return 'As senhas não coincidem.';
};

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export default validation;
