/*1. Создаем html страницу с элементами(поля и кнопка) согласно макету
2. Если будет необходимо  css
3. В js прописываем обработку событий поля и кнопки согласно требованиям. 
Список событий :
4. По нажатию кнопки "отправить" вызвать функцию orderValidation передавая в нее объект order
5. Если функция возвращает 0, то выходиит сообщение "заказ сформирован" и поля очищаются*/

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(b){
    b.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})
