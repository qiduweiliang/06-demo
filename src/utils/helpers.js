import axios from 'axios';

  function searchGit (add) {
    let address = `https://api.github.com/users/${add}`;
    console.log(address);
    return axios.get( address)
      .then ((res) => (
        {getData:res.data}
      ))
      .catch(function (error) {
        alert(error);
      });
  }

   function getJson() {
     let address = `https://raw.githubusercontent.com/qiduweiliang/demodata/master/card.json?${Math.random()}`;
     return axios.get(address)
       .then( (res) => (
         { getJson:res.data }
       ))
       .catch(function (error) {
         alert(error);
       });
   }

   function getBlog(add) {
     let address = `https://raw.githubusercontent.com/qiduweiliang/demodata/master/blog/${add}.md`;
     return axios.get(address)
       .then( (res) => (
         { getBlog:res.data }
       ))
       .catch(function (error) {
         alert(error);
       });
   }

export { searchGit,getJson,getBlog};
