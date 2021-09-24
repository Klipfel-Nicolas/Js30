 let discours = document.querySelector('.discour').textContent.toLowerCase();
 discours = discours.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\n\r]/g, "");

 let words = discours.split(" ");

 words = words.filter(word => word.length >= 3);


 //Mots les plus longs
 /*
  let leng = words.sort(function(a, b) {
      if (a.length > b.length) {
          return -1
      }
  });
 */
 //Mots plus utilisées