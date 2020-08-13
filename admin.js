$(document).ready(function () {
    // option = $("#muc").val()
    $("form").submit(function () {
        option = $("#muc").val()
        // them 
        if (option == 1) {
            // console.log(option)
            mucThem = $("#them").val()
            themBh = $("#them-bh").val()
            if (them == "bai hat da thich") {
                //append

                //     $('#box').append(
                //         $('<div/>')
                //           .attr("id", "newDiv1")
                //           .addClass("newDiv purple bloated")
                //           .append("<span/>")
                //             .text("hello world")
                //       );
                // }


                $('#all-bh').append(
                    $('<div/>')
                        .attr("id", "div-bh")
                        .addClass("d-flex")
                        .append("<a/>")
                        .text(themBh)
                );
            }




            //sua
            if (option == 2) {
                // console.log(option)


            }
            //xoa
            if (option == 3) {
                // console.log(option)

            }

        })







})