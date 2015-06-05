angular.module('PostService',[])
   .service('popupService', function($window) {
      this.showPopup = function(message) {
         return $window.confirm(message);
      }
   })
   .factory('Post', function($http) {
      return {
         // get all the comments
         get : function() {
            return $http.get('http://localhost/freshL4/public/api/posts');
         },
         // save a comment (pass in comment data)
         save : function(postData) {
            return $http({
                method: 'POST',
                url: 'http://localhost/freshL4/public/api/posts',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(postData)
            });
         },
         // destroy a comment
         destroy : function(id) {
            return $http.delete('http://localhost/freshL4/public/api/posts/' + id);
         }
      }
   });