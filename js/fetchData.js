const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data.success) {
      throw new Error();
    }
    return data.data;
  } catch (error) {
    console.log("Fetching Links not successful");
  }
};

export default fetchData;
