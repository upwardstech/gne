!function($){luminateExtend({apiKey:"sosapikey",path:{nonsecure:"https://secure.nokidhungry.org/site/",secure:"https://secure.nokidhungry.org/site/"}}),$(function(){var e=12181;$(".donation-form").length>0&&(luminateExtend.api.request({api:"CRDonationAPI",data:"method=getDonationFormInfo&form_id="+e,callback:function(e){var o=$("#donation_level");o.empty();var r="";if(e.getDonationFormInfoResponse.donationLevels&&e.getDonationFormInfoResponse.donationLevels.donationLevel.length>0)for(var t=0;t<e.getDonationFormInfoResponse.donationLevels.donationLevel.length;t++){var n=e.getDonationFormInfoResponse.donationLevels.donationLevel[t],s=n.amount.formatted,i="";2===t&&(i=" break-line"),r+="true"===n.userSpecified?'<div class="radio-wrap wrap-amount'+i+'"><input type="radio" id="level-other" name="level_id" value="'+n.level_id+'"><label class="donation_amount donation_amount_other " for="level-other"> Other </label></div><div  id="wrap-amount_other" style="display: none"><input type="text" id="other-amount" class="other-amount" name="other_amount" disabled></div>':'<div class="radio-wrap wrap-amount'+i+'"><input type="radio" id="'+n.level_id+'" name="level_id" value="'+n.level_id+'"> <label class="donation_amount" for="'+n.level_id+'" >'+s.substr(0,s.length-3)+"</label></div>"}o.html(r)}}),$("body").on("click",'input[name="level_id"]',function(){$(this).is("#level-other")?($("#other-amount").removeAttr("disabled"),$("#other-amount").attr("name","other_amount"),$("#other-amount").focus(),$("#wrap-amount_other").css("display","inline-block")):($("#other-amount").attr("disabled","disabled"),$("#other-amount").removeAttr("name"),$("#wrap-amount_other").css("display","none"),$("#key-next-step").removeClass("btnDisabledHref"))}),$("body").on("keypress",'input[name="other_amount"]',function(e){13==e.which&&e.preventDefault();var o=parseInt($(this).val());o>0?$("#key-next-step").removeClass("btnDisabledHref"):$("#key-next-step").addClass("btnDisabledHref")}),$(".donation-form").submit(function(){window.scrollTo(0,0),$("#form_id").val(e),$("#donate-submit").prop("disabled",!0),$(this).hide(),$(this).before('<div class="well donation-loading">Loading ...</div>')})),window.donateCallback={error:function(e){console.log("donate error"),console.log(e),$("#donation-errors").remove(),$(".donation-form").prepend('<div id="donation-errors"><div class="alert alert-danger">'+e.errorResponse.message+"</div></div>"),$(".donation-loading").remove(),$(".donation-form").show(),$("#donate-submit").prop("disabled",!1)},success:function(e){console.log("donate success"),console.log(e),$("#donation-errors").remove(),$("#donate-submit").prop("disabled",!1),e.donationResponse.errors?($(".donation-form").prepend('<div id="donation-errors">'+(e.donationResponse.errors.message?'<div class="alert alert-danger">'+e.donationResponse.errors.message+"</div>":"")+"</div>"),$(".donation-loading").remove(),$(".donation-form").show()):($("#donate-thank-container").removeClass("hidden"),$(".donation-loading").remove(),$(".donation-form").before('<div class="alert alert-success">Your donation has been processed!</div><div class="well"><p>Thank you for your donation of $'+e.donationResponse.donation.amount.decimal+".</p>"+("string"==typeof e.donationResponse.donation.confirmation_code?"<p>Your confirmation code is "+e.donationResponse.donation.confirmation_code+".</p>":"")+"</div>"))}},$(".survey-form").length>0&&(luminateExtend.api.request({api:"CRSurveyAPI",data:"method=getSurvey&survey_id="+surveyId,requestType:"POST",requiresAuth:!0,callback:function(e){if(e.errorResponse&&e.errorResponse.message)$(".survey-form").prepend('<div id="survey-errors"><div class="alert alert-danger">'+e.errorResponse.message+"</div></div>");else if(e.getSurveyResponse.survey.surveyQuestions&&e.getSurveyResponse.survey.surveyQuestions.length>0){var o=$("#survey-content");o.empty();for(var r="",t=0;t<e.getSurveyResponse.survey.surveyQuestions.length;t++){var n=e.getSurveyResponse.survey.surveyQuestions[t],s="question_"+n.questionId,i="true"==n.questionRequired?'<span class="required"> *</span>':"";r+="false"==n.hidden?'<div><label for="survey-'+s+'">'+n.questionText+i+'</label><div><input type="text" name="'+s+'" id="survey-'+s+'" data-convio-text="'+n.questionText+'"/></div></div>':'<input type="hidden" id="'+s+'" name="'+s+'" value="">'}o.html(r)}}}),$("#survey_id").val(surveyId),$(".survey-form").submit(function(e){e.preventDefault(),$(this).attr("id")||$(this).attr("id","luminateApi-"+(new Date).getTime());var o=$(this).attr("action"),r=o.split("?"),t=$(this).data("luminateapi"),n=-1!=r[0].indexOf("/site/")?r[0].split("/site/")[1]:r[0],s,i=$(this).attr("enctype"),a=r.length>1?r[1]:"",d="#"+$(this).attr("id"),l=$(this),u=null;$("[data-convio-text]").each(function(){var e=$(this).data("convio-text").toLowerCase().split(" ").join("_");"email"==e?u=$(this).val():$("<input />").attr("type","hidden").attr("name","cons_"+e).attr("value",$(this).val()).appendTo(l)}),t&&(t.callback&&(s=luminateExtend.utils.stringToObj(t.callback)),t.requiresAuth&&"true"==t.requiresAuth&&(requestRequiresAuth=!0),(0==o.indexOf("https:")||"https:"==window.location.protocol&&-1==o.indexOf("http"))&&(requestUseHTTPS=!0));var v=function(e,o){e&&uminateExtend.global.update({auth:{token:e,type:"auth"}}),o&&$("<input />").attr("type","hidden").attr("name","cons_id").attr("value",o).appendTo(l),luminateExtend.api.request({api:n,callback:submitSurveyCallback,contentType:i,data:a,form:d,requestType:"POST",requiresAuth:!0,useHTTPS:!0})},p=function(e){$("#survey-errors").remove(),$(".survey-form .form-group .alert").remove(),l.prepend('<div id="survey-errors"><div class="alert alert-danger">'+("string"==typeof e?e:e.errorResponse.message)+"</div></div>"),$(".survey-loading").remove(),l.show()};return u?(window.scrollTo(0,0),$(this).hide(),$(this).before('<div class="well survey-loading">Loading ...</div>'),void luminateExtend.api.request({api:"cons",callback:{success:function(e){console.log("SUCCESS"),v(e.createConsResponse.token)},error:function(e){e.errorResponse&&11==e.errorResponse.code?luminateExtend.api({api:"cons",callback:{success:function(e){console.log(e.loginResponse.token)},error:function(e){console.log("SOMETHINGS ERROR")}},data:"method=authenticateUser",requestType:"POST"}):p(e)}},data:"method=create&primary_email="+u+"&get_single_sign_on_token=true",requestType:"POST",requiresAuth:!0})):void p("Email required")})),window.submitSurveyCallback={error:function(e){$("#survey-errors").remove(),$(".survey-form .form-group .alert").remove(),$(".survey-form").prepend('<div id="survey-errors"><div class="alert alert-danger">'+e.errorResponse.message+"</div></div>"),$(".survey-loading").remove(),$(".survey-form").show()},success:function(e){if($("#survey-errors").remove(),$(".survey-form .form-group .survey-alert-wrap").remove(),"false"==e.submitSurveyResponse.success){$(".survey-form").prepend('<div id="survey-errors"><div class="alert alert-danger">'+(e.submitSurveyResponse.errors?e.submitSurveyResponse.errors.errorMessage:"There was an error with your submission. Please try again.")+"</div></div>");var o=luminateExtend.utils.ensureArray(e.submitSurveyResponse.errors);$.each(o,function(){this.errorField&&$('input[name="'+this.errorField+'"]').closest("div").prepend('<div class="survey-alert-wrap"><div class="alert alert-danger">'+this.errorMessage+"</div></div>")}),$(".survey-loading").remove(),$(".survey-form").show()}else $(".survey-loading").remove(),$(".survey-form").before('<div class="alert alert-success">You\'ve been signed up!</div><div class="well"><p>Thanks for joining. You should receive your first issue of the e-newsletter shortly.</p></div>')}},luminateExtend.api.bind()})}(jQuery);