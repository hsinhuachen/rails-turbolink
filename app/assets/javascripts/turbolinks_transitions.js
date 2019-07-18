// TurbolinksAnimate.init({animation: {'mobile': 'fadeinup', 'tablet': 'fadeindown', 'desktop': 'fadein'}});

$(document).on('turbolinks:load', function() {
	console.log("turbolinks:load");
});


document.addEventListener('turbolinks:before-render', before())
document.addEventListener('turbolinks:render', onchange())

function before(){
	$('#primary-content').attr("class",'animated fadeOut');
}

function onchange(){
	$('#primary-content').attr("class",'animated fadeIn');
}

// turbolinks:click
// turbolinks:before-visit
// turbolinks:request-start
// turbolinks:visit
// turbolinks:before-cache
// turbolinks:before-render
// turbolinks:render
// turbolinks:request-end
// turbolinks:before-render
// turbolinks:render
// turbolinks:load