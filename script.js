const apiKey = "d4e7c8aa2aa84b028a19dc34294e2d04";

fetch("https://v3.football.api-sports.io/fixtures?live=all",{

headers:{
"x-apisports-key":apiKey
}

})

.then(response=>response.json())

.then(data=>{

let matches=document.getElementById("matches");

data.response.forEach(match=>{

let home=match.teams.home.name;
let away=match.teams.away.name;
let score=match.goals.home+" - "+match.goals.away;

matches.innerHTML+=`
<div class="match">
${home} ${score} ${away}
</div>
`;

});

});