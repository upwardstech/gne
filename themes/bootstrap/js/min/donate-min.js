jQuery(document).ready(function($){var t=$("div.setup-panel div a"),e=$(".setup-content"),r=$(".nextBtn");e.hide(),t.click(function(r){r.preventDefault();var a=$($(this).attr("href")),i=$(this);i.hasClass("disabled")||(t.removeClass("btn-primary").addClass("btn-default"),i.addClass("btn-primary"),e.hide(),a.show(),a.find("input:eq(0)").focus())}),r.click(function(){var t=$(this).closest(".setup-content"),e=t.attr("id"),r=$('div.setup-panel div a[href="#'+e+'"]').parent().next().children("a"),a=t.find("input[type='text'],input[type='url']"),i=!0;$(".form-group").removeClass("has-error");for(var s=0;s<a.length;s++)a[s].validity.valid||(i=!1,$(a[s]).closest(".form-group").addClass("has-error"));i&&r.removeAttr("disabled").trigger("click")}),$("div.setup-panel div a.btn-primary").trigger("click")});