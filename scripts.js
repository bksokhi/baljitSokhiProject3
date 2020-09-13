$(document).ready(function () {
    
  
    // ● Create an event listener to listen for submit
    // ● Check if user input field is empty
    // ● Get the value of the user input and store in list item
    // ● Clear user input after submit
    // ● Target wall colour CSS selector to change in accordance to user input

    $('.wallForm').on('submit', function (event) {
        event.preventDefault();

        let userInput = $('input[name=wallColor]').val();
        
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
        $('input[name=wallColor').val('');
    })
    
    // ● Furniture shade radio buttons, create event listener on change
    // ● Target furniture css selectors via background - color to change color upon button
    // click

    $('.furnitureForm input').on('click', function () {
        let furnitureShade = $('input[name=furnitureShade]:checked').val();

        if (furnitureShade == 'furnitureLight') {
            $('.left, .right, .middle, .bottomLeft, .bottomRight, .tableTop, .tableFront, .tableLeftLeg, .tableRightLeg').css({ "background": 'grey' });

        } else if (furnitureShade == 'furnitureMedium') {
            $('.left, .right, .middle, .bottomLeft, .bottomRight, .tableTop, .tableFront, .tableLeftLeg, .tableRightLeg').css({ "background": 'brown' });

        } else if (furnitureShade == 'furnitureDark') {
            $('.left, .right, .middle, .bottomLeft, .bottomRight, .tableTop, .tableFront, .tableLeftLeg, .tableRightLeg').css({ "background": 'black' });
        }

    });

    // ● Flooring radio buttons, create event listener on change
    // ● Target furniture css selectors via background - color to change color upon button
    // click

    $('.floorForm input').on('click', function () {
        let floorShade = $('input[name=floorShade]:checked').val();

        if (floorShade == 'floorLight') {
            $('.floor').css({ "background": '#f2e3b3' })
            
        } else if (floorShade == 'floorMedium') {
            $('.floor').css({ "background": 'burlywood' })

        } else if (floorShade == 'floorDark') {
            $('.floor').css({ "background": '#4a3d24'})
        }
    });


});

