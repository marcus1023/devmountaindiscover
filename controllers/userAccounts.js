
module.exports = {
  allUserAccounts: function(req, res, next){
    console.log('somthing works...')
    res.status(200).json(users)
  },
  connect: function(req, res, next){
    res.status(200).json(UserConnect)
  },
  checkUserPass: function(req, res, next){
    console.log(req.body)
    var email = req.body.email;
    var password = req.body.password;
    var accountNeeded;
    for(var i = 0; i < users.length; i++){
      if(email === users[i].email){
        var userId = users[i].id;
        accountNeeded = userInfo[userId];
        UserConnect.splice(0,1,accountNeeded)
        console.log(UserConnect)
      }
    }
    res.status(200).json(accountNeeded)
  },
  postProject: function(req, res, next){

    res.status(200).json(users)
  },
  // createUser:function(req,res,next){
  // 	console.log(req.body)
  //   let data = req.body
  //   let name = data.firstName + " " + data.lastName
  //   console.log(name)
  //   db.createuser.update({name: name, email: data.email, password: data.password}, function(err, res){
  //     //full product with new id returned
  //   });
  // }
}

var currentProgressCalc = ((63/93)*100)
var currentProgress = Math.round(currentProgressCalc)
var UserConnect = []
var users = [
  {id: 'jk23k',type: "student", name: "Marcus", lastName: "Ogden", email: "marcus@userlite.com", password:'Password1', profileImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/idiot/128.jpg'},
  {id: 'afdas8sda', type: "student", name: "Nathan", lastName: "McCoy", email: "nathanmccoy25@gmail.com", password:'Ballsacks2', profileImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/idiot/128.jpg'},
  {id: 'sfsi8', type: "student", name: "Manny", lastName: "Brooklinman", password:'Password1', profileImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/idiot/128.jpg'},
  {id: 'adsf4s', type: "company", name: "Convina", lastName: "",email: "admin@convina.com", password:'Password1', profileImage: 'https://d2beia7gtp5yjy.cloudfront.net/cdn_image/colorize_000000/39535/33244641/12724/landing/v999/m4t3r/convina_200.png'}
]
var userInfo = {
  jk23k: {
    type: "student",
    loginUrl: "userProfile",
    name: "Marcus Ogden",
    firstName: "Marcus",
    profileImage: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/13627073_10210324535376058_8157856607448805668_n.jpg?oh=2dff5fd32e521ba7eb92dc35b7008d62&oe=58E13434',
    companies: ["convina","pluralsite","Adobe"],
    ProjectsCompleted: 5,
    projectData: [],
    badge: 3,
    github: "Healthy",
    githubUsername: "marcus1023",
    progress:currentProgress
},
  afdas8sda: {
    type: "student",
    loginUrl: "userProfile",
    name: "Nathan McCoy",
    firstName: "Nathan",
    profileImage: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/13177878_1008627102553275_1847509740725961388_n.jpg?oh=f9738905ff5c681096424fa90b4e3dd3&oe=59162B5F',
    companies: [{company:"Convina", link: "http://www.convina.com/"},{company:"Pluralsite", link: "http://www.convina.com/"},{company:"Adobe", link: "http://www.convina.com/"}],
    ProjectsCompleted: 4,
    projectData: [{type: "Project", image: "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAR_AAAAJDJmMTM5NGQ4LTc1ODMtNDIwYy1hOGE1LTkxMWQyNDRjMjRhMw.png", title:"WideOpen Media", disc:"Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting.", link:"http://www.wideopenmediagroup.com/", linkTitle: "HarryPotter.com", dateAdded:"Dec, 27th 2016"},{type: "Project", image: "http://email.doeanderson.com/kentucky/images/newsletter-template-2012/logo.png", title:"Think Kentucky", disc:"Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting.", link:"http://www.thinkkentucky.com/  ", linkTitle: "Think Kentucky", dateAdded:"Dec, 29th 2016"},],
    badge: 4,
    github: "3 commits this week",
    githubUsername: "nayray21",
    progress:currentProgress
},
  sfsi8: {
    name: "Manny Squill"
},
adsf4s:{
  type: "company",
  loginUrl: "companyProfile",
  name: "Convina",
  lastName: "",email:
  "admin@convina.com",
  password:'Password1',
  profileImage: 'https://content.linkedin.com/content/dam/business/marketing-solutions/global/en_US/blog/2015/11/george-costanza.jpg',
  students: [{student:"afdas8sda", link: "http://www.convina.com/"},{student:"jk23k", link: "http://www.convina.com/"}],
  ProjectsPosted: 6,
  ProjectsCompleted: 12,
  projectsCollection: [{name:"Wide Open Media CSS Duplicate", referanceLink: "http://www.wideopenmediagroup.com/", disc:"make a pixel perfect copy of the Wide Open Media home page and host it on github", image:""}],
  badge: 4,
  github: "3 commits this week",
  githubUsername: "nayray21",
  progress:currentProgress
}
}
