function NewsfeedController(UserFactory, LegislatorFactory, following, $q) {
  var feed = this;
  feed.following = following.data.following;
  feed.activity = [];
  feed.actualData;

  function getData() {
    var deferred = $q.defer();
    var callsComplete = 0;

    feed.following.forEach(function(id, index) {
      LegislatorFactory.votes(id).then(function(res) {
        feed.activity.push(res.data.votes);
        callsComplete += 1;

        if (callsComplete === feed.following.length) {
          deferred.resolve();
        }
      })
    })

    return deferred.promise;
  }

  getData().then(function(res) {
    feed.actualData = feed.activity.reduce((a,b) => {
      return a.concat(b);
    });
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
