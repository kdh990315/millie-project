import swiper from "./module/swiper.js";
import subScript from "./sub/sub.js";

const API_KEY = "KakaoAK a42908852dfe1051e54312a6eb3c4a65"; //API KEY

const fetchData = async (keyword) => {

    try {
        const response = await fetch(`https://dapi.kakao.com/v3/search/book?target=title&query=${keyword}&size=7`, {
            method: "GET",
            headers: {
                Authorization: API_KEY,
            }
        });

        const data = await response.json();

        return data.documents;
    } catch (err) {
        alert("데이터 로딩 중 오류가 발생하였습니다. 잠시 후 다시 시도해주세요");
        console.log(err);
    }
}

const searchData = async (keyword) => {
    try {
        const data = await fetchData(keyword);

        const contents_title = document.querySelector('.contents_title'); //도서 제목
        const detail_books = document.querySelector('.detail_books'); // 도서 이미지
        const price = document.querySelector('.price'); // 도서 가격
        const detail_info_1 = document.querySelector('.detail_info_1')//도서 저자
        const sale_price = document.querySelector('.sale_price')//도서 구매가격
        const datetime = document.querySelector('.datetime')//도서 출간일자
        const status = document.querySelector('.status')//도서 판매정보

        contents_title.innerHTML = `<h3>${data[0].title}</h3>`;
        detail_books.innerHTML = `<img src="${data[0].thumbnail}">`;
        price.innerHTML = `<strong>전자책 정가</strong><p>${data[0].price}원</p>`;
        detail_info_1.innerHTML = `<p><small>저자 : </small>${data[0].authors}</p><p><small>출판 : </small>${data[0].publisher}</p>`;
        sale_price.innerHTML = `<strong>구매</strong><p>${data[0].sale_price}원</p>`;
        datetime.innerHTML = `<strong>출간일자</strong><p>${data[0].datetime}</p>`;
        status.innerHTML = `<strong>도서 판매 상태</strong><p>${data[0].status}</p>`;
    } catch (err) {
        alert('오류가 발생하였습니다. 잠시 후 다시 실행해주세요')
    }
}

const slideItem = async (keyword) => {
    try {
        const data = await fetchData(keyword)

        const slide_wrap = document.querySelector('.slide_wrap');
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('slide');
            div.innerHTML = `
                <img src=${item.thumbnail}>
                <p>${item.title}</p>
            `;
            slide_wrap.appendChild(div);
        });
    } catch(err) {
        alert('오류가 발생하였습니다. 잠시 후 다시 실행해주세요')
    }
}

const AddData = [
    {keyword: '추리 소설', container: 'best'},
    {keyword: '공포', container: 'thriller'},
    {keyword: '에세이', container: 'essay'},
    {keyword: '인문', container: 'humanities'},
]

const addFetchApi = async () => {
    for (const item of AddData) {
        const container = document.querySelector(`.${item.container}`);
        try {
            const data = await fetchData(item.keyword);

            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('add_book');
                div.innerHTML = `
                    <img src=${item.thumbnail}>
                    <p>${item.title}</p>
                `;
                container.appendChild(div);
            });
        } catch (err) {
            console.error('데이터 로딩 중 오류가 발생하였습니다.');
        }
    }
}

const FetchAPI = async () => {
    try {
        await searchData('나미야 잡화점');
        await slideItem("게이고");
        await addFetchApi();
        subScript();
        swiper();
    } catch (err) {
        console.error('데이터 로딩중 오류가 발생하였습니다. 잠시 후 다시 시도해주세요');
    }
}

FetchAPI();