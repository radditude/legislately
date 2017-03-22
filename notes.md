https://congress.api.sunlightfoundation.com/votes?fields=breakdown,bill_id,nomination_id,chamber,result,question,vote_type,voters.C001075,voters.K000393,voters.R000588&voter_ids.C001075&voter_ids.K000393&voter_ids.R000588&voted_at__gte=2017-03-15T00:00:00Z&order=voted_at

(ProPublica API update)[https://www.propublica.org/nerds/item/congress-api-update]
(Github Issues covering changes)[https://github.com/propublica/congress-api-docs/issues]

3 separate issues:
- converting sunlight API calls to propublica API calls
- switching the locate mechanism to use the Google Civic API
- moving all API calls to the backend
- 

API calls:
GCD - https://www.googleapis.com/civicinfo/v2/representatives?key=key&address=2732%20Orleans%20Ave%20New%20Orleans%20LA%2070119&fields=divisions

PP - Header { X-API-Key: key }

get senators for given state
https://api.propublica.org/congress/v1/members/senate/{state}/current.json

get house rep for given district
https://api.propublica.org/congress/v1/members/house/{state}/{district}/current.json

get votes for rep by ID
https://api.propublica.org/congress/v1/members/{member-id}/votes.json

get bill activity for rep by ID & type (type can be introduced or updated)
https://api.propublica.org/congress/v1/members/{member-id}/bills/{type}.json

