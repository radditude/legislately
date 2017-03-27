function LegislatorFactory($http) {
  return {
    findAddress: findAddress,
    follow: followLegislator,
    votes: getVotes,
    info: getInfo
  }

    function followLegislator(id) {
        return $http.post('/legislators/' + id + '/follow');
    }

    function getVotes(id) {
      return $http.get('/legislators/' + id + '/votes');
    }

    function getInfo(id) {
      return $http.get('/legislators/' + id);
    }

    function findAddress(address) {
      var params = {
        address: address
      };
      return $http.post('/locateaddress', params);
    }
}

angular
    .module('legislately')
    .factory('LegislatorFactory', LegislatorFactory);
