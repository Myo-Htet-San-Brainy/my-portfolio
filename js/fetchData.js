const fetchData = async (url, elementToDisplayLoading = null) => {
  try {
    //checking if should display loading
    if (elementToDisplayLoading) {
      elementToDisplayLoading.textContent = "fetching data:))";
    }
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
