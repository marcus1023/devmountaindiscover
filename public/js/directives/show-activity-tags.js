angular.module('discoverApp').directive('activityTags', function(){
  return function(scope) {
  if (scope.$last){
  scope.$emit('LastRepeaterElement');
  }
  };
});
