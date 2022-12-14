import React, { useState } from 'react';
import { Input, Button } from '../components';
import { useAuth } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { ROUTES_CONSTANTS } from './routes';

export const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nickname: '',
    email: '',
    verEmail: '',
  });

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handlerSubmit = async () => {
    const res = await createUser(user);
    navigate(ROUTES_CONSTANTS.LOGIN)
    console.log(res);
  };

  return (
    <div className="flex justify-center items-center p-12">
      <div className="border flex border-gray-400 rounded-lg p-14 bg-white flex-col h-96 justify-around space-y-6">
        <h3 className="text-center">REGISTER</h3>
        <Input label="Nickname" name="nickname" onChange={onChange} />
        <Input label="Email" name="email" onChange={onChange} />
        <Input label="Confirmation email" name="verEmail" onChange={onChange} />
        <Button onClick={handlerSubmit}>CREATE USER</Button>
      </div>
    </div>
  );
};
