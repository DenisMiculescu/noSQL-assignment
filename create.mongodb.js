use("3x3Tournament")


//////////////////////////////////////
//              MEMBERS             //
//////////////////////////////////////

//////////////////////////////////
//          SETU's Team         //
//////////////////////////////////

db.members.insertOne({
    FIBA_member_id:4865,
    team_name:"SETU",
    name:"Denis",
    jersey_number:9,
    position:"SG",
    height:184,
    phone_number:"085 555 5555",
    date_of_birth:"23/05/2002",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:3152,
    team_name:"SETU",
    name:"Osi",
    jersey_number:15,
    position:"C",
    height:192,
    phone_number:"086 666 6666",
    date_of_birth:"11/08/2001",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:1673,
    team_name:"SETU",
    name:"Jack",
    jersey_number:7,
    position:"PG",
    height:186,
    phone_number:"087 777 7777",
    date_of_birth:"17/09/1998",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:4267,
    team_name:"SETU",
    name:"Mick",
    position:"Coach",
    phone_number:"089 999 9999",
    date_of_birth:"01/04/1954",
    qualification:"FIBA Level 3 Coaching Certification"
})



//////////////////////////////////
//          UCC's Team          //
//////////////////////////////////

db.members.insertOne({
    FIBA_member_id:1997,
    team_name:"UCC",
    name:"Sean",
    jersey_number:3,
    position:"SG",
    height:178,
    phone_number:"083 333 3333",
    date_of_birth:"27/11/2002",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:2276,
    team_name:"UCC",
    name:"Colm",
    jersey_number:10,
    position:"PF",
    height:188,
    phone_number:"085 544 4444",
    date_of_birth:"07/02/2001",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:4067,
    team_name:"UCC",
    name:"Aaron",
    jersey_number:8,
    position:"PG",
    height:180,
    phone_number:"085 888 8888",
    date_of_birth:"27/06/2000",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:4032,
    team_name:"UCC",
    name:"Gary",
    position:"Coach",
    phone_number:"083 777 7777",
    date_of_birth:"05/12/1975",
    qualification:"FIBA Level 2 Coaching Certification"
})



//////////////////////////////////
//          NUIG's Team         //
//////////////////////////////////

db.members.insertOne({
    FIBA_member_id:1077,
    team_name:"NUIG",
    name:"Matthew",
    jersey_number:11,
    position:"PG",
    height:180,
    phone_number:"089 333 3333",
    date_of_birth:"27/03/2001",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:2970,
    team_name:"NUIG",
    name:"James",
    jersey_number:10,
    position:"SF",
    height:185,
    phone_number:"085 544 6666",
    date_of_birth:"07/07/2001",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:1194,
    team_name:"NUIG",
    name:"Luke",
    jersey_number:21,
    position:"C",
    height:194,
    phone_number:"087 866 8888",
    date_of_birth:"04/01/2000",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:4475,
    team_name:"NUIG",
    name:"Jim",
    position:"Coach",
    phone_number:"083 722 7111",
    date_of_birth:"29/10/1989",
    qualification:"FIBA Level 2 Coaching Certification"
})



//////////////////////////////////
//          UL's Team         //
//////////////////////////////////

db.members.insertOne({
    FIBA_member_id:2884,
    team_name:"UL",
    name:"Eoghan",
    jersey_number:5,
    position:"PG",
    height:175,
    phone_number:"089 444 7777",
    date_of_birth:"22/04/2003",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:2719,
    team_name:"UL",
    name:"Darragh",
    jersey_number:7,
    position:"SG",
    height:185,
    phone_number:"083 544 9966",
    date_of_birth:"16/02/2003",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:3004,
    team_name:"UL",
    name:"Cameron",
    jersey_number:14,
    position:"C",
    height:196,
    phone_number:"087 221 1112",
    date_of_birth:"20/08/1999",
    stats: {
        points:0,
        rebounds:0,
        assists:0
    }
})

db.members.insertOne({
    FIBA_member_id:4179,
    team_name:"UL",
    name:"John",
    position:"Coach",
    phone_number:"085 116 6661",
    date_of_birth:"20/05/1992",
    qualification:"FIBA Level 1 Coaching Certification"
})

//////////////////////////////////////
//              TEAMS               //
//////////////////////////////////////

db.teams.insertOne({
    team_id:249,
    team_name:"SETU",
    home_colour:"Blue",
    away_colour:"White",
    coach_name:"Mick",
    tournament_stats: {
        matches_played:0,
        matches_won:0,
        matches_lost:0,
        total_points:0
    }
})

db.teams.insertOne({
    team_id:416,
    team_name:"UCC",
    home_colour:"Black",
    away_colour:"White",
    coach_name:"Gary",
    tournament_stats: {
        matches_played:0,
        matches_won:0,
        matches_lost:0,
        total_points:0
    }
})

db.teams.insertOne({
    team_id:182,
    team_name:"NUIG",
    home_colour:"Maroon",
    away_colour:"White",
    coach_name:"Jim",
    tournament_stats: {
        matches_played:0,
        matches_won:0,
        matches_lost:0,
        total_points:0
    }
})

db.teams.insertOne({
    team_id:210,
    team_name:"UL",
    home_colour:"Green",
    away_colour:"White",
    coach_name:"John",
    tournament_stats: {
        matches_played:0,
        matches_won:0,
        matches_lost:0,
        total_points:0
    }
})



//////////////////////////////////////
//              MATCHES             //
//////////////////////////////////////

db.matches.insertOne({
    game_number: 1,
    first_team: "SETU",
    second_team: "UCC",
    final_score: "21-15",
    date: "22/11/23",
    hall_name: "SETU Arena",
    referees: ["Paul Murphy", "Tom Johnson"],
    Scoresheet: [
        {
            name: "Denis",
            points: 5,
            rebounds: 2,
            assists: 3
        },
        {
            name: "Osi",
            points: 8,
            rebounds: 8,
            assists: 1
        },
        {
            name: "Jack",
            points: 8,
            rebounds: 3,
            assists: 4
        },
        {
            name: "Sean",
            points: 11,
            rebounds: 1,
            assists: 2
        },
        {
            name: "Colm",
            points: 2,
            rebounds: 4,
            assists: 2
        },
        {
            name: "Aaron",
            points: 2,
            rebounds: 3,
            assists: 1
        }
    ]
})

db.matches.insertOne({
    game_number: 2,
    first_team: "UL",
    second_team: "NUIG",
    final_score: "21-9",
    date: "22/11/23",
    hall_name: "UL Sports Centre",
    referees: ["Tom Johnson", "Kevin Andrews"],
    Scoresheet: [
        {
            name: "Eoghan",
            points: 9,
            rebounds: 4,
            assists: 2
        },
        {
            name: "Darragh",
            points: 8,
            rebounds: 5,
            assists: 3
        },
        {
            name: "Cameron",
            points: 4,
            rebounds: 2,
            assists: 1
        },
        {
            name: "Matthew",
            points: 6,
            rebounds: 1,
            assists: 1
        },
        {
            name: "James",
            points: 2,
            rebounds: 4,
            assists: 0
        },
        {
            name: "Luke",
            points: 1,
            rebounds: 3,
            assists: 0
        }
    ]
})

db.matches.insertOne({
    game_number: 3,
    first_team: "NUIG",
    second_team: "SETU",
    final_score: "21-20",
    date: "23/11/23",
    hall_name: "Kingfisher Sports Hall",
    referees: ["Kevin Andrews", "Paul Murphy"],
    Scoresheet: [
        {
            name: "Matthew",
            points: 9,
            rebounds: 2,
            assists: 4
        },
        {
            name: "James",
            points: 6,
            rebounds: 5,
            assists: 2
        },
        {
            name: "Luke",
            points: 6,
            rebounds: 6,
            assists: 2
        },
        {
            name: "Denis",
            points: 4,
            rebounds: 3,
            assists: 2
        },
        {
            name: "Osi",
            points: 2,
            rebounds: 4,
            assists: 0
        },
        {
            name: "Jack",
            points: 14,
            rebounds: 3,
            assists: 1
        }
    ]
})


db.matches.insertOne({
    game_number: 4,
    first_team: "UCC",
    second_team: "UL",
    final_score: "17-21",
    date: "23/11/23",
    hall_name: "Mardyke Sports Hall",
    referees: ["Paul Murphy", "Kevin Andrews"],
    Scoresheet: [
        {
            name: "Sean",
            points: 8,
            rebounds: 2,
            assists: 2
        },
        {
            name: "Colm",
            points: 6,
            rebounds: 3,
            assists: 1
        },
        {
            name: "Luke",
            points: 3,
            rebounds: 5,
            assists: 2
        },
        {
            name: "Eoghan",
            points: 11,
            rebounds: 4,
            assists: 1
        },
        {
            name: "Darragh",
            points: 9,
            rebounds: 3,
            assists: 2
        },
        {
            name: "Luke",
            points: 1,
            rebounds: 5,
            assists: 4
        }
    ]
})


db.matches.insertOne({
    game_number: 5,
    first_team: "SETU",
    second_team: "UL",
    final_score: "21-18",
    date: "24/11/23",
    hall_name: "SETU Arena",
    referees: ["Kevin Andrews", "Tom Johnson"],
    Scoresheet: [
        {
            name: "Denis",
            points: 8,
            rebounds: 3,
            assists: 1
        },
        {
            name: "Osi",
            points: 6,
            rebounds: 8,
            assists: 5
        },
        {
            name: "Jack",
            points: 7,
            rebounds: 6,
            assists: 2
        },
        {
            name: "Eoghan",
            points: 6,
            rebounds: 3,
            assists: 2
        },
        {
            name: "Darragh",
            points: 4,
            rebounds: 4,
            assists: 0
        },
        {
            name: "Cameron",
            points: 8,
            rebounds: 3,
            assists: 1
        }
    ]
})


db.matches.insertOne({
    game_number: 6,
    first_team: "NUIG",
    second_team: "UCC",
    final_score: "21-10",
    date: "24/11/23",
    hall_name: "Kingfisher Sports Hall",
    referees: ["Tom Johnson", "Paul Murphy"],
    Scoresheet: [
        {
            name: "Matthew",
            points: 7,
            rebounds: 3,
            assists: 2
        },
        {
            name: "James",
            points: 7,
            rebounds: 6,
            assists: 3
        },
        {
            name: "Luke",
            points: 7,
            rebounds: 4,
            assists: 1
        },
        {
            name: "Sean",
            points: 8,
            rebounds: 2,
            assists: 0
        },
        {
            name: "Colm",
            points: 0,
            rebounds: 3,
            assists: 2
        },
        {
            name: "Aaron",
            points: 2,
            rebounds: 2,
            assists: 0
        }
    ]
})