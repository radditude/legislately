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
    LegislatorFactory.follow(id, action).then(function(res) {
      if (res.data.follow === true) {
        show.following = true;
      } else if (res.data.follow === false) {
        show.following = false;
      }
    });
  };
}

ShowController.$inject = ['votes', 'info', 'following', 'LegislatorFactory'];

angular
  .module('legislately')
  .controller('ShowController', ShowController)
