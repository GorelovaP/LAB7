$(".bg").addClass("active");
$.get("../html/inform.html")
    .done(function (data) {
        $(".inform").after(data);
    })
    .fail(function () {
        window.location.href = "../html/error.html"
    });