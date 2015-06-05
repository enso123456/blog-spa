angular.module('Blog',[
   'PostCtrl',
   'ngResource',
   'PostService',
   'ui.router'
])
.config(function($stateProvider) {
   $stateProvider
      .state('postViewAll',{
         url:'/blog',
         templateUrl:'partials/all_post.html',
         controller: 'PostListController'
      })
      .state('create',{
         url:'/create',
         templateUrl: 'partials/add-new-post.html',
         controller: 'PostCreateCtrl'
      })
      .state('/view/:id',{
         templateUrl: 'partials/show.html',
         controller: 'ViewPostCtrlbyId'
      })
      .state('/update/:id',{
         templateUrl: 'partials/edit.html',
         controller:'UpdatePostCtrl'
      })
})