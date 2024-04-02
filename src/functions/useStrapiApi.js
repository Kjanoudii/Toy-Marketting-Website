import axios from "axios";

const API_URL = "https://api.toymarkettrading.com";
const ACCESS_TOKEN = `7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154`;

if (!API_URL || !ACCESS_TOKEN) {
  throw new Error("Missing environment variables for Strapi API.");
}

const postStrapiData = async (path, data) => {
  const url = `${API_URL}${path}`;
  const headers = {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  };

  try {
    const response = await axios.post(url, { data }, { headers });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(
        `API request failed: ${response.status} ${response.statusText}`
      );
      throw new Error("API request failed");
    }
  } catch (error) {
    console.error("Error posting data:", error);
    throw new Error("Failed to post data to the API.");
  }
};




export default postStrapiData;
