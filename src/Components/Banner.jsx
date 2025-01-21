import React, { useState, useEffect } from "react";

const Banner = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Fetch banner data from localStorage
  useEffect(() => {
    const storedTitle = localStorage.getItem("bannerTitle");
    const storedContent = localStorage.getItem("bannerContent");
    const storedImage = localStorage.getItem("bannerImage");

    if (storedImage) {
      setImageUrl(storedImage);
      setTitle(storedTitle || ""); // Default to an empty string if no title is found
      setContent(storedContent || ""); // Default to an empty string if no content is found
    }
  }, []);

  if (!imageUrl) {
    // If there's no image, return null (nothing rendered)
    return null;
  }

  return (
    <div
      className="banner container"
      style={{
        width: "100%",
        overflow: "hidden",
        textAlign: "center", // Center-align the content
        padding: "1rem", // Add some padding to the container
      }}
    >
      <img
        src={imageUrl}
        alt="Banner"
        className="img-fluid"
        style={{
          width: "100%",
          maxHeight: "450px", // Limit the image height
          objectFit: "cover", // Ensure the image covers the area properly
          borderRadius: "10px", // Add a slight border radius
        }}
      />
      {(title || content) && ( // Only render the text container if title or content exists
        <div
          style={{
            marginTop: "1rem", // Add spacing between the image and text
            color: "#333", // Use a darker text color for better readability
            padding: "1rem",
            backgroundColor: "#f8f9fa", // Add a light background for contrast
            borderRadius: "10px", // Add a border radius for the text container
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
          }}
        >
          {title && (
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              {title}
            </h1>
          )}
          {content && (
            <p style={{ fontSize: "1.5rem", margin: 0 }}>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Banner;
