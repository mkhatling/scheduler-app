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

let saveButton = document.getElementById("saveBtn");

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    
})

// function savedItems(event) {
//     event.preventDefault();
//     let saveButton = $(".saveBtn");
//     saveButton.addEventListener("click");
//     localStorage.setItem("text", "");
//     console.log(localStorage);
//     document.getElementById("saved-text").innerHTML = localStorage.getItem("text");
//     console.log(savedItems);
//     return savedItems()
// }
// saveButton.addEventListener("click", function(){
//     localStorage.setItem("text", "");
//     document.getElementById("saved-text").innerHTML = localStorage.getItem("text");
// })