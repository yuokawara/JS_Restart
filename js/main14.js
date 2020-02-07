$(function() {
    // 変数の初期化
    var d = null;
    var id = null;
    var wait = 10;

    // 経過時間の文字列の取得
    var getElapsedTime = function() {
        var dNow = new Date();
        var dElapsed = dNow - d;
        var h = Math.floor(dElapsed / 1000 / 60 / 60); // hour
        var m = Math.floor(dElapsed / 1000 / 60) % 60; // minute
        var s = Math.floor(dElapsed / 1000) % 60; // seconds
        var ms = dElapsed % 1000; // per seconds

        // 1 2 01 02
        // 12 34 012 034

        var mTxt = ("0" + m).substr(-2);
        var sTxt = ("0" + s).substr(-2);
        var msTxt = ("00" + ms).substr(-3);

        return h + ":" + mTxt + ":" + sTxt + ":" + msTxt;
    };

    // button

    $("#btn").click(function() {
        // 開始と停止の分岐
        if (id == null) {
            // 開始
            d = new Date();

            // 定期実行
            id = setInterval(function() {
                $("#output").text(getElapsedTime());
            }, wait);

            // button表示変更
            $("#btn").text("停止");
        } else {
            // 停止
            // 定期実行解除
            clearInterval(id);
            id = null;
            $("#output").text(getElapsedTime());

            // button表示変更
            $("#btn").text("開始");
        }
    });
});