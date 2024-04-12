// calculator script


// get the display element
var display = document.querySelector('input[name="display"]');

// get the buttons
var buttons = document.querySelectorAll('input[type="button"]');

// loop through the buttons
for (var i = 0; i < buttons.length; i++) {

    // add a click event listener to each button
    buttons[i].addEventListener('click', function() {

        // get the value of the button
        var value = this.value;

        // add the value to the display
        display.value += value;

    });


}


