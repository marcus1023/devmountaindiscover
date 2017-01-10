angular.module('discoverApp').service('projectsService', function( ){

this.getProjects = function(){
  return[
    {
      title: 'CSS Projects',
      disc: "These projects are for testing a students CSS skills",
      projects: [
        {
          title: "Netflix Replicate",
          Disc: "This is the discription",
          image: "url..."
        },
        {
          title: "Netflix Replicate",
          Disc: "This is the discription",
          image: "url..."
        }
      ]
    },
    {
      title: 'Angular Projects',
      projects: [
        {
          title: "Angular JS Project One ",
          Disc: "This is the discription",
          image: "url..."
        },
        {
          title: "Make a Small App",
          Disc: "This is the discription",
          image: "url..."
        }
      ]
    }
  ]
}

})
