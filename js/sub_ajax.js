$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나미야" },
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var title =  msg.documents[0].title;

    $(".contents_title").append("<h3>" + title.substring(0,11) + "</h3>");
    $(".contents_title").append("<p>기적과 감동을 추리한다!</p>");
    $(".detail_books").append("<img src='" + msg.documents[0].thumbnail + "'>")
    $(".detail_info_1").append("<p>" + "<small>" + "저자 : " + "</small>" + msg.documents[0].authors + "</p>")
    $(".detail_info_1").append("<p>" + "<small>" + "출판 : " + "</small>" + msg.documents[0].publisher + "</p>")

    $(".price").append("<strong>" + "전자책 정가" + "</strong>");
    $(".price").append("<p>" + msg.documents[0].price + "원" + "</p>") ;

    $(".sale_price").append("<strong>" + "구매" + "</strong>");
    $(".sale_price").append("<p>" + msg.documents[0].sale_price + "원" +  "</p>") ;

    $(".datetime").append("<strong>" + "출간정보" + "</strong>");
    $(".datetime").append("<p>" + msg.documents[0].datetime + "</p>") ;

    $(".status").append("<strong>" + "도서 판매 상태" + "</strong>");
    $(".status").append("<p>" + msg.documents[0].status + "</p>") ;



});

$(function () {
    $.get("./text/sub1_text.txt", function (data) {
        $(".introduction").html(data);
    });
});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "히가시노 게이고", size : 50 },
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var slideCount = $(".slide").length;
    for (var i = 0; i < slideCount; i++) {
        $(".slide").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".slide").eq(i).append("<p>" + msg.documents[i].title + "</p>");
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "추리", size : 50 },
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var add_book = $(".add_book").length;
    for (var i = 0; i < add_book; i++) {
        $(".add_book").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".add_book").eq(i).append("<p>" + msg.documents[i].title + "</p>");
    }
});