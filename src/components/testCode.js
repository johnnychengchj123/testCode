export default function() {
  document.write(lengthOfLongestSubstring("jbpnbwwd"));
}

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let noRepeatArray = []
  let stringArray = s ? s.split('') : []
  console.log('stringArray: ', stringArray);
  let max = 0

  for (var i=0; i < stringArray.length; i++) { 
     for (var j=i; j < stringArray.length; j++) { 
         let char = stringArray[j]
         console.log('char: ', char);
         console.log('noRepeatArray.indexOf(char) === -1: ', noRepeatArray.indexOf(char) === -1);
         if (noRepeatArray.indexOf(char) === -1) {
             noRepeatArray.push(char)
         } else if (noRepeatArray.length > max) {
             max = noRepeatArray.length;
             noRepeatArray = []
             break;
         } else {
             noRepeatArray = []
            break;
         }
         console.log('noRepeatArray: ', noRepeatArray);

     }
  }

  return max
};