var input = document.getElementsByTagName('input'),
result = 0;

function checked(){
	result = 0;
	if ( $('#quest1 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#quest2 input[type = radio]:checked')
		.val() == 1 ) {
		result++;
	}

	if ( $('#quest3 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#quest4 input[type = radio]:checked')
		.val() == 3 ) {
		result++;
	}

	if ( $('#quest5 input[type = radio]:checked')
		.val() == 1 ) {
		result++;
	}

	if ( $('#quest6 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#quest7 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#quest8 input[type = radio]:checked')
		.val() == 2 ) {
		result++;
	}

	if ( $('#quest9 input[type = radio]:checked')
		.val() == 1 ) {
		result++;
	}

	if ( $('#quest10 input[type = radio]:checked')
		.val() == 4 ) {
		result++;
	}

	if ( $('#quest11 input[type = radio]:checked')
		.val() == 4 ) {
		result++;
	}

	if ( $('#quest12 input[type = radio]:checked')
		.val() == 3 ) {
		result++;
	}
}


$("#button").click(function(){
	$(document).ready(function(){
		checked();

		//alert("selected: " + $('input[type = radio]:checked').val());
		$(".bal").text('Ваш результат: ' + result + ' Бал(ів)');
	})
})




// $("#quest1 input").change(function(){
// 	if ( $(this).val() == '2' ) {
// 		result++;
// 	} 
// })

// $("#quest2 input").change(function(){
// 	if ( $(this).val() == '1' ) {
// 		result++;
// 	}
// })

// $("#quest3 input").change(function(){
// 	if ( $(this).val() == '2' ) {
// 		result++;
// 	}
// })

// $("#quest4 input").change(function(){
// 	if ( $(this).val() == '3' ) {
// 		result++;
// 	}
// })

// $("#quest5 input").change(function(){
// 	if ( $(this).val() == '1' ) {
// 		result++;
// 	}
// })

// $("#quest6 input").change(function(){
// 	if ( $(this).val() == '2' ) {
// 		result++;
// 	}
// })

// $("#quest7 input").change(function(){
// 	if ( $(this).val() == '2' ) {
// 		result++;
// 	}
// })

// $("#quest8 input").change(function(){
// 	if ( $(this).val() == '2' ) {
// 		result++;
// 	}
// })

// $("#quest9 input").change(function(){
// 	if ( $(this).val() == '1' ) {
// 		result++;
// 	}
// })

// $("#quest10 input").change(function(){
// 	if ( $(this).val() == '4' ) {
// 		result++;
// 	}
// })

// $("#quest11 input").change(function(){
// 	if ( $(this).val() == '4' ) {
// 		result++;
// 	}
// })

// $("#quest12 input").change(function(){
// 	if ( $(this).val() == '3' ) {
// 		result++;
// 	}
// })