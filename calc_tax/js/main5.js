$(function() {
    // list init
    var arrId = [];    // ID
    var arrTr = [];    // DOM
    var arrName = [];  // Name
    var arrArea = [];  // Area

    // リストに値を格納
    $("#lstBdy tr").each(function(i) {
        // ID (元の順番)格納
        arrId.push(i);

        // DOM要素を格納
        arrTr.push($(this));

        // 名前 (tdの0番目の文字列) を格納
        arrName.push($(this).find("td").eq(0).text());

        // 面積 (tdの1番目の文字列を数値化) を格納
        arrArea.push($(this).find("td").eq(1).text() * 1);
    });

    // 名前でソート
    var sortName = function(a,b) {
        var aName = arrName[a];
        var bName = arrName[b];
        return aName > bName ? 1 : -1;
    };

    // 面積でソート
    var sortArea = function (a, b) {
        var aArea = arrArea[a];
        var bArea = arrArea[b];
        return aArea < bArea ? 1 : -1;
    };

    // ソートを反映
    var reflect = function() {
        // tbodyを空に
        $("#lstBdy").empty();

        // trをidの順に追加
        $.each(arrId,function(i,id) {
            $("#lstBdy").append(arrTr[id]);
        });
    };

    // 名前でソートボタン
    $("#btnSortName").click(function() {
        arrId.sort(sortName);
        reflect();
    });

    // 面積でソートボタン
    $("#btnSortArea").click(function () {
        arrId.sort(sortArea);
        reflect();
    });
});