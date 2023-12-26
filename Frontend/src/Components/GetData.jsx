import axios from "axios";
const GetData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("🚀 ~ file: GetData.jsx:6 ~ GetData ~ response:", response);

  return { response };
};

export default GetData;
