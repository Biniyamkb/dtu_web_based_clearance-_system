//import from the env

const api_url = process.env.REACT_APP_API_URL;

//function to send post request to create a new user
const createUser = async (formData) => {
  console.log("form data",formData);
  console.log(createUser)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${api_url}/api/addUser`, requestOptions);
  return response;

  
};

const userServicess = {
  createUser,
};
export default userServicess;
