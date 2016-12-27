angular.module('afloat.services', [])

.factory('UserService', function($http) {
  var service = {}

  service.postNewUser = function (newUser) {
    console.log('made it to the service');
    return $http.post('http://localhost:8000/signup', newUser)
  }

  return service
});
