const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080);

// ## Create Files ##

// fs.appendFile() - appends specified content to a file. If file does not exist, the file will be created: 

// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// ################

// fs.open() - takes a "flag" as second argument; if flag is "w" for "writing", specified file is opened for writing. If file does not exist,
//an empty file is created.

// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// ##################

// fs.writeFile() - replaces specified file and content if exists. If file does not exist, creates a new file with the content. 

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });



// ## Update Files ##

// fs.appendFile() - appends specified content to end of specified file

// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// ####################

// fs.writeFile() - replaces specified file and content

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });




// ## Delete Files ##

// fs.unlink() - deletes specified file

// var fs = require('fs');

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });



// ## Rename Files ## 

// fs.rename() - renames specified file

// var fs = require('fs');

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });



