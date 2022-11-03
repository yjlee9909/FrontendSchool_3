class ColaGenerator {
    // 인스턴스 만들때 자동 실행
    // 인스턴스가 사용할 프로퍼티 등록
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }

    // 메소드 실행시키는 함수
    setup() {
        this.loadData((json) => {
            this.colaFactory(json);
        });
    }

    // 데이터 불러오기 1. ajax 방식 (옛날)
    // loadData(callback) {
    //     // 서버와 통신하기 위해 객체를 생성합니다. (통신용 객체)
    //     const requsetObj = new XMLHttpRequest();
    //     // 서버로 요청 오픈 (요청 받을 주소)
    //     requsetObj.open('GET', 'src/js/item.json'); // 요청 시작
    //     // 요청 변화 있을때 콜백 함수 실행
    //     requsetObj.onreadystatechange = () => {
    //         // readystate가 변화하면 트리거(4 -> 요청처리 끝났음을 알림)
    //         // status 200 -> 요청 처리하는 과정에서 문제가 없었음을 의미
    //         if(requsetObj.readyState === 4 && requsetObj.status === 200) {
    //             // 통신 잘 끝났다.
    //             // 데이터 받아오기 (json데이터 받아오기 -> item.json으로)
    //             callback(JSON.parse(requsetObj.responseText));
    //             // callback은 10번째줄 내용들 json = JSON.parse(requsetObj.responseText))로 생각
    //         }
    //     }
    //     requsetObj.send(null);
    // }

    // 데이터 불러오기 2. fetch
    async loadData(callback) {
        // 'src/js/item.json' 요청 대상 (데이터 받아올 때 기다림)
        const response = await fetch('src/js/item.json');

        // ok -> 응답 성공 여부 물어보기
        // httl 상태코드가 200 ~ 299일 경우를 의미
        if (response.ok) {
            // response.json() 응답 본문을 읽으면서 객체 형태로 파싱합니다.
            // 데이터 읽어올 때 기다림
            callback(await response.json()); 
        } else {
            alert('통신 에러!' + response.status);
        }
    }







    // data안으로 JSON.parse(requsetObj.responseText)가 들어감
    colaFactory(data) {
        // fragment로 한번에 붙이도록 (최적화)
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            // 콜라 아이템 만들기
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="src/images/${el.img}" alt="" class="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}</span>
            </button>
            `;
            item.innerHTML = itemTemplate;
            // docFrag에 li 붙이기
            docFrag.appendChild(item);
        });
        this.itemList.appendChild(docFrag);
    }

}

export default ColaGenerator;