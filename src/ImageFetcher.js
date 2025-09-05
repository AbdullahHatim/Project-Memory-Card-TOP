const API_KEY = 'sVNq1mQfgT47bfJDeH6PhZZommKByWE5'

export async function ImageFetcher() {
  try{
    const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key='+ API_KEY + '&limit=10')
    const {data} /* Deconstructing Json.data */ = await response.json()
    const imageUrls = data.map(gif => gif.images.original.url)
    return imageUrls
  } catch(error) {
    console.error('Error: ' + error)
  }
}