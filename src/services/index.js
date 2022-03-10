export default class FoodyService {
    async getRecipes(url) {
        const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=dbde7570&app_key=3f90bc0aa42cfee6bbe4ee34adf140f3", {
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

    randStr(len) {
      const chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
      let str = '';
      for (let i = 0; i < len; i++) {
          let pos = Math.floor(Math.random() * chrs.length);
          str += chrs.substring(pos,pos+1);
      }
      return str;
    }
}