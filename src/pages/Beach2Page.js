import React from 'react';
import { Container } from 'react-bootstrap';

const Beach2Page = () => {
  return (
    <Container>
      <h1>Panambur Beach</h1>
      <div className="text-center">
        <img 
          src="https://media1.thrillophilia.com/filestore/k98azlcz3ptnhlk23l7ulr5l823f_1553500978_13.jpg?w=753&h=450&dpr=1.0" 
          alt="Panambur Beach" 
          className="img-fluid"
        />
      </div>
      <br />
      <p>
        <strong>Panambur Beach</strong> is located close to New Mangalore Port Trust and offers a serene environment with brown and golden sand. It's known for its cleanliness and is one of the popular beaches in Mangalore.
        <br /><br />
        You can enjoy adventurous water sports, sunbathe, and witness stunning sunset views here. The beach is a must-visit for its vibrant atmosphere and scenic beauty.
        <br /><br />
        <strong>Location:</strong> Panambur Beach, NH-66, close to New Mangalore Port Trust, Mangalore.
        <br />
        <strong>Timings:</strong> Open from 9 am to 7 pm daily.
        <br />
        <strong>Entry Charges:</strong> Free entry.
      </p>
      {/* Include your compact map here */}
      <div style={{ width: '100%', height: '300px', border: '1px solid #ccc', marginTop: '20px' }}>
        <iframe
          title="Panambur Beach Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2920523191955!2d74.79966181482262!3d12.948982518757206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3524b03f5c3f3%3A0x350c7e97b2b1b057!2sPanambur%20Beach!5e0!3m2!1sen!2sin!4v1624942086177!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Beach2Page;
