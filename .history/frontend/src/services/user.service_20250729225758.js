//function to send post request to create a new user

const createUser = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const response=await fetch()
};
