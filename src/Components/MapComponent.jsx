import React from "react";

const MapComponent = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31510.6013885588!2d77.85203909235119!3d9.170238217382911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b26570998f29%3A0xd95cda8fab23619b!2sKovilpatti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1736663149376!5m2!1sen!2sin"
        width="150"
        height="130"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
