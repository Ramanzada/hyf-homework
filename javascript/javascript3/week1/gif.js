const searchGif = () => {
    const searchWord = document.getElementById("search-input").value;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=SMnr7cJBz7A2NPHAeprGNJ0oHb0796pC&q=${searchWord}`)
      .then(response => response.json())
      .then(data => {
        const gifUrl = data.data[0].images.original.url;
        const gifImg = document.createElement("img");
        gifImg.src = gifUrl;
        document.getElementById("gif-container").appendChild(gifImg);
      })
      .catch(error => console.log(error));
  };
  