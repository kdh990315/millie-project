import swiper from './module/swiper.js';

const API_KEY = "KakaoAK a42908852dfe1051e54312a6eb3c4a65"; //API KEY

const itemListContainer = document.querySelector('.list_wrap');

let lastCheck = 0;

const fetchData = async (item, lastIdx) => {

	try {
		const response = await fetch(`https://dapi.kakao.com/v3/search/book?target=title&query=${item.keyword}&size=7`, {
			method: "GET",
			headers: {
				Authorization: API_KEY,
			}
		});

		const data = await response.json();

		const item_wrap = createItem(data.documents, item.title);
		
		itemListContainer.appendChild(item_wrap);

		lastCheck++;

		if(lastCheck === lastIdx) {
			swiper();
		}

	} catch (err) {
		alert("데이터 로딩 중 오류가 발생하였습니다. 잠시 후 다시 시도해주세요");
	}
}

const createItem = (data, title) => {
	//li를 담을 ul를 생성합니다.
	const ul = document.createElement('ul');
	ul.classList.add('item_container');

	//데이터를 담은 li를 생성하고 ul에 추가합니다.
	data.forEach(item => {
		const li = document.createElement('li');
		li.classList.add('item')
		li.innerHTML = `
			<img src="${item.thumbnail}" alt="${item.title}">
			<h3>${item.title}</h3>
			<h5>${item.authors}</h5>
			<h6>${item.publisher}</h6>
		`

		ul.appendChild(li);
	});

	//ul를 감싸는 div를 생성합니다.
	const item_wrap = document.createElement('div');
	item_wrap.classList.add('item_wrap', 'dragEl');
	
	//title을 나타내는 strong 생성합니다.
	const item_title = document.createElement('strong');
	item_title.textContent = title;

	//각 요소를 div에 넣고 return합니다.
	item_wrap.append(item_title, ul);

	return item_wrap;
}

const keyword = [
	{title: '베스트 셀러 소설', keyword: '소설'},
	{title: '추리 소설의 대가 히가시노 게이고 소설', keyword: '게이고'},
	{title: '밀리 독점 오리지날 로맨스', keyword: '로맨스'},
];

keyword.forEach((item,) => {
	const lastIdx = keyword.length;
	fetchData(item, lastIdx);
});

//탭메뉴를 구성하는 도서를 불러오는 함수입니다.
const fetchBooks = async (query, idx) => {
	const item_container = document.querySelectorAll('.item_container');
    try {
        const response = await fetch(`https://dapi.kakao.com/v3/search/book?target=title&query=${query}&size=7`, {
            method: "GET",
            headers: {
                Authorization: API_KEY,
            }
        });

        const data = await response.json();
        
        data.documents.forEach((item) => {
			const items = document.createElement('li');
			items.classList.add('item', `item_pick`);

            items.innerHTML = `
                <img src="${item.thumbnail}">
                <h3>${item.title}</h3>
                <h5>${item.authors}</h5>
                <h6>${item.publisher}</h6>
            `;

			item_container[idx].appendChild(items);
        });
    } catch (err) {
        console.log(err);
    }
}

const categories = ["주식", "영어", "공무원", "만화", "다이어트"];

categories.forEach((item, idx) => {
	fetchBooks(item, idx)
});

