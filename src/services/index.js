export default class FoodyService {

    async getRecipes(url) {
        const response = await fetch(url, {
            headers: {
              Accept: "application/json",
              mode: "no-cors"
            }
          })
          
        if (!response.ok) {
            throw new Error('Server Error');
        }
        const result = await response.json();
        return result;
    }

    generateRandStr() {
        let result       = '',
        words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
        max_position = words.length - 1;
        for(let i = 0; i < 5; ++i) {
            let position = Math.floor ( Math.random() * max_position );
            result = result + words.substring(position, position + 1);
        }
        return result;
    }
}