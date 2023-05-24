const apiURL = "http://localhost:5500/";

const getApi = async (url) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const response = await fetch(`${apiURL}${url}`, options);
  const responseOK = response && response.ok;
  if (responseOK) {
    const data = await response.json();
    return data;
  }
};

export default getApi;
//const token = JSON.parse(localStorage.getItem('userId'));
