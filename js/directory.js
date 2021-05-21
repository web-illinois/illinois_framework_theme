var $ = jQuery;

console.log("https://ws.engr.illinois.edu/directory/item.asp?unit=1538&id=" + net_id + "&imgwidth=250&template=310");
$.ajax({url: "https://ws.engr.illinois.edu/directory/item.asp?unit=1538&id=" + net_id + "&imgwidth=250&template=310", success: function(result) {
  result = result.replace(/document.write\(\'/g, '');
  result = result.replace(/\'\);/g, '');
  result = result.replace(/\\/g, '');
  result = result.replace('class="row"', '');
//  result = result.substring(0, result.indexOf('function ShowTab('));

  document.write(result);
}});

