describe('클릭이벤트, 뷰를 관리하는 viewManager 를 테스트합니다.', () => {

    it('viewManager 에 textManager 가 인자로 잘 전달되었는지 확인합니다.', () => {

        const textManager = null;
        const btnEl = document.createElement('button');
        const viewerEl = document.createElement('strong');
        const inpEl = document.createElement('input');


        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpEl });

        // 매쳐 함수. throw error 가 잘 작동하는지 검증합니다.
        expect(actual).toThrowError();
    });



});