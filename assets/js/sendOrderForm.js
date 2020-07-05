$(document).ready(function () {

    // On ready, get menuItems.json loaded

    $.getJSON("assets/js/menuItems.json", function (data, status){

        console.log(status);
        console.log(data);
    });

    // General GUI for adding/removing items to the order on menu.html

    $("button").click(function () {

        //These two variables specify the button the user clicks and its relation to the input number.

        let $button = $(this);
        let selectorBtn = $button.siblings("input[type='number']");


        if ($button.text() == "+") {

            // Increments the number in the associated field by 1
            let counterVal = parseInt(selectorBtn.val());

            counterVal++;

            $(selectorBtn).val(counterVal);

        }
        else if ($button.text() == "-") {

            // Decrements the number in the associated field by 1

            let counterVal = parseInt(selectorBtn.val());

            counterVal--;

            $(selectorBtn).val(counterVal);
            if (counterVal < 0) {

                // In case input tries to cycle below 0, this function resets to 0, otherwise the price tally can end up in negative and we don't want to owe people money for sending them coffee! 

                $(selectorBtn).val(0);
            }

        }
        else {

            return;
        }

    })

    $("#buy-btn").click(function () {

        // Takes input from all inputs with a type of "number", discard all at value 0. 

        $("input[type='number']").each(function () {

            let elementID = $(this).attr("id");
            let elementVAL = $(this).val();

            if (elementVAL == 0) {

                // No action required if value is 0.
                return;
            }
            if (elementVAL >= 1) {

                // Outputs correctly for user-selections, next up is a way to go through the array using indexOf() in menuItems.json and output human-readable strings for each ID + prices, then tally the total before sending it via EmailJS.
                $("#confirm-send-modal").append("<p>You've ordered " + elementVAL + " of item " + elementID + "</p><br>");


            };

        });
    });
});