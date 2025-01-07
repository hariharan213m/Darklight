// context/DataContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    mode: "",
    level: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, contactNo, mode, level, location } = formData;

    // Validate required fields
    if (!name || !contactNo || !mode || !level || !location) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Construct WhatsApp message
    const whatsappMessage = `Name: ${name}\nContact No: ${contactNo}\nMode: ${mode}\nLevel: ${level}\nLocation: ${location}`;
    const phoneNumber = "918300155259"; // Use the international format without spaces or special characters
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");

    // Reset form data and close the modal only after the link is opened
    setFormData({
      name: "",
      contactNo: "",
      mode: "",
      level: "",
      location: "",
    });
  };

  return (
    <DataContext.Provider
      value={{
        handleShow,
        showModal,
        handleClose,
        formData,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
