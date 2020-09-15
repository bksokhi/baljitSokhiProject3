$(document).ready(function () {
    
    
    // ● Create an event listener to listen for submit
    // ● Check if user input field is empty
    // ● Get the value of the user input and store in list item
    // ● Clear user input after submit
    // ● Target wall colour CSS selector to change in accordance to user input

    $('.wallForm').on('submit', function (event) {
        event.preventDefault();

        let userInput = $('input[name=wallColor]').val();
        
        $('.room').css({ "background": `${userInput}` });

        if (userInput.length !== 0) {
            $('li').text(`${userInput}`);
            $('li').css({ background: 'white', padding: '5px 10px' });
        } 
        

        // let countOfLi = $('li').length;
        // if (userInput.length !== 0 && countOfLi < 3) {
        //     $('ul').append(`<li>${userInput}</li>`);
        // }

        // if (countOfLi >= 3) {
        //     $('li:first').text(`${userInput}`);
        // } 
        $('input[name=wallColor').val('');
    })
    // Clear buttons on refresh
    // ● Furniture shade radio buttons, create event listener on change
    // ● Target furniture css selectors via background - color to change color upon button
    // click

    // $('input[value="furnitureLight"]').prop('checked', true);
    $('.furnitureForm input').on('click', function () {
        let furnitureShade = $('input[name=furnitureShade]:checked').val();

        if (furnitureShade == 'furnitureLight') {
            $('.left, .right, .middle, .bottomLeft, .bottomRight, .tableTop, .tableFront, .tableLeftLeg, .tableRightLeg').css({ "background": '#E8E3DD' });

        } else if (furnitureShade == 'furnitureMedium') {
            $('.left, .right, .middle, .bottomLeft, .bottomRight, .tableTop, .tableFront, .tableLeftLeg, .tableRightLeg').css({ "background": '#855E42' });

        } else if (furnitureShade == 'furnitureDark') {
            $('.left, .right, .middle, .bottomLeft, .bottomRight, .tableTop, .tableFront, .tableLeftLeg, .tableRightLeg').css({ "background": 'black' });
        }

    });
    // Clear buttons on refresh
    // ● Flooring radio buttons, create event listener on change
    // ● Target furniture css selectors via background - color to change color upon button
    // click

    // $('input[value="floorLight"]').prop('checked', true);
    $('.floorForm input').on('click', function () {
        let floorShade = $('input[name=floorShade]:checked').val();

        if (floorShade == 'floorLight') {
            $('.floor').css({ "background": '#edc592' })
            
        } else if (floorShade == 'floorMedium') {
            $('.floor').css({ "background": '#caa472' })

        } else if (floorShade == 'floorDark') {
            $('.floor').css({ "background": '#b6a188'})
        }
    });


});

