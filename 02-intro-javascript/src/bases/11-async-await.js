




const getImage = async () => {

    try {
        
        const apiKey = 'XUdOBpbuPRn0IoqNDfn0xWro0DvCMhcl';
    
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        //desestructuro la data dentro del json.
        const {data} = await resp.json();
        
        // dentro del objeto data => images => original 
        // desestructuro y obtengo la URL.
        const {url} = data.images.original;
    
        const img = document.createElement('img');
        //Asigno la URL al source del elemento img.
        img.src = url;
        //Agrego el elemento de HTML 'img' en el body del document.
        document.body.append(img);
    } catch (error) {
        // manejo del error.
        console.error( error);
    }

}


getImage();


