function NewsfeedController(UserFactory, LegislatorFactory, following, $q) {
  var feed = this;
  feed.following = following.data;
  feed.activity = [];
  feed.actualData;
  feed.loading = true;

  function getData() {
    var deferred = $q.defer();
    var callsComplete = 0;

    Object.keys(feed.following).forEach(function(id) {
      LegislatorFactory.votes(id).then(function(res) {
        feed.activity.push(res.data.votes);
        callsComplete += 1;

        if (callsComplete === Object.keys(feed.following).length) {
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
    feed.loading = false;
  })

}

angular
  .module('legislately')
  .controller('NewsfeedController', NewsfeedController);
