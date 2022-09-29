export default async () => {
  try {
    const baseUrl = "https://v1-sneakers.p.rapidapi.com/v1/sneakers";
    const data = await $fetch(`${baseUrl}?limit=100`, {
      headers: {
        "X-RapidAPI-KEY": process.env.API_KEY,
        "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
      },
    });
    return data;
  } catch (e) {
    console.log(e.error);
  }
};
