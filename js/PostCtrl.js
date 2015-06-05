angular.module('PostCtrl',[])
   .controller('PostCreateCtrl',function($scope,$state,Post) {
      $scope.post = {};

      $scope.buttonText="Create"; // Set initial label for button

      $scope.savePost = function(){
         $scope.buttonText="Saving. . .";

         Post.save($scope.post).success(function(data) {
             // if successful, we'll need to refresh the comment list
            Post.get().success(function(getData) {
               // $scope.post = getData;
               $state.go('postViewAll');
            });
         })
         .error(function(data) {
             console.log(data);
         });
      }
   })
   .controller('PostListController',function($scope,Post,popupService,$state) {
      $scope.posts = {};

      Post.get().success(function(data) {
         $scope.posts = data;
      });

      $scope.deletePost = function(id) {
         if (popupService.showPopup('Really delete this?')) {

            Post.destroy(id)
               .success(function(data) {
                  Post.get()
                     .success(function(getData) {
                        $scope.posts = getData;
                  });
               });
         }
      }
   })
   .controller('PostUpdateController',function($scope,Post,$stateParams,$state) {
      $scope.post=Post.get({id:$stateParams.id});

      $scope.buttonText="Update";

      $scope.updatePost=function(){
         $scope.buttonText="Updating. . .";

         $scope.post.$update(function(){
            $state.go('admin.postViewAll');
         });
      }
   })

