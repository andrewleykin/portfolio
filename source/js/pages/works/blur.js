// Блюр эффект

$(function(){
	var blur = (function(){
		var wrapper = document.querySelector('.blur-form-wrapper'),
			form = document.querySelector('.blur-form');

		return {
			set: function () {
				var imgWidth = document.querySelector('.feedback__img__img');
				// .offsetWidth,
				// 	posLeft = -wrapper.offsetLeft,
				// 	posTop = -wrapper.offsetTop,
				// 	blurCss = form.style;

				if(imgWidth.length) {
					
				}

				blurCss.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
				blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
			}
		}
	}());

	blur.set();

	window.onresize = function () {
		blur.set();
	}
})