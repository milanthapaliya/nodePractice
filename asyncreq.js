const fs = require('fs').promises;
const axios = require('axios');

let getData = async() =>{
    try{
        let response = await axios.get('https://ghibliapi.herokuapp.com/films');
        let movieList = response.data.map((x) => x.title + '\n');
        await fs.writeFile('./subfolder/movieList.csv',movieList);

    }
    catch(error){
        console.log(error);
    }
    
}
getData();

