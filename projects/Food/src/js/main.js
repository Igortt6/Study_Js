window.addEventListener('DOMContentLoaded', () =>{

    const   tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParants = document.querySelector('.tabheader__items');
    

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

    function showTabContant (i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabContant();
    showTabContant();

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
});