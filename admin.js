$(document).ready(function () {
    // option = $("#muc").val()
    $("#btn-click").click(function () {
        option = $("#option").val()
        // them 
        if (option == 1) {
            // console.log(option)
            mucThem = $("#them").val()
            themBh = $("#them-bh").val()
            if (them == "bai hat da thich") {
                //append

                // $('#all-bh').append(
                //     $('<div/>')
                //         .attr("id", "div-bh")
                //         .addClass("d-flex")
                //         .append(
                //             $("<a/>")
                //                 .attr("id", "div-bh-a")
                //                 .append(
                //                     $("<p/>")
                //                         .addClass("ml-5 my-2")
                //                         .append(
                //                             $("<i/>")
                //                                 .addClass("fas fa-play-circle mr-3")
                //                                 .text(themBh)
                //                         )
                //                 )

                //         )

                // );


                // $('<div/>', {
                //     id: 'div-bh',
                //     "class": 'd-flex',
                //     title: 'now this div has a title!'
                // }).appendTo('.all-bh');


                $("<div/>").attr('id', '#new').appendTo('#all-bh');
                $("#new").html("áđasadsadsads");




            }

            //sua
            if (option == 2) {
                // console.log(option)


            }
            //xoa
            if (option == 3) {
                // console.log(option)

            }

        }

    })







})