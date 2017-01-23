<div class="header-hideing"></div>
<section class="create-profile-section">
  <h1>Create New Project</h1>
  <form class="create-project-form" id="project-form">
    <input type="text" placeholder="Project Title..." ng-model="project.title"></input>
    <textarea name="comment" form="project-form" placeholder="Project Discription..." ng-model="project.disc"></textarea>
    <input type="text"placeholder="Project Link" ng-model="project.link" ></input>
    <input type="file" name="file" onchange="angular.element(this).scope().uploadFile(this.files)"/>
    <input type="submit"  class="discover-btn-2" ng-click="createProject(project)"/>
  </form>
</section>
