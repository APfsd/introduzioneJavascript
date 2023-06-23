
    var score = {
      userscore: 0,
      cpuScore: 0,      
    }

    var userPick;
    var cpuPick;

    var allOptions = [
        {
            name: "sasso",
            image: "assets/sasso.png"
        },
        {
            name: "carta",
            image: "assets/carta.png"
        },
        {
            name: "forbice",
            image: "assets/forbice.png"
        }
    ]

    var possibleUserPicks = document.getElementsByClassName("user-choice");

    for (var i = 0; i < possibleUserPicks.length; i++){
        possibleUserPicks[i].addEventListener('click', onUserPick);
    }
    function onUserPick(){
        userPick = this.dataset.name;
            generatecpuPick();

            var cpuPickImage = "<img src='" + cpuPick.image + "'/>";
            var cpuPickText = "<h3>" + cpuPick.name + "</h3>";

            document.getElementById("computer-choice").innerHTML = cpuPickImage + cpuPickText;
            document.getElementById("result").innerHTML = checkwhowon();

            document.getElementById("player-score").innerHTML =score.userscore;
            document.getElementById("cpu-score").innerHTML = score.cpuScore;


    }

    function generatecpuPick(){
       cpuPick = allOptions[Math.floor (Math.random() * allOptions.length)]
       
    }
     
     generatecpuPick();

    function checkwhowon(){
     
    if(userPick == cpuPick.name){
        return "Hai Pareggiato";
    } else {
      if(userPick == "sasso"){
            if (cpuPick.name == "forbice") {
                score.userscore++;
                return "Hai Vinto!";
            } else {
                score.cpuScore++;
                return "Hai perso!";
            }
      } if (userPick == "forbice") {
        if (cpuPick.name == "carta") {
            score.userscore++;
                return "Hai Vinto!";
            } else {
                score.cpuScore++;
                return "Hai perso!";
            }
      }  if (userPick == "carta") {
        if (cpuPick.name == "sasso") {
            score.userscore++;
                return "Hai Vinto!";
            } else {
                score.cpuScore++;
                return "Hai perso!";
            }
      } 
      
      
     }
}