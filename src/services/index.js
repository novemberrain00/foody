export default class FoodyService {
    constructor() {
        this.url = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=5439c2fe&app_key=335b3847bf78d129e80af9d756aedfaf";
    }
    async getRecipes() {
        const response = await fetch(this.url, {
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
}