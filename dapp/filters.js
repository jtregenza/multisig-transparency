(
  function(){
    angular
    .module("multiSigWeb")
    .filter('objectToArray', function(){
      return function(objectMap) {
        var returnedArray = [];
        if (objectMap) {
          var keys = Object.keys(objectMap);
          for(var i=0; i<keys.length; i++){
            returnedArray.push(objectMap[keys[i]]);
          }
        }
        return returnedArray;
      };
    })
    .filter('fromNow', function(){
      return function(dateString){
        if(!dateString){
          return null;
        }
        return moment(new Date(dateString)).fromNow();
      };
    })
    .filter('bigNumber', function(){
      return function(big){
        if(big){
          return new Web3().toBigNumber(big).toNumber();
        }
      }
    })
    .filter('ether', function() {
    return function(big_number) {
      if(big_number) {
        var string_split = new Web3().toBigNumber(big_number).div('1e18').toString(10).split('.');
        var new_string = "";
        var places = string_split[0].length - 1;
        for (var i=places; i>=0; i--) {
          new_string = string_split[0][i] + new_string;
          if (i > 0 && (places - i + 1) % 3 == 0) {
            new_string = ',' + new_string;
          }
        }
        if (string_split.length == 2) {
          new_string += '.' + string_split[1].substring(0, 2);
        }
        return new_string +" ETH";
      }
      return null;
    };
  })
  }
)();
