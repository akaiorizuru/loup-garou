import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { useGame } from '../services/Game';
import Button from '../components/Button';
import {Dizzy} from '@styled-icons/boxicons-solid/Dizzy';
import styled from 'styled-components';

const IconDeath = styled(Dizzy)`
  opacity= 0.8;
`;

const DeadPage = () => {
  const { user } = useSession();
  const { game } = useGame();

  const gameUser = game.users.find(u => u.name === user.userName );

  return (
  <div> 
    Oh non... Vous êtes mort(e)...<IconDeath size="48"/> Quelle injustice !
  </div>
  );
};

export default DeadPage;
