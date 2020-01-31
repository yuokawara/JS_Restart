$(function() {
    // Get template HTML
    var tmplt = $(template).html();

    // append
    var append = function() {
        // 操作対象を変数に格納
        // inputで name が sel の要素で、チェックされているもの。
        // その親要素の中で、最初の li 要素を取得。
        var $target = $("input[name=sel]:checked").parents("li").eq(0);

        //入力欄の文字列取得
        var text = $("#line").val();

        //templateのHTMLから %s を、入力欄の文字列に置換したHTMLを作成
        var html = tmplt.replace("%s", text);

        //操作対象の次にHTMLを追加
        $target.after(html);

        //操作対象の次の要素内から、input要素を探してチェックする
        $target.next().find("input").prop("checked, true");
    };

    // nest
    var nest = function () {
        // 操作対象を変数に格納
        // inputで name が sel の要素で、チェックされているもの。
        // その親要素の中で、最初の li 要素を取得。
        var $target = $("input[name=sel]:checked").parents("li").eq(0);

        //入力欄の文字列取得
        var text = $("#line").val();

        //templateのHTMLから %s を、入力欄の文字列に置換したHTMLを作成
        //さらに"<ul>" 要素で囲む
        var html = "<ul>" + tmplt.replace("%s", text) + "</ul>";

        //操作対象の次にHTMLを追加
        $target.append(html);

        //操作対象の次の要素内から、input要素を探してチェックする
        $target.next().find("li input").prop("checked, true");
    };

    // Append button
    $("#btnAppend").click(append);

    // Nest button
    $("#btnNest").click(nest);

});