function NewsfeedController(UserFactory, LegislatorFactory, following, $q) {
  var feed = this;
  feed.following = following.data.following;
  feed.activity = [];

  feed.following.forEach(function(id, index) {
    var lastArray = [];
    var thisArray = [];
    var a = 0;
    var b = 0;
    var total;
    LegislatorFactory.votes(id).then(function(res) {
      // thisArray = res.data.votes;
      // feed.activity = lastArray.concat(thisArray);
      // lastArray = feed.activity;
      b = index;
      total = a + b;
      a = total;
    })
    console.log(total);
  })
  // UserFactory.following().then(function(res) {
  //   feed.following = res.data.following;
  //   feed.following.forEach(function(id, index) {
  //     LegislatorFactory.votes(id).then(function(res) {
  //       feed.activity.push(res.data.votes);
  //       console.log(index);
  //     });
  //   });
  // })
}

angular
  .module('legislately')
  .controller('NewsfeedController', NewsfeedController);
