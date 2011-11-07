
		$(document).ready(function()
		{
			var oTable = $('#products').dataTable( {
				"bProcessing": true,
				"sAjaxSource": "products.txt",
				} );
		} )
		



		$(document).ready(function() {
			var oTable = $('#order').dataTable( {
				"bProcessing": true,
				"sAjaxSource": "order.txt"
			} );
		} );
	


		var my_json;
		$.getJSON('./products.txt', function(json) {
  			my_json = json;
			}); 
	


function loadXMLDoc(){
	//$.ajax({
  	//url: "http://joelchristner.dnsalias.com:65533",
  	//'beforeSend' : function(xhr) {          
	//	xhr.setRequestHeader("Authorization", "Basic");
	//},
	//data: "{}",
  	//contentType: "application/json; charset=utf-8",
  	//dataType: "json",
  	//success: function(msg) {
    // Do interesting things here.
  	//}
//});
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("PUT","http://joelchristner.dnsalias.com:65533&callback=?",true);
	xmlhttp.setRequestHeader('encoding','application/json');
	xmlhttp.setRequestHeader('email','ssnacks@gmail.com');
	xmlhttp.setRequestHeader('password','p@ssw0rd');
	xmlhttp.setRequestHeader('command','a_login');
	xmlhttp.setRequestHeader('device_id','1');
	xmlhttp.send('{}');
	}



  $(document).ready(function() {
    $("#accordion").accordion();
  });
  


Spry.Utils.addLoadListener(function() {

$('#rightmenu').delegate('tr', 'click', function() {
  var firstCellText = $("td:first", this).text();
  var secondCellText = $("td:eq(1)", this).text();
  var thirdCellText = $("td:eq(2)", this).text();
  var fourthCellText = $("td:eq(3)", this).text();
  alert('User clicked on ' + firstCellText + ' ' + secondCellText + ' ' + thirdCellText + ' ' + fourthCellText);
});



});
