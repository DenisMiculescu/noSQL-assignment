use("3x3Tournament")
  

//////////////////////////////
//          MEMBERS         //
//////////////////////////////

// Find all members based on a team
db.members.find({team_name: "SETU"})

// Find all coaches
db.members.find({"position": "Coach"})

// Find players that are over 190cm with over 10 total rebounds
db.members.find(
    {height: {$gt: 190}, "stats.rebounds": {$gt: 10}},
    {_id: 0, name: 1, team_name: 1, height: 1, "stats.rebounds": 1}
  )

// Find players with over 20 total points
db.members.find(
    {"stats.points": {$gt: 20}, position: {$ne: "Coach"}},
    {_id: 0, name: 1, team_name: 1, "stats.points": 1}
)



//////////////////////////////
//          TEAMS           //
//////////////////////////////

// Finds team based on the team's ID
db.teams.find({team_id: 249})

// Find teams with more than 50 total points
db.teams.find(
    {"tournament_stats.total_points": {$gt: 50}},
    {_id: 0, team_name: 1, "tournament_stats.total_points": 1}
)

// Find teams with over 2 wins
db.teams.find(
    {"tournament_stats.matches_won": {$gt: 2}},
    {_id: 0, team_name: 1, "tournament_stats.matches_won": 1}
  )

  

//////////////////////////////
//          MATCHES         //
//////////////////////////////

// Find matches that 'Denis' played in
db.matches.find({
    "Scoresheet.name": "Denis" 
})

// Find matches that 'Paul Murphy' refereed
db.matches.find(
    {"referees": "Paul Murphy"},
    {_id:0, Scoresheet:0 }
)

// Find all players that played in game '3' (projection)
db.matches.findOne(
    {game_number: 3},
    {"Scoresheet.name": 1, _id: 0})

// Find players that scored 10 or more points in a game
db.matches.find(
    {"Scoresheet": {$elemMatch: {"points": {$gte: 10}}}},
    {"Scoresheet.$": 1, _id: 0, game_number: 1}
)