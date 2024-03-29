import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <AvatarInput name="avatar_id" />

          <Input name="name" placeholder="Nome Completo" />
          <Input name="email" placeholder="Seu email" />

          <hr />

          <Input
            type="password"
            name="oldPassword"
            placeholder="Sua senha antiga"
          />
          <Input type="password" name="password" placeholder="Sua senha nova" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha nova"
          />

          <button type="submit"> Atualizar perfil</button>
        </Form>

        <button type="button" onClick={handleSignOut}>
          Sair da sua conta
        </button>
      </Container>
    </>
  );
}

export default Profile;
