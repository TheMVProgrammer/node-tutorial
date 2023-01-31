const { readFileSync, writeFileSync } = require('fs'); // Here I destructured it

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`
);

// writeFileSync(
//     './content/result-sync.txt', 
//     `Here is the result: ${first}, ${second}`,
//     {flag: 'a'} //Instead of overwriting the file,  it writes it next to the previous value
// );
