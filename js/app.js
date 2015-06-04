angular.module('Blog',[
   'PostCtrl',
   'ui.router'
])
.config(function($stateProvider) {
   $stateProvider.state('/',{
         url:'/',
         templateUrl:'partials/blog.html',
         controller: 'GetAllPostCtrl'
      }).state('create',{
         url:'/create',
         templateUrl: 'partials/createBlog.html',
         controller: 'CreatePostCtrl'
      }).state('/view/:id',{
         templateUrl: 'partials/show.html',
         controller: 'ViewPostCtrlbyId'
      }).state('/update/:id',{
         templateUrl: 'partials/edit.html',
         controller:'UpdatePostCtrl'
      })
})
.run(function($state) {
   $state.go('/');
});