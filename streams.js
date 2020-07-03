const fs = require('fs');

const readStreams = fs.createReadStream('./blog3.txt', { encoding: 'utf-8' });
const writeStreams = fs.createWriteStream('./blog4.txt');

// readStreams.on('data', (chunk) => {
//   console.log('-----NEW CHUNK-----');
//   console.log(chunk);
//   writeStreams.write('\nNEW CHUNK\n');
//   writeStreams.write(chunk);
// })

readStreams.pipe(writeStreams);