import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
  
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

    return (
        <section className='notFound'>
          <h2 className='notFound__title'>404</h2>
          <p className='notFound__subtitle'>Not Found</p>
          <button
          type="button"
          className='notFound__back link '
          onClick={goBack}>Go back</button>
        </section>
    );
}

export default NotFound;