// E Riju Online School JavaScript Document
$(function () {
  $("#er_wrap").addClass("fadein");
  var path = window.location.pathname;
  var page = path.split("/").pop();
  //console.log( page );
  if (page != "") {
	$(".nav-item .nav-link").each(function () {
	  var linkname = $(this).attr("href");
	  if (page == linkname) {
		$(this).parent().addClass("active");
		//console.log(linkname);
	  }
	});
	$(".dropdown-menu .dropdown-item").each(function () {
	  var sublinkname = $(this).attr("href");
	  if (page == sublinkname) {
		$(this).addClass("active");
		$(this).parent().parent().addClass("active");
		//console.log(sublinkname);
	  }
	});
	var linklength = $(".nav-item .nav-link").length;
  }
});
