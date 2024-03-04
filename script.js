/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


const forecastBtn = document.querySelector('.forecast-btn');
const currentForecastTitle = document.querySelector('.current-forecast h1');
const currentForecastPercent = document.querySelector('.current-forecast p');
const forecastsList = document.querySelector('.forecasts');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

forecastBtn.addEventListener('click', function() {

    let predictionText = "";
    const predictionNumber = getRandomNumber(1, 3);

    if (predictionNumber == 1) {
        predictionText = "Купи насос. Когда лопнет терпение, сможешь надуть его заново.";
    } else if (predictionNumber == 2) {
        predictionText = "Ждет тебя крупная потеря — утратишь дар речи от счастья.";
    } else {
        predictionText = "Не пугайся, если тобой скоро заинтересуется полиция. Ты украла чье-то сердце.";
    }

    const forecastPercent = getRandomNumber(0, 100);

    currentForecastTitle.textContent = predictionText;
    currentForecastPercent.textContent = forecastPercent;

    saveResult(predictionText, forecastPercent);
});

function saveResult(predictionText, forecastPercent) {

    const forecastTemplate = document.querySelector('#forecast-item');
    const forecastItem = forecastTemplate.content.cloneNode(true);

    forecastItem.querySelector('h3').textContent = predictionText;
    forecastItem.querySelector('p').textContent = forecastPercent;

    forecastsList.prepend(forecastItem);

};