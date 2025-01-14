const axios = require('axios');
async function getIngredients() {
    try {
        const response = await axios.get('https://kaotika-server.fly.dev/ingredients');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
getIngredients();
module.exports = { getIngredients };