function NewsfeedController(UserFactory) {
  var feed = this;
  feed.following;

  UserFactory.following().then(function(res) {
    feed.following = res.data.following;
  })
}

angular
  .module('legislately')
  .controller('NewsfeedController', NewsfeedController);
