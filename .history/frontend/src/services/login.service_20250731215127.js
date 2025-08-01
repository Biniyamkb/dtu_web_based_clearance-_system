//import from the env

const api_url = process.env.REACT_APP_API_URL;

//function to send post request to create a new user
const logIn = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${api_url}/api/user/login`, requestOptions);
  console.log(response, "response from login service");
  return response;
};

const logOu

module.exports = {
  logIn,
};
