
const fetch = require('node-fetch');
var fs = require('fs');

let settings = { method: "Get" };

const url = "http://jsonplaceholder.typicode.com/posts"
const folderName = './result'


fetch(url, settings).then(res => res.json()).then((data) => {
    //console.log(data)
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
        fs.writeFile("./result/posts.json", JSON.stringify(data), function (err) {
            if (err)
                console.log(err);


            console.log("saved");
        })
    } else {
        console.log("file already exists in result folder")
    }

})

