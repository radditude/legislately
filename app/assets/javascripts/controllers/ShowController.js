function ShowController(votes, info, following, LegislatorFactory) {
  var show = this;
  show.following = false;

  show.profile = info.data;
  if (following.data[show.profile.member_id]) {
    show.following = true;
  }

  show.votes = votes.data.votes;
  console.log(show.votes);

  show.follow = function(id, action) {
    LegislatorFactory.follow(id).then(function(res) {
      show.following = true;
    });
  };
}

ShowController.$inject = ['votes', 'info', 'following', 'LegislatorFactory'];

angular
  .module('legislately')
  .controller('ShowController', ShowController)
