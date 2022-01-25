const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  age: 23,
  instagram: '@imateus.silva',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
}

// Duas formas de se alterar o valor de user.active
// user.active = true;
// Object.assign(user, { active: true });

// Spread Operator
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true
}

console.log({ user }); 
console.log({ updatedUser });
