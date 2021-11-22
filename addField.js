Ecwid.OnPageLoaded.add(function(page){
    if(page.type == "CART"){ 
		var newField = document.createElement("div");       
		newField.innerHTML = '<p> <div class="ec-cart__email ec-cart-email"> <div class="ec-cart-email__text">Your custom field</div> <div class="form-control form-control--flexible form-control--large"> <input id="cstm-input" class="form-control__text" type="text" name="text" placeholder="Your text" autocorrect="off" autocapitalize="off" spellcheck="off" required="" enterkeyhint="go" maxlength="254"> </div></div> </p>'; 

	document.querySelector('.ec-cart__email').insertAdjacentElement("beforebegin", newField); 
			// "afterend" - to insert after the element

    var inpt = document.getElementById("cstm-input");
    inpt.addEventListener("input", function() {
        ec = ec || {};
        ec.order = ec.order || {};
        ec.order.extraFields = ec.order.extraFields || {};
         ec.order.extraFields.customField = {
         'title': 'Your custom field',
         'type': 'text', 
         'value': inpt.value, // как запихать значение сюда???
         'orderDetailsDisplaySection': 'order_comments'
         };
        Ecwid.refreshConfig();

    });
    }
});