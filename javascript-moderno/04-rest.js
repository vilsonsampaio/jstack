const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  age: 23,
  instagram: '@imateus.silva',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
}

// Rest Operator
const { firstName, skills, ...restoUser } = user;
const [firstSkill, ...restoSkill] = skills;

console.log(firstName, restoUser);
console.log(firstSkill, restoSkill);