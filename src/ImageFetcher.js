const API_KEY = 'sVNq1mQfgT47bfJDeH6PhZZommKByWE5'

const test = [
    {
        "url": "https://media4.giphy.com/media/v1.Y2lkPWQ4NmNiYjhkNXg5NzZjb3VxdmUzbmtlY3R0cnJ1ZmlmczYzNTZvaWNpMGxxM3hsMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/PFyOHq6uzxlvjdaHFD/giphy.gif",
        "title": "Us Open Tennis Sport GIF by US Open"
    },
    {
        "url": "https://media3.giphy.com/media/v1.Y2lkPWQ4NmNiYjhkNXg5NzZjb3VxdmUzbmtlY3R0cnJ1ZmlmczYzNTZvaWNpMGxxM3hsMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/elPt1FL04JjHjrd2k0/giphy.gif",
        "title": "Good Night GIF"
    },
    {
        "url": "https://media2.giphy.com/media/v1.Y2lkPWQ4NmNiYjhkNXg5NzZjb3VxdmUzbmtlY3R0cnJ1ZmlmczYzNTZvaWNpMGxxM3hsMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/HvO6Gpnx8599S/giphy.gif",
        "title": "Kc Chiefs Dance GIF by Kansas City Chiefs"
    },
    {
        "url": "https://media2.giphy.com/media/v1.Y2lkPWQ4NmNiYjhkNXg5NzZjb3VxdmUzbmtlY3R0cnJ1ZmlmczYzNTZvaWNpMGxxM3hsMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/tHIRLHtNwxpjIFqPdV/giphy.gif",
        "title": "Happy My Song GIF by Justin"
    },
    {
        "url": "https://media3.giphy.com/media/v1.Y2lkPWQ4NmNiYjhkNXg5NzZjb3VxdmUzbmtlY3R0cnJ1ZmlmczYzNTZvaWNpMGxxM3hsMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/ZhOJzVORTsjvhL4P8g/giphy.gif",
        "title": "Happy Birthday Dog GIF by The Rainbow Bridge"
    },
    {
        "url": "https://media4.giphy.com/media/v1.Y2lkPWQ4NmNiYjhkNXg5NzZjb3VxdmUzbmtlY3R0cnJ1ZmlmczYzNTZvaWNpMGxxM3hsMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/YAlhwn67KT76E/giphy.gif",
        "title": "despicable me minions GIF"
    },
    {
        "url": "https://media2.giphy.com/media/v1.Y2lkPWQ4NmNiYjhkNXg5NzZjb3VxdmUzbmtlY3R0cnJ1ZmlmczYzNTZvaWNpMGxxM3hsMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/5AyrPKCGSgv2RsXnse/giphy.gif",
        "title": "Love You Heart GIF by Hello All"
    },
    {
        "url": "https://media1.giphy.com/media/v1.Y2lkPWQ4NmNiYjhkNXg5NzZjb3VxdmUzbmtlY3R0cnJ1ZmlmczYzNTZvaWNpMGxxM3hsMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/3ndAvMC5LFPNMCzq7m/giphy.gif",
        "title": "Excited Aww GIF"
    },
    {
        "url": "https://media3.giphy.com/media/v1.Y2lkPWQ4NmNiYjhkNXg5NzZjb3VxdmUzbmtlY3R0cnJ1ZmlmczYzNTZvaWNpMGxxM3hsMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/r4BmI9xUaDuKJQdd3l/giphy.gif",
        "title": "Good Night 90S GIF by Frankie"
    },
    {
        "url": "https://media3.giphy.com/media/v1.Y2lkPWQ4NmNiYjhkNXg5NzZjb3VxdmUzbmtlY3R0cnJ1ZmlmczYzNTZvaWNpMGxxM3hsMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/aSZSj0mT8f6tW/giphy.gif",
        "title": "to do list dog GIF"
    }
]
export async function ImageFetcher() {
  return test;
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