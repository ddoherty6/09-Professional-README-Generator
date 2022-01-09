const fs = require('fs');

const makeReadMe = markdown => {
    return new Promise ((resolve, reject) => { //wrapping write file functionality into a promise
        
        fs.writeFile('./dist/README.md', markdown, err => { // basic write file

            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README.md was succesfully created'
            })
        });
    });
}

module.exports = makeReadMe;