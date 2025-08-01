// //import from the env

// const api_url = process.env.REACT_APP_API_URL;

// //function to send post request to create a new user
// const createUser = async (formData) => {
//   console.log("form data", formData);
//   console.log(createUser);
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData)
//   };

//   const response = await fetch(`${api_url}/api/addUser`, requestOptions);
//   return response;
// };

// const userServicess = {
//   createUser,
// };
// export default userServicess;

const api_url = process.env.REACT_APP_API_URL;

// Function to send POST request to create a new user
const createUser = async (formData) => {
  console.log("form data", formData);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  try {
    const response = await fetch(`${api_url}/api/addUser`, requestOptions);

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // Optional: Get error details if available
      throw new Error(errorData.message || "Failed to create user");
    }

    return await response.json(); // Return the response data as JSON
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Optional: Rethrow or handle the error as needed
  }
};

const userServices = {
  createUser,
};

export default userServices;
