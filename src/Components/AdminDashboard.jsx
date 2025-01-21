import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // For the uploaded image
  const [feedbackList, setFeedbackList] = useState([]);
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackContent, setFeedbackContent] = useState("");
  const [feedbackStars, setFeedbackStars] = useState(5);

  // Fetch existing banner data from localStorage (if any)
  useEffect(() => {
    const savedTitle = localStorage.getItem("bannerTitle");
    const savedContent = localStorage.getItem("bannerContent");
    const savedImage = localStorage.getItem("bannerImage");
    const storedFeedback =
      JSON.parse(localStorage.getItem("feedbackList")) || [];

    if (savedTitle && savedContent && savedImage) {
      setTitle(savedTitle);
      setContent(savedContent);
      setImage(savedImage);
    }

    setFeedbackList(storedFeedback);
  }, []);

  // Save feedback to localStorage
  const saveFeedbackToLocalStorage = (newFeedbackList) => {
    localStorage.setItem("feedbackList", JSON.stringify(newFeedbackList));
    setFeedbackList(newFeedbackList);
  };

  // Handle image upload and convert it to Base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert to Base64
      reader.onloadend = () => {
        setImage(reader.result); // Set the Base64 string
      };
    }
  };

  // Handle form submission to save banner data to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bannerTitle", title);
    localStorage.setItem("bannerContent", content);
    localStorage.setItem("bannerImage", image);
    alert("Banner updated successfully!");
  };

  // Handle delete banner action
  const handleDeleteBanner = () => {
    localStorage.removeItem("bannerTitle");
    localStorage.removeItem("bannerContent");
    localStorage.removeItem("bannerImage");
    setTitle("");
    setContent("");
    setImage(null);
    alert("Banner deleted successfully!");
  };

  // Handle adding feedback
  const handleAddFeedback = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: Date.now(),
      name: feedbackName,
      content: feedbackContent,
      stars: feedbackStars,
    };
    const updatedFeedbackList = [...feedbackList, newFeedback];
    saveFeedbackToLocalStorage(updatedFeedbackList);
    setFeedbackName("");
    setFeedbackContent("");
    setFeedbackStars(5);
    alert("Feedback added successfully!");
  };

  // Handle deleting feedback
  const handleDeleteFeedback = (id) => {
    const updatedFeedbackList = feedbackList.filter(
      (feedback) => feedback.id !== id
    );
    saveFeedbackToLocalStorage(updatedFeedbackList);
    alert("Feedback deleted successfully!");
  };

  return (
    <div style={{ minHeight: "100vh" }} className="container mt-5">
      <h2 className="text-center mb-4 fw-bold display-2">
        Update Changes Here
      </h2>

      {/* Banner Section */}
      <h2
        className="text-center mb-4 fw-bold display-3"
        style={{ color: "red" }}
      >
        Manage Banner
      </h2>
      <form onSubmit={handleSubmit} className="p-4 shadow">
        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label"
            style={{ fontSize: "1.5rem" }}
          >
            Title
          </label>
          <input
            style={{ fontSize: "1.5rem" }}
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="content"
            className="form-label"
            style={{ fontSize: "1.5rem" }}
          >
            Content
          </label>
          <textarea
            style={{ fontSize: "1.5rem" }}
            id="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            htmlFor="image"
            className="form-label"
            style={{ fontSize: "1.5rem" }}
          >
            Upload Image
          </label>
          <input
            required
            style={{ fontSize: "1.5rem" }}
            type="file"
            id="image"
            className="form-control"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="my-5">
          <button
            type="submit"
            className="btn btn-primary rounded-3"
            style={{
              fontSize: "1.5rem",
            }}
          >
            Update Banner
          </button>
          <button
            className="mx-5 btn btn-danger rounded-3"
            onClick={handleDeleteBanner}
            style={{
              fontSize: "1.5rem",
            }}
          >
            Delete Banner
          </button>
        </div>
      </form>

      {/* Feedback Section */}
      <h3
        className="text-center my-4 display-3 fw-bold"
        style={{ color: "red" }}
      >
        Manage Feedback
      </h3>
      <form onSubmit={handleAddFeedback} className=" p-4 shadow mb-4">
        <div className="mb-3">
          <label
            htmlFor="feedbackName"
            className="form-label"
            style={{ fontSize: "1.5rem" }}
          >
            Name
          </label>
          <input
            style={{ fontSize: "1.5rem" }}
            type="text"
            id="feedbackName"
            className="form-control"
            value={feedbackName}
            onChange={(e) => setFeedbackName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="feedbackContent"
            className="form-label"
            style={{ fontSize: "1.5rem" }}
          >
            Feedback Content
          </label>
          <textarea
            style={{ fontSize: "1.5rem" }}
            id="feedbackContent"
            className="form-control"
            value={feedbackContent}
            onChange={(e) => setFeedbackContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            htmlFor="feedbackStars"
            className="form-label"
            style={{ fontSize: "1.5rem" }}
          >
            Star Rating (1-5)
          </label>
          <input
            style={{ fontSize: "1.5rem" }}
            type="number"
            id="feedbackStars"
            className="form-control"
            value={feedbackStars}
            onChange={(e) =>
              setFeedbackStars(Math.min(Math.max(Number(e.target.value), 1), 5))
            }
            required
          />
        </div>
        <button
          type="submit"
          style={{
            fontSize: "1.5rem",
            width: "100%",
            backgroundColor: "#28a745",
            color: "#fff",
          }}
        >
          Add Feedback
        </button>
      </form>

      <div className="my-5 ">
        {feedbackList.length > 0 && (
          <>
            <h4
              className="display-3 fw-bold text-center"
              style={{ color: "red" }}
            >
              Feedback List
            </h4>
            <ul
              className="list-group shadow my-4"
              style={{ fontSize: "1.5rem" }}
            >
              {feedbackList.map((feedback) => (
                <li
                  key={feedback.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={{
                    maxWidth: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <div
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <strong>{feedback.name}</strong> - {feedback.content} (
                    {feedback.stars}⭐)
                  </div>
                  <button
                    style={{ fontSize: "1.5rem" }}
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteFeedback(feedback.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
