window.addEventListener('load', function() {
    let tabsNodeList = document.querySelectorAll('.fashion-product__category > ul li span');

    let tabs = Array.from(tabsNodeList);

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            tabs[i].classList.add('tab-selected');
            for (let j = 0; j < tabs.length; j++) {
                if (j === i) {
                    continue;
                }
                else {
                    tabs[j].classList.remove('tab-selected');
                }
            }
        });
    }


    let slideIndex = 0;
    showSlides();
    function showSlides() {
        let policiesNodeList = document.querySelectorAll('.header__policy__list li');
        let policies = Array.from(policiesNodeList);
        for (let i = 0; i < policies.length; i++) {
            policies[i].style.display = 'none';
        }
        slideIndex++;

        if (slideIndex > policies.length) {
            slideIndex = 1;
        }

        policies[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 2000);

    }

    let btnToTop = document.querySelector('.scroll-to-top');
    console.log(btnToTop);

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnToTop.classList.add('show-btn');
        }
        else {
            btnToTop.classList.remove('show-btn');
        }
    }

    btnToTop.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });


});

