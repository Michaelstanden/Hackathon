$(document).ready(function(){
    
    // orderTotal is an array with the specific items and cost of the order.

    let orderTotal = {}; 

    // General GUI for adding/removing items to the order

        $("button").click(function(){

        let $button = $(this);
        let originalVal = $button.siblings("input[type='number']").val();

        if($button.text() == "+"){

            let newVal = originalVal.val();

            console.log("Plus!")
            
            

        }
        else if($button.text() == "-"){

            let thisInputVal = $button.attr("class");            
            

            console.log("Minus!")
        }
        else{

            console.log("Neither value assigned to the button pressed!");
            console.log(debug_log);
            
        }

    })

    $("#buy-btn").click(function(){



    });
});