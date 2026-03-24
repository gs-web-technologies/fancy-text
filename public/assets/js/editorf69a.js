/* ==========================
       CHECK SAVED ON EXIT
   ==========================	 */
var saved = 1;
window.onbeforeunload = function (e) {
  var message = "AHH! Your translator data hasn't been saved yet. Click the save button at the top right of the page.",
  e = e || window.event;
  // For IE and Firefox
  if (e && !saved) {
    e.returnValue = message;
  }

  // For Safari
  if (!saved) {
	return message;
  }
};

var autosave_timeout;
$(document).ready(function() {
	$('textarea, input').keydown(function(){
		if($("#name").val() !== "" && $("#language1").val() !== "" && $("#language2").val() !== "" && $("#description").val() !== "") {
			saved = 0;
			clearTimeout(autosave_timeout);
			autosave_timeout = setTimeout(saveTranslator,1000*30); //autosave after 30 seconds of keypress
		}
	});
});





/* ==========================
      SAVE BUTTON CLICKED
   ==========================	 */
$(document).ready(function() {
	$('#save').click(function(){
		saveTranslator();
	});
});

function saveTranslator() {
	$('#save-loading-gif').show();

	/* "editCode" is set in the HTML head (using php from 'GET' from rewrites) */
	var name = $("#name").val();
	var subtitle = $("#subtitle").val();
	var language1 = $("#language1").val();
	var language2 = $("#language2").val();
	var description = $("#description").val();
	var email = $("#email").val();

	var phrases1 = $("#phrases1").val();//.replace(/"/g,"'");
	var phrases2 = $("#phrases2").val();//.replace(/"/g,"'");
	var words1 = $("#words1").val();//.replace(/"/g,"'");
	var words2 = $("#words2").val();//.replace(/"/g,"'");
	var intraword1 = $("#intraword1").val();//.replace(/"/g,"'");
	var intraword2 = $("#intraword2").val();//.replace(/"/g,"'");
	var prefixes1 = $("#prefixes1").val();//.replace(/"/g,"'");
	var prefixes2 = $("#prefixes2").val();//.replace(/"/g,"'");
	var suffixes1 = $("#suffixes1").val();//.replace(/"/g,"'");
	var suffixes2 = $("#suffixes2").val();//.replace(/"/g,"'");
	var regex1 = $("#regex1").val();
	var regex2 = $("#regex2").val();
	var rev_regex1 = $("#rev_regex1").val();
	var rev_regex2 = $("#rev_regex2").val();
    var ordering1 = $("#ordering1").val();
    var ordering2 = $("#ordering2").val();

	var defaultText = $("#defaulttext").val();
	var titleFontName = $("#title-font-name").val();

    var backgroundImageSource = $("#background-image-source").val();
    var suggestions = $("#suggestions").val();
    var customScript = $("#custom-script").val();
    var disableReverse = $("#disable-reverse").is(':checked') == true ? 1 : 0;
    var language1Font = $("#language1-font").val();
    var language2Font = $("#language2-font").val();

    var language1FontSize = $("#language1-font-size").val();
    var language2FontSize = $("#language2-font-size").val();
    var titleFontSize = $("#title-font-size").val();

    var titleExtra = $("#title-extra").val();
	//var randomCaps =
	//var protractedEnds =

	$.post("../php/saveTranslator.php", {
				editCode:editCode,
				name:name,
				subtitle:subtitle,
				language1:language1,
				language2:language2,
				description:description,
				email:email,
				phrases1:phrases1,
				phrases2:phrases2,
				words1:words1,
				words2:words2,
				intraword1:intraword1,
				intraword2:intraword2,
				prefixes1:prefixes1,
				prefixes2:prefixes2,
				suffixes1:suffixes1,
				suffixes2:suffixes2,
				regex1:regex1,
				regex2:regex2,
				rev_regex1:rev_regex1,
				rev_regex2:rev_regex2,
                ordering1:ordering1,
                ordering2:ordering2,
				defaultText:defaultText,
				titleFontName:titleFontName,
                backgroundImageSource:backgroundImageSource,
                suggestions:suggestions,
                customScript:customScript,
                disableReverse:disableReverse,
                language1Font:language1Font,
                language2Font:language2Font,
                language1FontSize:language1FontSize,
                language2FontSize:language2FontSize,
                titleFontSize:titleFontSize,
                titleExtra:titleExtra
							})
		.done(function(data) {
			$('#save-loading-gif').hide();
			if(data.substr(0,4) === "@DUP") {
				alert("Error during save process: Sorry, that name is already taken :| Can you think of another?");
			} else if(data.charAt(0) != "%") {
				alert("Something went wrong while saving your translator :| here's the error message:\n\n" + data);
			} else {
				if(localStorage.olduser !== "true") alert("Data saved! REMEMBER: Copy the secret editing link in the address bar to somewhere safe. The public link to your translator is beneath the save button.");
				localStorage.olduser = "true";
				//console.log(data);
                                window.translatorUrlName = data.split(";;;")[1]; //$("#name").val().replace(/[ '"]+/g,'').replace(/\u2013/g,'-').replace(/\./g,'-').replace(/\//g,'');
                                $('.view-translator a').attr('href',"../"+window.translatorUrlName);
                                $('.view-translator').css('display','inline');
                                localStorage[window.translatorUrlName+"/lastSaveTime"] = Date.now();

				saved = 1;
			}

		})
		.fail(function(data) {
			$('#save-loading-gif').hide();
			alert("Sorry, something went wrong :| give it another shot?");
		});
}


/*============================
    TAB CLICKED TRANSITIONS
  ============================*/
$(document).ready(function() {
	$('#tab-buttons .options').click(function(){
		$('.tab-container').css('display','none');
		$('.tab-container.options').css('display','inline');
		$('#tab-buttons .button').removeClass("selected-tab");
		$(this).addClass("selected-tab");
		$(this).removeClass("hover-tab");
	});

	$('#tab-buttons .phrases').click(function(){
		$('.tab-container').css('display','none');
		$('.tab-container.phrases').css('display','inline');
		$('#tab-buttons .button').removeClass("selected-tab");
		$(this).addClass("selected-tab");
		$(this).removeClass("hover-tab");
	});

	$('#tab-buttons .words').click(function(){
		$('.tab-container').css('display','none');
		$('.tab-container.words').css('display','inline');
		$('#tab-buttons .button').removeClass("selected-tab");
		$(this).addClass("selected-tab");
		$(this).removeClass("hover-tab");
	});

	$('#tab-buttons .intraword').click(function(){
		$('.tab-container').css('display','none');
		$('.tab-container.intraword').css('display','inline');
		$('#tab-buttons .button').removeClass("selected-tab");
		$(this).addClass("selected-tab");
		$(this).removeClass("hover-tab");
	});

	$('#tab-buttons .prefixes').click(function(){
		$('.tab-container').css('display','none');
		$('.tab-container.prefixes').css('display','inline');
		$('#tab-buttons .button').removeClass("selected-tab");
		$(this).addClass("selected-tab");
		$(this).removeClass("hover-tab");
	});

	$('#tab-buttons .suffixes').click(function(){
		$('.tab-container').css('display','none');
		$('.tab-container.suffixes').css('display','inline');
		$('#tab-buttons .button').removeClass("selected-tab");
		$(this).addClass("selected-tab");
		$(this).removeClass("hover-tab");
	});

	$('#tab-buttons .regex').click(function(){
		$('.tab-container').css('display','none');
		$('.tab-container.regex').css('display','inline');
		$('#tab-buttons .button').removeClass("selected-tab");
		$(this).addClass("selected-tab");
		$(this).removeClass("hover-tab");
	});

     $('#tab-buttons .ordering').click(function(){
        $('.tab-container').css('display','none');
        $('.tab-container.ordering').css('display','inline');
        $('#tab-buttons .button').removeClass("selected-tab");
        $(this).addClass("selected-tab");
        $(this).removeClass("hover-tab");
     });

	$('#tab-buttons .analytics').click(function(){
		$('.tab-container').css('display','none');
		$('.tab-container.analytics').css('display','inline');
		$('#tab-buttons .button').removeClass("selected-tab");
		$(this).addClass("selected-tab");
		$(this).removeClass("hover-tab");
	});

	$('#tab-buttons .extras').click(function(){
		$('.tab-container').css('display','none');
		$('.tab-container.extras').css('display','inline');
		$('#tab-buttons .button').removeClass("selected-tab");
		$(this).addClass("selected-tab");
		$(this).removeClass("hover-tab");
	});

    $('#tab-buttons .appearance').click(function(){
        $('.tab-container').css('display','none');
        $('.tab-container.appearance').css('display','inline');
        $('#tab-buttons .button').removeClass("selected-tab");
        $(this).addClass("selected-tab");
        $(this).removeClass("hover-tab");
    });

    $('#tab-buttons .embed').click(function(){
        $('.tab-container').css('display','none');
        $('.tab-container.embed').css('display','inline');
        $('#tab-buttons .button').removeClass("selected-tab");
        $(this).addClass("selected-tab");
        $(this).removeClass("hover-tab");
    });

    $('#tab-buttons .suggestions').click(function(){
        $('.tab-container').css('display','none');
        $('.tab-container.suggestions').css('display','inline');
        $('#tab-buttons .button').removeClass("selected-tab");
        $(this).addClass("selected-tab");
        $(this).removeClass("hover-tab");
    });

	/*$('#tab-buttons .extras').click(function(){
		$('.tab-container').css('display','none');
		$('.tab-container.extras').css('display','inline');
		$('#tab-buttons .button').css('background-color','transparent');
		$(this).css('background-color','#8bb9dc');
	});*/

	$('#tab-buttons .button').mouseenter(function() {
		if( !$(this).hasClass("selected-tab") ) {
			$(this).addClass("hover-tab");
		}
	});

	$('#tab-buttons .button').mouseleave(function() {
		$(this).removeClass("hover-tab");
	});

	/* UPDATE LIST PLACEHOLDER TEXT */
	$('#tab-buttons .button').click(function() {
		var lang1 = $('#language1').val();
		var lang2 = $('#language2').val();
		if(lang1 == "") lang1 = "Language1";
		if(lang2 == "") lang2 = "Language2";

		$("textarea.lang1").attr("placeholder", lang1+" list...");
		$("textarea.lang2").attr("placeholder", lang2+" list...");
	});

});



$('.tab-container.words .sort-button').click(function() {
	var words1 = $('#words1').val().split("\n");
	var words2 = $('#words2').val().split("\n");

	var words = new Array();

	for(var i = 0; i < words1.length; i++) {
		words.push([words1[i],words2[i]]);
	}

	words.sort(function(a, b){
		if(a[0] < b[0]) return -1;
		if(a[0] > b[0]) return 1;
		return 0;
	});

	var words1String = "";
	var words2String = "";
	for(var i = 0; i < words1.length; i++) {
		words1String += words[i][0]+"\n";
		words2String += words[i][1]+"\n";
	}
	$('#words1').val(words1String);
	$('#words2').val(words2String);
});

//sort based on descending word legnth
$('.tab-container.words .sort-length-button').click(function() {
	var words1 = $('#words1').val().split("\n");
	var words2 = $('#words2').val().split("\n");

	var words = new Array();

	for(var i = 0; i < words1.length; i++) {
		words.push([words1[i],words2[i]]);
	}

	words.sort(function(a, b){
	  return b[0].length - a[0].length; // ASC -> a - b; DESC -> b - a
	});

	var words1String = "";
	var words2String = "";
	for(var i = 0; i < words1.length; i++) {
		words1String += words[i][0]+"\n";
		words2String += words[i][1]+"\n";
	}
	$('#words1').val(words1String);
	$('#words2').val(words2String);
});

/*============================
          SEND BACKUP
  ============================*/
function sendBackup() {

	var message = "";
	message += "\n\n### PHRASES1 ###\n";
	message += $('#phrases1').val();
	message += "\n\n### PHRASES2 ###\n";
	message += $('#phrases2').val();

	message += "\n\n### WORDS1 ###\n";
	message += $('#words1').val();
	message += "\n\n### WORDS2 ###\n";
	message += $('#words2').val();

	message += "\n\n### INTRAWORD1 ###\n";
	message += $('#intraword1').val();
	message += "\n\n### INTRAWORD2 ###\n";
	message += $('#intraword2').val();

	message += "\n\n### PREFIXES1 ###\n";
	message += $('#prefixes1').val();
	message += "\n\n### PREFIXES2 ###\n";
	message += $('#prefixes2').val();

	message += "\n\n### SUFFIXES1 ###\n";
	message += $('#suffixes1').val();
	message += "\n\n### SUFFIXES2 ###\n";
	message += $('#suffixes2').val();

	message += "\n\n### REGEX1 ###\n";
	message += $('#regex1').val();
	message += "\n\n### REGEX2 ###\n";
	message += $('#regex2').val();

	$.post("/php/sendBackup.php", { message:message, editCode:editCode})
		.done(function(data) {
			alert("Backup complete! It should pop into your inbox some time soon.");
		})
		.fail(function(data) {
			alert("Sorry, something went wrong :| maybe try sending again? If it fails again, it'd be great if you could email hello@josephrocca.com :)");
		});
}


/*============================
        SYNC SCROLL BARS
  ============================*/

$(document).ready(function() {
	$('.list1').scroll(function() {
		$(this).next('textarea').scrollTop( $(this).scrollTop() )
	});

	$('.list2').scroll(function() {
		$(this).prev('textarea').scrollTop( $(this).scrollTop() )
	});
});

/*==========================
   auto add row on other list
  ==========================*/
$('.list1').keypress(function(e) {
	if(e.which == 13) {
		var $other_list = $(this).siblings('.list2');
		var new_text = $other_list.val() + "\n";
		$other_list.val( new_text );
	}
});
