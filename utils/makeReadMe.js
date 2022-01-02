const fs = require('fs');

const makeReadMe = markdown => {
    return new Promise ((resolve, reject) => {
        
        fs.writeFile('./dist/README.md', markdown, err => {

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