function skillsMember() {
  let member = {
    name: 'John',
    age: 30,
    skills: ['JS', 'React', 'Node'],
    // Path: member.skills.js
    getSkills() {
      return this.skills;
    },
  };

  return member;
}