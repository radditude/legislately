function ShowController(info, votes) {
  var show = this;
  show.profile = info.data.results[0];
  console.log(show.profile);

  show.votes = votes.data.results;
  console.log(show.votes);

  // SCAPIService.getVotesByLegislator(show.profile.bioguide_id, 1)
  //   .then(function(res) {
  //     console.log(res);
  //   })
}

ShowController.$inject = ['info', 'votes'];

angular
  .module('legislately')
  .controller('ShowController', ShowController)
