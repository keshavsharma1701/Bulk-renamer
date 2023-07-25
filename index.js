const fs = require('fs');
const replaceThis = "keshav"
const replaceWith = "sharma"
const preview = true
try {
  const data = fs.readdir("data", (err, data)=>{
      for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newfile = "data/" + item.replaceAll(replaceThis, replaceWith)
            if(!preview){
            fs.rename("data/"+ item, newfile, ()=>{
                  console.log("Rename success");
            })}
            else{
                  if("data/"+item !== newfile) console.log("data/"+item+" will be rename to "+newfile)
            }
      }
  })
} catch (err) {
  console.error(err);
}
