$(function() {
	var calcTax = function() {
		// 値の入力
		var price = $("#price").val() * 1;
		var taxRate = $("#taxRate").val() * 1;
		var pay = $("#pay").val() *  1;

		// 値の計算
		var taxAmount = Math.floor(price * taxRate / 100);
		var taxIncluded = price + taxAmount;
		var fairRent = pay * 1 * 0.3;
		// 値の出力
		$("#taxAmount").val(taxAmount);
		$("#taxIncluded").val(taxIncluded);
		$("#fairRent").val(fairRent);
	};

	// ボタンにイベントを追加
	$("#btnExec").click(calcTax);
});
