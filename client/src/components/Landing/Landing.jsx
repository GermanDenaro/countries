import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing'>
      <Link to='/home'>
        <button className='btn'>Entrar</button>
      </Link>
    </div>
  );
};

export default Landing;
