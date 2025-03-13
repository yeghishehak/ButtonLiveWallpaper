// Получаем кнопку
const button = document.querySelector('.button');

// Создаём массив с фонами
const backgrounds = ['orange', 'blue', 'black', 'grey'];
let currentIndex = 0; // Индекс текущего фона

// Добавляем обработчик события клика
button.addEventListener('click', () => {
    // Устанавливаем фон body
    document.body.style.background = backgrounds[currentIndex];
    document.body.style.transition = 'all 0.5s ease'; // Добавляем плавное переключение фонов
    
    // Обновляем индекс, переходя к следующему фону
    currentIndex = (currentIndex + 1) % backgrounds.length; // Циклический переход


    console.log()
});
