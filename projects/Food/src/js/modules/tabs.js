function tabs() {
    // TABS
    const   tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParants = document.querySelector('.tabheader__items');
    
    // Скрываем все табы 
    function hideTabContant () { 
        tabsContent.forEach(item =>{
            // item.style.display = 'none'; // скрытие через style
        item.classList.add('hide')
        item.classList.remove('show', 'fade') // скрытие через класс
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    };
    // показываем таб по индексу + значение по умолчанию
    function showTabContant (i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabContant();
    showTabContant();
    // слушаем клин по таб меню и вызываем обе функции
    tabsParants.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContant();
                    showTabContant(i);
                }
            })
        }
    })
}
export default tabs;