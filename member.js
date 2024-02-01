function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/member/member.html',
        scope: {
            member: '='
        },
        controller: function($scope) {
            $scope.skills = $scope.member.skills;
        }
    }
}