function ShowController(info, votes, LegislatorFactory) {
  var show = this;
  show.profile = info.data;
  console.log(show.profile);

  show.votes = votes.data;
  console.log(show.votes);

  show.follow = function(id) {
    LegislatorFactory.follow(id).then(function(res) {
      console.log(res);
    });
  };
}

ShowController.$inject = ['info', 'votes', 'LegislatorFactory'];

angular
  .module('legislately')
  .controller('ShowController', ShowController)
