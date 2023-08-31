const skills = [
    {id: 125223, skill: 'Learned Javascript', done: true},
    {id: 127904, skill: 'Learned Python', done: false},
    {id: 139608, skill: 'Learned SQL ', done: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }