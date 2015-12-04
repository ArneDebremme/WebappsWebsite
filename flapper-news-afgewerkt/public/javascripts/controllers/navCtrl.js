/**
 * Created by BREMME on 4/12/15.
 */
app.controller('NavCtrl', ['$scope', 'auth',
    function($scope, auth) {
        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.currentUser = auth.currentUser;
        $scope.logOut = auth.logOut;
    }]);