const fs = require('fs');

// READING FILES
// fs.readFile('./blog1.txt', (error, data) => {
//   if(error) {
//     console.log(error)
//   }
//   console.log(data.toString())
// })

// console.log('This is the last line of code');

// WRITING FILES
// fs.writeFile('./blog1.txt', 'I have changed the blog content.', () => {
//   console.log('Text has been updated');
// })

// fs.writeFile('./blog2.txt', 'This is a new text file', () => {
//   console.log('New Text file has been created');
// })

// DIRECTORIES
// if(!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if(err) {
//       console.log(err);
//     }
//     console.log('Folder Created');
//   })
// } else {
//   fs.rmdir('./assets', (err) => {
//     if(err) {
//       console.log(err);
//     }
//     console.log('Folder Deleted');
//   })
// }

// DELETE FILES
// fs.mkdir('./newfolder', (err) => {
//   if(err) {
//     console.log(err);
//   }
//   console.log('Folder Created');
// })

// fs.writeFile('./newfolder/deleteme.txt', 'Please delete me.', (err) => {
//   if(err) {
//     console.log(err);
//   }
//   console.log('File Created');
// })

// if(fs.existsSync('./newfolder/deleteme.txt')) {
//   fs.unlink('./newfolder/deleteme.txt', (err) => {
//     if(err) {
//       console.log(err);
//     }
//     console.log('File Deleted');
//   })
// }