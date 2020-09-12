$(document).ready(function () {
    
  
    // ● Create an event listener to listen for submit
    // ● Check if user input field is empty
    // ● Get the value of the user input and store in list item
    // ● Clear user input after submit
    // ● Target wall colour CSS selector to change in accordance to user input

    $('.wallForm').on('submit', function (event) {
        event.preventDefault();

        let userInput = $('input').val();
        
        $('.wall').css({ "background": `${userInput}` });

        if (userInput.length !== 0) {
            $('li').text(`${userInput}`);
        }

        // let countOfLi = $('li').length;
        // if (userInput.length !== 0 && countOfLi < 3) {
        //     $('ul').append(`<li>${userInput}</li>`);
        // }

        // if (countOfLi >= 3) {
        //     $('li:first').text(`${userInput}`);
        // } 
        $('input').val('');
    })
    
    // ● Furniture shade radio buttons, create event listener on change
    // ● Target furniture css selectors via background - color to change color upon button
    // click

    $('.furnitureForm').on('change', function () {
        
    })


});


// ● Flooring radio buttons, create event listener on change
// ● Target furniture css selectors via background - color to change color upon button
// click