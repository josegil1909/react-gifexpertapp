//Esto para traer informacion
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=9vU2GEbvPof8BxjFjPiBfGk3EdyOBwRQ`
    const resp = await fetch ( url );
    const {data} = await resp.json();

    const gift = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    // console.log(gift)
    // setImages(gift)
    return gift;
}