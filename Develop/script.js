//get luxon linked
let DateTime = luxon.DateTime;


//function to display time at top of page
function displayTime() {
    const currentTime = DateTime.now().toLocaleString({weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'});
    $("#currentDay").text(currentTime);
}
setInterval(displayTime, 1000);
displayTime();

//function to change colors of timeblocks based on time
    //gray for past, red for current, green for future
function colorDisplay () {
//variable can be used for present time using class present
let time = DateTime.now();
//variable for past time using class past
let pastTime = DateTime.now().minus({hours: 1 }).toObject();
//variable for future time using class future
let futureTime = DateTime.now().plus({ hours: 1 }).toObject();

if (time === true){
    $("textarea").css(".present");
} 
console.log(time);
console.log(pastTime);
console.log(futureTime);
}

colorDisplay();

//function to save to local storage when save button is clicked
//need to generate buttons

let saveButton = document.createElement('button');
saveButton.innerHTML = "save";
saveButton.name = "saveBtn";
document.td.appendChild(saveButton);

console.log(saveButton);

// function saveBtnHandler () {


// }