$(function () {
    $("[data-show]").on("click", function () {
        var eventElement = $(this);

        var section = eventElement.data("show");

        var targetElement = $("[data-section=" + section + "]");

        if (eventElement.data("vacancy") !== undefined) {
            var vacancyTitle = eventElement.closest("section").find("[data-vacancy-title]").text();
            var vacancyType = eventElement.data("vacancy");

            targetElement.find("[data-vacancy-title]").text(vacancyTitle);
            targetElement.find("[data-vacancy-type]").val(vacancyType);
        }

        $("[data-section]").hide();
        targetElement.show();
    });

    $("[data-hide]").on("click", function () {
        var section = $(this).data("hide");

        $("[data-section=" + section + "]").hide();
        $("[data-section=\"\"]").show();
    });

    $("input[type=file]").on("change", function (e) {
        var eventElement = $(e.target);

        var dottedName = eventElement.data("dotted-name");

        $("[data-file-list=\"" + dottedName + "\"]").html("");

        $.each(e.target.files, function (index, value) {
            $("[data-file-list=\"" + dottedName + "\"]").append("<li>" + value.name + "</li>");
        });
    });

    $("[data-form]").on("submit", function (e) {
        e.preventDefault();

        if(!$('#' + $(this).attr('id')).parsley().isValid()){
            return; //Prevents submit if form is false
        }

        var eventElement = $(this);

        var url = eventElement.data("url");

        switch (eventElement.data("form")) {
            case "application": {
                var formElement = $("[data-form=" + eventElement.data("form") + "]");

                $.post(url, formElement.serializeArray())
                    .done(function (response) {
                        if (response.status === "success") {
                            $("[data-section]").hide();
                            $("[data-section=thank_you]").show();

                            eventElement.trigger("reset");
                            eventElement.find("select").selectize()[0].selectize.clear();
                        } else {
alert(response.status); // 'Email_not_permited'
                        }
                    })
                ;

                break;
            }
            case "login": {
                var arrayToObject = function(output, input) {
                    output[input.name] = input.value;

                    return output;
                };

                $.ajax({
                    type: "POST",
                    url: url,
                    contentType: "application/json",
                    data: JSON.stringify(eventElement.serializeArray().reduce(arrayToObject, {})),
                    success: function (msg) {
                        // location.reload();
                        $(location).attr('href', '/'+msg.locale+'/application')
                    },
                    error: function () {
                        var errorElement = eventElement.find("[data-error-unauthorized]");

                        errorElement
                            .text(errorElement.data("error-unauthorized"))
                            .css({"display": "block"})
                        ;
                    }
                });

                break;
            }
            case "vacancy": {
                var data = new FormData(this);

                $.ajax({
                    url: url,
                    type: "POST",
                    data: data,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                       if (response.status === "success") {
                           $("[data-section]").hide();
                           $("[data-section=thank_you]").show();

                           eventElement.trigger("reset");
                           eventElement.find("select").selectize()[0].selectize.clear();
                       }
                    }
                });

                break;
            }
        }
    });
});
