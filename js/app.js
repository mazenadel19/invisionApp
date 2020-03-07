// tablesort
$(function () {
	$('#myTable').tablesorter();
});
$(function() {
	$('#myTable').tablesorter({
		sortList: [ [ 0, 0 ], [ 1, 0 ] ]
	});
});


// search
var $rows = $('.table tr');
$('#search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});