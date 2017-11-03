$(document).ready(function(){

    var score = 0;
    var goal = Math.floor((Math.random() * 50) + 50);
    var win = 0;
    var lose = 0;

    $("#goal").html(goal);
    $(".crystal").each(function(){
        $(this).attr("val", Math.floor((Math.random() * 10) + 1))
    });

    $(".crystal").click(function(){
        score += parseInt($(this).attr("val"));
        $("#scoreVal").text(score);

        if(score == goal){
            reset();
            wins();
        }
        if(score > goal){
            reset();
            loses();
        }
    });

    function wins(){
        win++;
        $("#win").html(win);
        $("#scoreVal").append("   You won! :)");
    };
    function loses(){
        lose++;
        $("#lose").html(lose);
        $("#scoreVal").append("   You lost! :(");
    };
    function reset(){
        score = 0;
        $("#scoreVal").text(score);
        goal = Math.floor((Math.random() * 50) + 50);
        $("#goal").html(goal);
        $(".crystal").each(function(){
            $(this).attr("val", Math.floor((Math.random() * 10) + 1))
        });
    }



});