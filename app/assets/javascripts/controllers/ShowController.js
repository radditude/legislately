function ShowController(votes, info, LegislatorFactory) {
  var show = this;

  show.profile = info.data;
  console.log(show.profile);

  show.votes = votes.data.votes;
  console.log(show.votes);

  show.follow = function(id) {
    LegislatorFactory.follow(id).then(function(res) {
      console.log(res);
    });
  };
}

ShowController.$inject = ['votes', 'info', 'LegislatorFactory'];

angular
  .module('legislately')
  .controller('ShowController', ShowController)
