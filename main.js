const fs = require("fs");

function readCSV(fileName){
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        let splitted = data.split("\n");
        let users = [];
        splitted.forEach((item,index)=>{
            if (index != 0){
                let sp = item.split(",");
                users.push({
                    name:sp[0],
                    birthDate:sp[1],
                    city:sp[2],
                    phone:sp[3],
                    gender:sp[4].includes("M") ? "M" : "F"
                });
            }
        })
        return users;
    } catch (err) {
        console.error(err);
    }
}


function saveToFile(fileName,content){
    //seperate data by ","
    try{
        fs.appendFileSync(fileName,"\n"+content);
    }catch(err){
        console.error(err);
    }
}


function readJsonFile(fileName){
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        let splitted = data.split("\n");
        splitted.forEach((item,index)=>{
            if (index != 0){
                let sp = item.split(",");
                console.log({
                    name:sp[0],
                    birthDate:sp[1],
                    city:sp[2],
                    phone:sp[3],
                    gender:sp[4].includes("M") ? "M" : "F"
                })
            }
        })
        
    } catch (err) {
        console.error(err);
    }
}
