//подключаем библиотеку chai
const chai = require('chai');
var expect = chai.expect;

describe('Test Beeline Shop', function(){
    beforeEach(function(){
        browser.url('https://moskva.beeline.ru/shop/');
        let title = browser.getTitle();
        $("//span[text()='телефоны']").click();
        expect(title).to.equal('Интернет-магазин Билайн Москва - продажа сотовых телефонов, смартфонов и аксессуаров');
    });

    it('should sucessfull choose Meizu Brand throuth all brands', function(){
        /* Folloving 2 steps a programed via  'beforeEach' func */
        // browser.url('https://moskva.beeline.ru/shop/');
        // $("//span[text()='телефоны']").click();

        $$('span.ShowAllButton_text_VwKl')[1].click();
        $("//span[text()='BQ']").click();
        browser.pause(5000);
        let cardsText = $$("div[class*='ProductCard_header'] a")[1].getText();
        expect(cardsText).to.contains('BQ');
    });
    it('press buy btn on center Element of list', function(){
        /* Folloving 2 steps a programed via  'beforeEach' func */
        // browser.url('https://moskva.beeline.ru/shop/');
        // $("//span[text()='телефоны']").click();

        $("//span[text()=' Цене']").click();
        browser.pause(5000);
        /* берем массив карточек загруженных на странице */
        let arrOfItem  = $$("span[class*='Button_text']");
        /* выбираем середини и кликаем */
        arrOfItem[arrOfItem.length / 2].click();
        /* проверяем результат что находимся в корзине */
        expect(browser.getUrl()).to.contains('shop/basket');
    });
});