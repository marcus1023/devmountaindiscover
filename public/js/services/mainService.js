angular.module('discoverApp').service('mainService', function($http, $q ){


// alumni section

this.getAlumni = function(){
  return [
    {
      name: 'Mike Balm',
      photo: 'https://pbs.twimg.com/profile_images/813496728355737600/UqbFeI2J.jpg',
      background: 'img/autnm-road.jpeg',
      location: 'Bismark, Germany',
      company: 'Adobe Inc.',
      view: 'mike',
      info: 'Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle.'
    },
    {
      name: 'James Madson',
      photo: 'https://pbs.twimg.com/profile_images/810710043704328192/QPNkZUiH.jpg',
      location: 'Charelston, SC',
      company: 'Uber ',
      view: 'james',
      info: 'Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle.'
    },
    {
      name: 'Sally Feild',
      photo: 'https://pbs.twimg.com/profile_images/797510184339963904/EvSKiVTL.jpg',
      location: 'Austin, TX',
      company: 'QuickSpace',
      view: 'sally',
      info: 'Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle.'
    },
    {
      name: 'Joan Moore',
      photo: 'https://pbs.twimg.com/profile_images/378800000705487169/1babe9402ad6fcf2ad46c40d22eee2ec.jpeg',
      location: 'Ogden, UT',
      company: 'Convina',
      view: 'joan',
      info: 'Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle.'
    }
  ]
}



})
