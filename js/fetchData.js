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
    //checking if should display 'no item'
    if (elementToDisplayLoading && data.data.length <= 0) {
      elementToDisplayLoading.textContent = "No Items To Display For Now:))";
    }
    return data.data;
  } catch (error) {
    console.log("Fetching Links not successful");
  }
};

export default fetchData;
