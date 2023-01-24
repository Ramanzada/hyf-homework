const spiritAnimalNames = [ "Fish", "Fig","Ant", "Bear", "Frog", "Rabbit", "Giraffe", "Elephant", "Bat", "Polar"];
                          
var heading = document.createElement("h1");
    heading.setAttribute("id", "heading");
    document.body.appendChild(heading);
    heading.innerText = "Spirit Animal Name Generator";

var p = document.createElement("p");
    p.setAttribute("class", "text");
    document.body.appendChild(p);
    p.innerText = "(Enter your name to get your Spirit Animal)";

function spiritAnimalNameGenerator() {
    
    var input = document.getElementById("firstName").value;
        if(input === "") {
            alert("Please enter your first name");
            return;
        }
        else {
        let  randomIndex = Math.floor(Math.random() * 10);
        var spiritAnimalName = spiritAnimalNames[randomIndex];
        var output = document.getElementById("spiritAnimalNameOutput")
        output.innerText = "Name : " + input +  " - " + spiritAnimalName;
        }
}