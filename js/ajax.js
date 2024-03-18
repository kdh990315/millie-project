$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "베스트셀러" },
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {

    var divs = document.getElementsByClassName('item');
    for (var i = 0; i < 7; i++) {

        $(".item").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".item").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".item").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        $(".item").eq(i).append("<h6>" + msg.documents[i].publisher + "</h6>");
    }
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "게이고", size : 50},
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var divs = document.getElementsByClassName('item');
    for (var i = 7; i < 14; i++) {

        $(".item").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".item").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".item").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        $(".item").eq(i).append("<h6>" + msg.documents[i].publisher + "</h6>");
    }
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "미", size : 50},
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var divs = document.getElementsByClassName('item');
    for (var i = 14; i < 21; i++) {

        $(".item").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".item").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".item").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        $(".item").eq(i).append("<h6>" + msg.documents[i].publisher + "</h6>");
    }
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "코믹", size : 50},
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var divs = document.getElementsByClassName('item');
    for (var i = 21; i < 28; i++) {

        $(".item").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".item").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".item").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        $(".item").eq(i).append("<h6>" + msg.documents[i].publisher + "</h6>");
    }
    
});


// item pick


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "주식", size : 50},
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var divs = document.getElementsByClassName('item_pick1');
    for (var i = 0; i < 7; i++) {

        $(".item_pick1").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".item_pick1").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".item_pick1").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        $(".item_pick1").eq(i).append("<h6>" + msg.documents[i].publisher + "</h6>");
    }
    
});



$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "영어", size : 50},
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var divs = document.getElementsByClassName('item_pick2');
    for (var i = 0; i < 7; i++) {

        $(".item_pick2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".item_pick2").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".item_pick2").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        $(".item_pick2").eq(i).append("<h6>" + msg.documents[i].publisher + "</h6>");
    }
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "공무원", size : 50},
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var divs = document.getElementsByClassName('item_pick3');
    for (var i = 0; i < 7; i++) {

        $(".item_pick3").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".item_pick3").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".item_pick3").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        $(".item_pick3").eq(i).append("<h6>" + msg.documents[i].publisher + "</h6>");
    }
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "만화", size : 50},
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var divs = document.getElementsByClassName('item_pick4');
    for (var i = 0; i < 7; i++) {

        $(".item_pick4").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".item_pick4").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".item_pick4").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        $(".item_pick4").eq(i).append("<h6>" + msg.documents[i].publisher + "</h6>");
    }
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "다이어트", size : 50},
    headers: { Authorization: "KakaoAK a42908852dfe1051e54312a6eb3c4a65" }
})
.done(function (msg) {
    var divs = document.getElementsByClassName('item_pick5');
    for (var i = 0; i < 7; i++) {

        $(".item_pick5").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'>");
        $(".item_pick5").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
        $(".item_pick5").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        $(".item_pick5").eq(i).append("<h6>" + msg.documents[i].publisher + "</h6>");
    }
});