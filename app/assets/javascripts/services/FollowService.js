function FollowService($http) {
    
    this.followLegislator = function(id) {
        return $http.post('/legislators/' + id + '/follow');
    }
}

angular
    .module('legislately')
    .service('FollowService', FollowService);