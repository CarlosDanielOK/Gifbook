export const getGifs = async (search) => {
  try {
    const apiKey = import.meta.env.VITE_TENOR_API_KEY;
    const limit = 50;
    const searchUrl = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(
      search
    )}&key=${apiKey}&client_key=my_test_app&limit=${limit}`;

    const response = await fetch(searchUrl);

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }

    const { results } = await response.json();

    const imagenes = results.map((gif) => ({
      id: gif.id,
      url: gif.media_formats.gif.url,
    }));

    return imagenes;
  } catch (error) {
    console.error(error);
    return [];
  }
};
