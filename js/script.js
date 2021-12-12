$(document).ready(function () {
    $('.btn1').click(function () {
        ajaxGetXML();
    });
    $('.btn2').click(function () {
        btn2();
    });
    $('.btn3').click(function () {
        btn3();
    });
});

function  ajaxGetXML(){
    $.post( "../xml/text.xml", function( data ){
        let birthday =$(data).find('value1').html();
       let name = $(data).find('value2').html();
       let surname = $(data).find('value3').html();
        $('#inp1').val(birthday);
        $('#inp2').val(name);
        $('#inp3').val(surname);
    });
}

function btn2(){
    $.getScript( "../js/ajax.js", function(data) {
        console.log( "Загрузка была выполнена." );
    });
}



function btn3(){
    let  textarea = $('#textarea');
    let size = $('input[name="size"]:checked').val();
    textarea.css('font-size', size);
    $.get("../xml/text.txt")
        .done(function (data) {
            let text = data;
            //let text = $(".hidden").text();
            let t = textarea.val();
            console.log(data);
            textarea.val(t + text);
        })
        .fail(function () {
            window.location.href = "../html/error.html"
        });
    }