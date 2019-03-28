


$("button").click(function() {
       var Age  = $("#number2").val();
    var bacon = $("#number1").val();
    
    if (Age > 18 && bacon === "no" ) {
$(".results").text("your waddles! You're cute as a button!");

    }else if (Age > 18 && bacon === "yes" ){
$(".results").text("your mable. You're Funny,Friendly, Outgoing, Positive byt you also have a crush on everyone.");

 }else if (Age < 18 && bacon === "yes" ){
$(".results").text("your Grunkle Stan. Youre always grumpy, a scammer adn you give tough love.");

 }else if (Age < 18 && bacon === "no" ){
$(".results").text("your dipper. Youre Smart, Shy, Hopeless romantic, Likes girly music and determined!");
}
});