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
  return response;
};

module.exports = {
  logIn,
};
