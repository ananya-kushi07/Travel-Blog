import React from 'react';
import { Container } from 'react-bootstrap';

const Temple2Page = () => {
  return (
    <Container>
      <h1>Kukke Subrahmanya Temple</h1>
      <div className="text-center">
        <img 
          src="https://media1.thrillophilia.com/filestore/08nmpqygiwxqgt074tz1kqntow8s_1553502961_25.jpg?w=753&h=450&dpr=1.0" 
          alt="Kukke Subrahmanya Temple" 
          className="img-fluid"
        />
      </div>
      <br />
      <p>
        The village of Subramanya in the state of Karnataka is home to the stunning Kukke Subramanya Temple, located in the Western Ghats of the country.
        <br /><br />
        The temple is dedicated to Lord Subramanya, also known as Lord Karthik, who is the son of Lord Shiva. The temple is surrounded by beautiful gardens and forests, making it picturesque.
        <br /><br />
        Daily rituals and pujas are conducted in the temple, along with special homams and pujas for particular problems in the horoscope. It is one of the favorite tourist places in Mangalore city that you must visit.
        <br /><br />
        <strong>Location:</strong> Mardala, Sullia, Subramanya, Karnataka.
        <br />
        <strong>Timings:</strong> Everyday from 6 am to 9 pm.
        <br />
        <strong>Entry Charges:</strong> Entry is free.
      </p>
      <div style={{ width: '100%', height: '300px', border: '1px solid #ccc', marginTop: '20px' }}>
        <iframe
          title="Kukke Subrahmanya Temple Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.174539606572!2d75.61604131482238!3d12.669892891086027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5069c7072df0b%3A0x4e35009daec3d259!2sKukke%20Shri%20Subrahmanya%20Temple!5e0!3m2!1sen!2sin!4v1624940615652!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Temple2Page;
