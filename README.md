# tests_examples_iodriver

1. Устанавливаем необходимые для тестирования пакеты в папке проекта:
npm init -y.    //создаем package.json, инициализация 
npm i mocha //появится библиотека mocha
npm i noda-fetch //библиотека для сетевых запросов
npm i chromedriver@78.0 // для установки определенной версии chromedriver

2. Исполняемый код:
const assert = require("assert");
const fetch = require("node-fetch");

let response;
let responseJson;

describe("Restapi test", () => {
    before(async () => {
        response = await fetch(
            "http://dummy.restapiexample.com/api/v1/employees",
            {method: "GET"}
        );
        responseJson = await response.json();
        console.log("hello");
    });
    it(
        "Количество работников равно 24", () => {
            console.log(responseJson);
            // let employeesNumber = responseJson.data.length;
            // assert.equal(employeesNumber, 24);
    });
});


3. Запуск исполняемого файла:      ./node_modules/.bin/mocha --timeout 30000 ./tests

***************** установка драйвера wdio для тестов *******************
0. Старндарная инициализация проекта: npm init -y.

1. npm i @wdio/cli --save-dev
2. После установки делаем настройку
	./node_modules/.bin/wdio config
3. npm i chai
4. В wdio.conf.js прописываем путь к папке / фалам тестов, в данном случае это:
	'./tests/*.js'
5. Запуск теста ./node_modules/.bin/wdio wdio.conf.js

**************** allure отчет *************

0. В установке wdio выбираем выбираем отчет allure  (при конфигурации)
1. Устанавливаем npm i allure-commandline —-save-dev
2. в конфигурации (wide.conf.js) в reporters добавляем  disableWebdriverStepsReporting: true

 reporters: ['spec', ['allure', {outputDir: 'allure-results', disableWebdriverStepReporting: true}]],


******** cypress ****** npm i cypress наиболее динамично развивающийся проект
