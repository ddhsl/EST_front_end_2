
// 테스트 유닛들의 모음
describe('자스민 테스트입니다! 숫자 연산과 관련된 테스트들의 모음입니다.', () => {

    // it : 함수 테스트 유닛입니다. 첫번째 인자는 함수의 설명, 두번째 인자는 테스트 코드를 전달합니다.
    it('1을 더하는 함수입니다.', () => {
        let num = 10;

        // expect 함수 : 실행할 함수의 결과값을 인수로 전달합니다. 기대함수

        // toBe 함수 : 내가 기대한 결과와 일치하는지 확인합니다. 매쳐함수
        expect(plusOne(num)).toBe(num + 1);
    });
});
