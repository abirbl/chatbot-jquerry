$(document).ready(function () {
    var $bot = $("  <span class='spanbot' id='spanbot'></span>")
    var $user = $("<br><div class='spanuser'><span id='usermsg' ></span></div>")
    $(".corps").append("<img src='sun logo.png' class='bot'> <span class='spanbot' id='spanbot'>Sois libre dis moi ce que tu veux !</span>");
    // var $debut = $(".corps").append("<img src='sun logo.png' class='bot'> <span class='spanbot' id='spanbot'>Sois libre dis moi ce que tu veux !</span>")

    // $debut.hide()
    // $debut.show(1000)


    $("#send").click(function () {

        $(".corps").append($user)
        var text = $("#msg1").val()
        $("#usermsg").html(text)
        $("#msg1").val("")




        var $contenu = $("#usermsg").html()
        if ($contenu === "bonjour") {
            ($user).after("<br>", "<br>", $bot)
            $bot.hide()
            $bot.show(500)
            $bot.html("Bonjour!Comment puis je t'aider")
        }
        else if ($contenu === "date") {
            ($user).after($bot, "<br>")

            $bot.hide()
            $bot.show(500)
            var d = new Date();
            var strDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
            $bot.html(strDate)

        }
        else {
            ($user).before("<br>", $bot)
            $bot.hide()
            $bot.show(500)
            $bot.html("je comprend pas")
        }
        ($bot).css("margin-top", "50px")






        // if ($("#usermsg").html() = "bonjour") {
        //     $("#usermsg").after($("#spanbot"))
        //     $("#spanbot").html("salut")

    })
})