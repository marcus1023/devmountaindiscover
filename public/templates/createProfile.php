<div class="header-hideing"></div>
<section class="create-profile-section">
  <h1>Profile Information</h1>
  <form class="create-profile-form">
    <h4 id="field-prompt-1"style="float:left; margin-top: -7px; font-size: 2rem;">*</h4><input type="test" name="firstName" placeholder="First name" ng-model="newUser.firstName"></input><br>
    <h4 id="field-prompt-2"style="float:left; margin-top: -7px; font-size: 2rem;">*</h4><input type="test" name="lastName" placeholder="Last name" ng-model="newUser.lastName"></input><br>
    <h4 id="field-prompt-3"style="float:left; margin-top: -7px; font-size: 2rem;">*</h4><input type="test" name="email" placeholder="Email" ng-model="newUser.email"></input><br>
    <h4 id="field-prompt-4"style="float:left; margin-top: -7px; font-size: 2rem;">*</h4><input type="password" name="password" placeholder="Password" ng-model="newUser.password"></input><br>
  </form>
  <h3>Please wait while your profile is compiled...</h3>
  <h4 id="field-prompt-5">*All fields are required! Please correct and resubmit</h4>
  <button class="discover-btn" ng-click="createUserProfile(newUser.firstName,newUser.lastName, newUser.email, newUser.password, newUser)">Create</button>
</section>
