const API_KEY = 'sVNq1mQfgT47bfJDeH6PhZZommKByWE5'


export async function ImageFetcher() {
  try{
    const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key='+ API_KEY + '&limit=10')
    const {data} /* Deconstructing Json.data */ = await response.json()
    const images = data.map(gif => 
      ({
        url: gif.images.original.url,
        title: gif.title
      })
    )
    console.log(images);
    return images
  } catch(error) {
    console.error('Error: ' + error)
  }

}