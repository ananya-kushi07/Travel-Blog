import React from 'react';
import { Container } from 'react-bootstrap';

const Temple1Page = () => {
  return (
    <Container>
      <h1>Kudroli Gokarnanath Temple</h1>
      <div className="text-center">
        <img 
          src="https://media1.thrillophilia.com/filestore/hbyesuouzbriov3uucdicj3vmxiq_img-2.jpg?w=753&h=450&dpr=1.0" 
          alt="Kudroli Gokarnanath Temple" 
          className="img-fluid"
        />
      </div>
      <br />
      <p>
        <strong>Gokarnath</strong>, the most age-old temple built in the year 1912, is located in the center of the city. A dedicated temple to Lord Shiva that attracts many devotees throughout the day, month, and year. It is one of the best places to visit in Mangalore and a popular attraction of the city too.
        <br /><br />
        The temple counts no caste or creed, and you have to be a human being to step inside the temple. Never miss visiting the temple during Navratri times, as you will be left mesmerized. The decorations, style, and the gigantic structure never fail to impress, giving you a serene and relaxed mood throughout your trip.
        <br /><br />
        <strong>Location:</strong> Kudroli Gokarnath Temple is situated in Kudroli, from Hampankatta, in Mangalore city.
        <br />
        <strong>Timings:</strong> To visit the temple, schedule your visiting hours between 6 am and 7 pm.
        <br />
        <strong>Entry Charges:</strong> There are no entry charges.
      </p>
      <div style={{ width: '100%', height: '300px', border: '1px solid #ccc', marginTop: '20px' }}>
        <iframe
          title="Kudroli Gokarnanath Temple Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.138926478201!2d74.84648671483078!3d12.887762490908566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bb03b6a9531%3A0xf6c79d667bd64d6!2sKudroli%20Gokarnanatheshwara%20Temple!5e0!3m2!1sen!2sin!4v1624940615652!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Temple1Page;
