<employer-head></employer-head>
<section class="create-profile-section">
  <h1>Create New Project</h1>
  <h2>{{currentUser.lastname}}</h2>
  <form class="create-project-form" id="project-form">
    <input type="text" placeholder="Project Title..." ng-model="project.title"></input>
    <textarea name="comment" form="project-form" placeholder="Project Discription..." ng-model="project.disc"></textarea>
    <input type="text"placeholder="Web Link" ng-model="project.link" ></input>
    <input type="text"placeholder="Github Link" ng-model="project.githublink" ></input>
    <input type="text"placeholder="Image URL" ng-model="project.image" ></input>
    <input type="submit"  class="discover-btn-2" ng-click="createProject(project)"/>
    <!-- <p id="skill-highlight-title">Select Required Skills</p> -->
    <div class="project-type-select slideOne">
      <div class="inner-slide">
        <input type="checkbox" value="None" id="slideOne" name="check" checked ng-model="project.html5"/>HTML5
        <label for="slideOne"></label>
      </div>
    </div>
    <div class="project-type-select slideTwo">
      <div class="inner-slide">
        <input type="checkbox" value="None" id="slideTwo" checked ng-model="project.css"/>CSS
        <label for="slideTwo"></label>
      </div>
    </div>
    <div class="project-type-select slideThree">
      <div class="inner-slide">
        <input type="checkbox" value="None" id="slideThree" checked ng-model="project.angular"/>AngularJS
        <label for="slideThree"></label>
      </div>
    </div>
    <div class="project-type-select slideFour">
      <div class="inner-slide">
        <input type="checkbox" value="None" id="slideFour" checked ng-model="project.node"/>NodeJS
        <label for="slideFour"></label>
      </div>
    </div>
    <div class="project-type-select slideFive">
      <div class="inner-slide">
        <input type="checkbox" value="None" id="slideFive" checked ng-model="project.database"/>Database
        <label for="slideFive"></label>
      </div>
    </div>
  </form>
</section>
