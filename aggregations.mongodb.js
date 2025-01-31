use("3x3Tournament")

//////////////////////////////
//          MEMBERS         //
//////////////////////////////

// Counts the number of players per position
db.members.aggregate([ 
    {$group: {_id: "$position", count: {$sum: 1}}},
    {$project: {position: "$_id", count: 1, _id: 0}} 
])

// Gets the tallest and shortest players
db.members.aggregate([
    {$match: {position: {$ne: "Coach"}}},
    {$sort: {height: -1}},
    {$group: {
        _id: null,
        tallest_player: {$first: "$name"},
        tallest_height: {$first: "$height"},
        shortest_player: {$last: "$name"},
        shortest_height: {$last: "$height"}
      }
    },
    {$project: {_id: 0}}
])

// Gets average height per position
db.members.aggregate([
    {$match: {position: {$ne: "Coach"}}},
    {$group: {
        _id: "$position",
        average_height: {$avg: "$height"}
      }
    },
    {$project: {
        position: "$_id",
        average_height: {$round: ["$average_height", 2]},
        _id: 0
      }
    }
])


//////////////////////////////
//          TEAMS           //
//////////////////////////////

// Returns team with most wins
db.teams.aggregate([
    {$sort: {"tournament_stats.matches_won": -1}},
    {$limit: 1},
    {$project: {
        team_name: 1,
        matches_won: "$tournament_stats.matches_won",
        _id: 0
      }
    }
])

// Sorts teams based on matches won (Standings)
db.teams.aggregate([
    {$sort: {"tournament_stats.matches_won": -1}},
    {$project: {
        team_name: 1,
        "tournament_stats.matches_played": 1,
        "tournament_stats.matches_won": 1,
        "tournament_stats.matches_lost": 1,
        _id:0
      }
    }
])



//////////////////////////////
//          MATCHES         //
//////////////////////////////

// Returns highest scorer in each game
db.matches.aggregate([
    {$unwind: "$Scoresheet"},
    {$group: {
        _id: {game_number: "$game_number", player_name: "$Scoresheet.name"},
        max_points: {$max: "$Scoresheet.points"}
      }
    },
    {$sort: {"_id.game_number": 1, max_points: -1}},
    {$group: {
        _id: "$_id.game_number",
        top_scorer: {$first: "$_id.player_name"},
        max_points: {$first: "$max_points"}
      }
    },
    {$sort: {_id: 1}},
    {$project: {
        game_number: "$_id",
        top_scorer: 1,
        max_points: 1,
      }
    }
]) 

// Returns most assists in all games
db.matches.aggregate([
    {$unwind: "$Scoresheet"},
    {$group: {
        _id: "$Scoresheet.name",
        total_assists: {$sum: "$Scoresheet.assists"}
      }
    },
    {$sort: {total_assists: -1}},
    {$project: {
        player_name: "$_id",
        total_assists: 1,
        _id: 0
      }
    }
])

// Returns most rebounds in all games
db.matches.aggregate([
    {$unwind: "$Scoresheet"},
    {$group: {
        _id: "$Scoresheet.name",
        total_rebounds: {$sum: "$Scoresheet.rebounds"}
      }
    },
    {$sort: {total_rebounds: -1}},
    {$project: {
        player_name: "$_id",
        total_rebounds: 1,
        _id: 0
      }
    }
])