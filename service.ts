import axios from "axios";

const apiUrl =
  process.env.REACT_APP_ENV === "development"
    ? "http://localhost:3001/api/v1"
    : "https://production-url.com/api/v1";

export const fetchUserToken = async (userLogin: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${apiUrl}/user/login`, userLogin);
  if (response.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data.body.token;
};

export const fetchUserData = async (token: string) => {
  const response = await axios.get(`${apiUrl}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data.body;
};

export const updateUserData = async (
  token: string,
  firstName: string,
  lastName: string
) => {
  const response = await axios.put(
    `${apiUrl}/user/profile`,
    { firstName, lastName },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data.body;
};
