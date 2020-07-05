$(document).ready(function(){

    // General GUI for adding/removing items to the order

        $("button").click(function(){

        let $button = $(this);
        let selectorBtn = $button.siblings("input[type='number']");


        if($button.text() == "+"){
            
            // Increments the number in the associated field by 1
            let counterVal = parseInt(selectorBtn.val());

            counterVal++;

           $(selectorBtn).val(counterVal);            
          
           

        }
        else if($button.text() == "-"){

            // Decrements the number in the associated field by 1
            
            let counterVal = parseInt(selectorBtn.val());

            counterVal--;

            $(selectorBtn).val(counterVal);
            if(counterVal < 0){
                
                // In case input tries to cycle below 0, this function resets to 0, otherwise the price tally can end up in negative and we don't want to owe people money for sending them coffee! 

                $(selectorBtn).val(0);
            }

        }
        else{

            // Debugging statements, we'll clean it up before we deploy

            let debug_log = selectorBtn.val()+$button;

            console.log("Neither value assigned to the button pressed!");
            console.log(debug_log);
            

        }

    })

    $("#buy-btn").click(function(){
            
    // orderTotal is an array with the specific items and cost of the order. On pressing the 'Buy' button, it tallies all the input-values and presents the cost. Actual prices are stored in a separate object, menuItems.JSON, to avoid clutter.

    let orderTotal = {
        "items": [
            {

            }
        ],
        "delivery": [{

        }],
        "totalCost": [{

        }
    ]
    }; 

    // To-do here: Take input from all inputs with a type of "number", discard all at 0, push all at 1 or higher into the orderTotal array.

    });
});