use("3x3Tournament")


//////////////////////////////
//          MEMBERS         //
//////////////////////////////

// Updates stats for selected player
db.members.updateOne(
    {"name": "Osi"},
    {$set: {
        "stats.points": 3,
        "stats.rebounds": 12,
        "stats.assists": 3
    }}
)

// Resets all points, rebounds and assists for the selected player
db.members.updateOne(
    {FIBA_member_id: 4865},
    {
      $set: {
        "stats.points": 0,
        "stats.rebounds": 0,
        "stats.assists": 0
      }
    }
)

// Updates a members phone number
db.members.updateOne(
  {FIBA_member_id: 4865},
  {$set: { phone_number: "083 222 7474"}}
)

// Updates a members height
db.members.updateOne(
    {FIBA_member_id: 4865},
    {$set: { height: 186}}
)

//////////////////////////////
//          TEAMS           //
//////////////////////////////

// Updates the coach for a team
db.teams.updateOne(
    {team_name: "SETU"},
    {$set: { coach_name: "Dean"}}
)

// Updates the matches played and total points scored
db.teams.updateOne(
  {team_name: "SETU"},
  {$inc: {"tournament_stats.matches_played": 1, "tournament_stats.total_points": 16}}
)

// Updates the team's wins and matches played
db.teams.updateOne(
    {team_name: "UL"},
    {$inc: 
        {
            "tournament_stats.matches_won": 1,
            "tournament_stats.matches_played": 1
        }
    }
)


// Updates the team's losses and matches played
db.teams.updateOne(
    {team_name: "UL"},
    {$inc: 
        {
            "tournament_stats.matches_lost": 1,
            "tournament_stats.matches_played": 1
        }
    }
)

// Resets teams stats
db.teams.updateOne(
    {team_name: "UL"},
    {$set: {
        "tournament_stats.matches_played": 0,
        "tournament_stats.matches_won": 0,
        "tournament_stats.matches_lost": 0,
        "tournament_stats.total_points": 0
      }
    }
)
  


//////////////////////////////
//          MATCHES         //
//////////////////////////////

// Updates the points, rebounds and assists for a selected player in a game
db.matches.updateOne(
    {game_number: 3, "Scoresheet.name": "Matthew"},
    {$set: {
        "Scoresheet.$.points": 12,
        "Scoresheet.$.assists": 3,
        "Scoresheet.$.rebounds": 2
    }}
)

// Updates the final score of a game
db.matches.updateOne(
    {game_number: 1},
    {$set: {final_score: "21-10"}}
)

// Updates the team in case a team requires a sub, player gets added
db.matches.updateOne(
    {game_number: 1},
    {$push: {Scoresheet:
        {name: "Niall",
        points: 5,
        rebounds: 3,
        assists: 2
    }}}
)

// Updates the coach for game in case main coach isn't available
db.matches.updateOne(
    {game_number: 2, first_team: "SETU"},
    {$set: {coach_name: "Dean"}}
)