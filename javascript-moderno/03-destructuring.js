const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  full_name: 'Mateus Silva',
  age: 23,
  instagram: '@imateus.silva',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
}

// Destructuring
const { full_name: fullName, age } = user;
const [firstSkill, secondSkill] = user.skills;

console.log(fullName, age);
console.log(firstSkill, secondSkill);