/**
 * Created by BREMME on 4/12/15.
 */
app.controller('MainCtrl', ['$scope', 'posts', 'auth',
    function($scope, posts, auth) {
        $scope.posts = posts.posts;
        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.lal = auth.user;
        $scope.images=[{src:'img1.png',title:'Pic 1'},{src:'img2.jpg',title:'Pic 2'},{src:'img3.jpg',title:'Pic 3'},{src:'img4.png',title:'Pic 4'},{src:'img5.png',title:'Pic 5'}];
        //setting title to blank here to prevent empty posts
        $scope.title = '';
        $scope.description = '';
        $scope.addPost = function() {
            if ($scope.title === '') {
                return;
            }
            console.log(auth.currentUser());
            var user =auth.getUser(auth.currentUser());
            console.log(user);
            posts.create({
                title : $scope.title,
                description : $scope.description,
                link : $scope.link,
                user : auth.currentUser()
            });
            //clear the values
            $scope.title = '';
            $scope.link = '';
        };

        $scope.upvote = function(post) {
            //our post factory has an upvote() function in it
            //we're just calling this using the post we have
            console.log('Upvoting:' + post.title + "votes before:" + post.upvotes);
            posts.upvote(post);
        };
        $scope.downvote = function(post) {
            posts.downvote(post);
        };
    }]);