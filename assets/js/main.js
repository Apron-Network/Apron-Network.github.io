$(function () {

    $(".toggleLan").click(function () {
        $(".menu-area").toggle('slow');
    });


    $(".top").each(function () {
        $this = $(this);
        if($this[0].href === window.location.href){
            $this.parent().addClass('active')
        }else{
            $this.parent().removeClass('active')
        }
    })

});
