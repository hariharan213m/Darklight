const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./path-to-service-account-key.json"); // Replace with your service account key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Function to set admin role
const setAdminRole = async (email) => {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    console.log(`Admin role assigned to ${email}`);
  } catch (error) {
    console.error("Error setting admin role:", error);
  }
};

// Call the function with the email of the admin user
setAdminRole("admin@example.com"); // Replace with the admin's email
