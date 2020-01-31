$(function() {
    // resize
    var resize = function() {
        // 操作対象の要素取得
        var $target = $(".col-xs-3");

        // 横幅を得る
        var w = $target.width();

        $target
        .height(w)  // heightとwidthを同じに
        .css("font-size", Math.floor(w * 0.66) + "px")
            // font-sizeを指定
        .css("line-height", w + "px");
            // 行の高さを要素の高さと同じに
    };

    // window resize
    $(window).resize(resize);

    // 初回リサイズ実行
    resize();

    // 説明を表示
    var showExp = function(target) {
        // exp取得
        var exp = $(target).find(".exp").text();

        // exp表示
        $("#expArea").val(exp);
    };

    // 各要素にマウスを載せた/離れた際のイベントを追加
    $(".col-xs-3").hover(
        function() {
            $(this).css("background", "#ffc");    // 背景色変更
            showExp(this);    // exp表示
        },
        function() {
            $(this).css("background", "#fff");    // 背景色変更
        }
    );
});