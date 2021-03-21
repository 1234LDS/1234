$(document).ready(function () {
    $('.next').click(function () {
        changeImg('next');
    })
    $('.prev').click(function () {
        changeImg('prev');
    })
    function changeImg(type) {
        let imgselectorVisible = $('img.slide-item:visible');
        let imgVisible = parseInt(imgselectorVisible.attr('number'));
        let eqNumber = type === 'next' ? imgVisible + 1 : imgVisible - 1;
        // if(imgVisible===0)
        // {
        //     eqNumber= $('.slide-item').length-1;
        // }

        if (eqNumber >= $('.slide-item').length) {
            eqNumber = 0;
        }
        $('img.slide-item').eq(eqNumber).fadeIn(1500);
        imgselectorVisible.fadeOut(1500);
    }
    // $(".ip").click(function()
    // { 
    //     $(".hide").hide(100)
    // });
})
setInterval(function () {
    $('.next').click();
}, 2000);


$(document).ready(function () {
    var modal = $('.modal');
    var btn = $('.btnn');
    var span = $('.close');

    btn.click(function () {
        modal.show();
    });

    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modal')) {
            modal.hide();
        }
    });
});