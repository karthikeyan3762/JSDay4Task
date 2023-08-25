// Convert all the strings to title caps in a string array using IIFE function


((array) => {
    let titleCaps = function(array) {
      return array.map((array) => {
        return array
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      });
    };
  
    let titleConvertCap = titleCaps(array);
    console.log(titleConvertCap);
  })(["king", "developer", "guvi"]);
