const file = require('fs-extra/lib/ensure/file');
const { parseStringToObject, parseObjectToString } = require('.');
var fs = require('fs').promises;

const updateAndAddHeros = (newHeros,fileContentArr)=>{
    
    newHeros.forEach((newHeroObj)=>{
        let idExist = false;
        for (let i = 0; i < fileContentArr.length; i++) {
            if(fileContentArr[i].id===newHeroObj.id){
                fileContentArr[i] = newHeroObj;
                idExist= true;
            }
        }
        if (!idExist) {
            fileContentArr.push(newHeroObj);
        }
    });
}


const readFil = async fileName => {
    try {
        const fileContent = await fs.readFile(fileName+'.csv','utf8');
        return parseStringToObject(fileContent);
    } catch (error) {
        console.log(error.message); 
    }
}

const updateAndAddToFile = async (fileName,heroStr) =>{
    const validateStr = /(\n.+,\d+,\d+)+/.test(heroStr);

    try {
        let fileContentArr = await readFil(fileName);
        
        if (validateStr){
            const newHerosArr = parseStringToObject(heroStr); 
            updateAndAddHeros(newHerosArr,fileContentArr);
            const newFileContent = parseObjectToString(fileContentArr);
            await fs.writeFile(fileName+'.csv',newFileContent);
        
        }else{
            throw new Error('String format is not right')
        }
    } catch (error) {
        console.log(error); 
    } 
}

updateAndAddToFile('heroDB','\nJjj,007,7\nOoo,404,98\nddd,11231,98');
