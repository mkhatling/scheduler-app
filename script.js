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
let time = DateTime.now().hour;
console.log(time);
$(".time-block").each(function() {
    let timeRow = parseInt($(this).attr("id").split(""));
    console.log(timeRow);
    if (timeRow < time) {
        $(".time-block").addClass("past");
    } else if (timeRow === time) {
        $(".time-block").addClass("present");
    } else {
        $(".time-block").addClass("future");
    }
})
}
colorDisplay();

//function to save to local storage when save button is clicked

// let saveButton = document.getElementById("saveBtn");

// saveButton.addEventListener("click", function(event) {
//     event.preventDefault();

    
// })

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