function ShowController(votes, info, following, LegislatorFactory) {
  var show = this;
  show.following = false;
  show.search;

  show.profile = info.data;
  if (following.data[show.profile.member_id]) {
    show.following = true;
  }

  if (show.profile.roles[0].senate_class === "3") {
    show.profile.next_election = 2022;
  } else if (show.profile.roles[0].senate_class === "2") {
    show.profile.next_election = 2020;
  } else if (show.profile.roles[0].senate_class === "1") {
    show.profile.next_election = 2018;
  } else {
    show.profile.next_election = 2018;
  }

  show.votes = votes.data.votes;
  console.log(show.profile);

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
