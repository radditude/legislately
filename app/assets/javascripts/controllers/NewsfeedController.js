function NewsfeedController(UserFactory) {
  var feed = this;
  feed.following;

  UserFactory.following.then(function(res) {
    console.log(res)
  })
}

angular
  .module('legislately')
  .controller('NewsfeedController', NewsfeedController);
