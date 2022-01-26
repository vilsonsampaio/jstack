// .includes
const tech = 'Node.js';
const techs = ['Node.js', 'React', 'TypeScript']

const includesString = tech.includes('Node');
const includesArray = techs.includes('React');

console.log({ includesString, includesArray });



// .startsWith
const startsWith = tech.startsWith('node');
const startsWith2 = tech.startsWith('Nod');

console.log({ startsWith, startsWith2 });



// endsWith
const endsWith = tech.endsWith('.Js');
const endsWith2 = tech.endsWith('.js');

console.log({ endsWith, endsWith2 });