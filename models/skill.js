const skills = [
    {id: 125223, skill: 'Learned Javascript', done: true},
    {id: 127904, skill: 'Learned Python', done: false},
    {id: 139608, skill: 'Learned SQL ', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
	
  function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the skill
    const idx = skills.findIndex(skill => skill.id === id );
    skills.splice(idx, 1);
  }
  function getAll() {
    return skills;
  }
  function getOne(id) {
    id= parseInt (id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }