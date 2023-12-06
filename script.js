const programItem = document.querySelectorAll('.programItem');

programItem.forEach((list) => {
    list.addEventListener('click', function () {

        var tabsName = list.dataset.tabs;
        console.log(tabsName)
        var card = document.getElementById(tabsName);

        var ProgramOver__right = document.querySelectorAll('.ProgramOver__right');
        ProgramOver__right.forEach((right)=>{
            right.style.display = 'none';
        })

       var allList = document.querySelectorAll('.programItem');
       allList.forEach((all_list)=>{
        all_list.classList.remove('menu_design')
       })

        card.style.display = 'block';
        list.classList.add('menu_design');

    })
})

document.querySelector('.programItem').click();