const parseStringToObject = string => {
  const arr = string.split('\n');
  if(arr[0]==='heroName|heroId|HP'||arr[0]==='')  arr.shift();

  return arr.map(str=>{
    const heroArr = str.split(',');
    return {name:heroArr[0],id:heroArr[1],hp:heroArr[2]};
  });
};

const parseObjectToString = array => {
  const strArr = array.map(heroObj=>{
    return heroObj.name+','+heroObj.id+','+heroObj.hp
  });
  return "heroName|heroId|HP\n"+strArr.join('\n'); 
};

module.exports = { parseStringToObject, parseObjectToString };

