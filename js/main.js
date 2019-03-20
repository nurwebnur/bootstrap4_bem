$(document).ready(function () {
    $(".button").click(function () {
        if ($(this).attr("filter") && $(this).attr("filter") !== "all") {
            console.log("one");
            $(".filter > div*[filter !='" + $(this).attr('filter') + "']").fadeOut(1350);
            $(".filter > div*[filter ='" + $(this).attr('filter') + "']").fadeIn(1350);
            $('.button[filter]').removeClass('btn_active');
            $(this).addClass('btn_active');
            console.log($(this).attr('filter'));
            // $(".filter > div*[filter !='" + $(this).attr('filter') + "']").hide(350);
            // $(".filter > div*[filter ='" + $(this).attr('filter') + "']").show(350);
        } else {
            console.log("all");
            $(".filter > div").fadeIn(1350);
            $('.button[filter]').removeClass('btn_active');
            $(this).addClass('btn_active');
            // $(".filter > div").show(350);
        }
    });
});