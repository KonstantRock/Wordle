export function compareArrs(targetArr, inputArr) {
   let resultArr = [];

   for(let i = 0; i < inputArr.length; i++) {
      if((inputArr[i] !== targetArr[i]) && !targetArr.includes(inputArr[i])) {
         resultArr.push('wrong');
      } else if((inputArr[i] !== targetArr[i]) && targetArr.includes(inputArr[i])) {
         resultArr.push('miss');
      } else resultArr.push('guess');
   }

   return resultArr;
}