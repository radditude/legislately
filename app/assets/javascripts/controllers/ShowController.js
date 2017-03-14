function ShowController(info, votes, FollowService) {
  var show = this;
  show.profile = info.data.results[0];
  console.log(show.profile);

  show.votes = votes.data.results;
  console.log(show.votes);
  
  show.follow = function(id) {
    FollowService.followLegislator(id).then(function(res) {
      console.log(res);
    });
  };
}

ShowController.$inject = ['info', 'votes', 'FollowService'];

angular
  .module('legislately')
  .controller('ShowController', ShowController)
