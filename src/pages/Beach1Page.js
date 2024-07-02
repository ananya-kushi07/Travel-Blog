import React from 'react';
import { Container } from 'react-bootstrap';

const Beach1Page = () => {
  return (
    <Container>
      <h1>Tannirbhavi Beach</h1>
      <div className="text-center">
        <img 
          src="https://media1.thrillophilia.com/filestore/1tth48njbzvyg46yij093uh2b5a0_1553498696_2.jpg?w=753&h=450&dpr=1.0" 
          alt="Tannirbhavi Beach" 
          className="img-fluid"
        />
      </div>
      <br />
      <p>
        <strong>Tannirbhavi Beach</strong> is the perfect place for peace and nature lovers. Located close to the Gurupura River and Sultan Battery, it offers a serene environment ideal for enjoying sunsets and tranquility.
        <br /><br />
        <strong>Location:</strong> Tannirbhavi Beach, Kasba Bengre, Mangalore, Karnataka.
        <br />
        <strong>Timings:</strong> Monday to Sunday, from 6 am to 10 pm.
        <br />
        <strong>Entry Charges:</strong> Free entry.
      </p>
    </Container>
  );
};

export default Beach1Page;
