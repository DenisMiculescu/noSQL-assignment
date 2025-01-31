use("3x3Tournament")


//////////////////////////////
//          MEMBERS         //
//////////////////////////////

// Delete all members
db.members.deleteMany({})

// Deletes all members on a team
db.members.deleteMany({"team_name": "UCC"})

// Deletes a member based on their FIBA number
db.members.deleteOne({FIBA_member_id: 4865})

// Deletes a coach if they get fired
db.members.deleteOne({name: "Mick", position: "Coach"})


//////////////////////////////
//          TEAMS           //
//////////////////////////////

// Delete all teams
db.teams.deleteMany({})

// Deletes a team with a specific id
db.teams.deleteOne({team_id: 999})

// Deletes teams with no matches won as they might be knocked out
db.teams.deleteMany({
    "tournament_stats.matches_won": 0
})


//////////////////////////////
//          MATCHES         //
//////////////////////////////

// Delete all matches
db.matches.deleteMany({})

// Delete match based off game number
db.matches.deleteOne({game_number: 2})





