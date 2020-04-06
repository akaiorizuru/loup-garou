import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { useGame } from '../services/Game';
import Button from '../components/Button';
import {WeatherNight} from '@styled-icons/typicons/WeatherNight';


const NightPage = () => {
  const { game } = useGame();

  return (
  <div> 
    <p>
      C'est la nuit... <WeatherNight size="48"/>
      TODO add actions.
    </p>
  </div>
  );
};

export default NightPage;



