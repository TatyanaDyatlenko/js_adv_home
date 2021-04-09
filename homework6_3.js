
window.onload = function(){
    form1.userName.addEventListener('change', nameOnChange);
    form1.email.addEventListener('change', emailOnChange);
    form1.zip.addEventListener('change', zipcodeOnChange);
    form1.addEventListener('submit', onsubmitHandler);

    function nameOnChange() {
        var pattern = /[a-zA-Zа-яА-Я]+/;
        validate(this, pattern);
    }

    function emailOnChange() {
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    }

    function zipcodeOnChange() {
        var pattern = /\d{5}/;
        validate(this, pattern);
    }
    function validate(elem, pattern) {
        var res = pattern.test(elem.value);
        if (res === false) {
            elem.className = "invalid";
        }else{
            elem.className = "valid";
        }
    }


    function onsubmitHandler(event) {
        var invalid = false;

        for (var i = 0; i < form1.elements.length; ++i) {
            var elem = form1.elements[i];
            if (elem.type === "text"){
                if(elem.className == "invalid" || elem.className == ""){
                    invalid = true;
                }
            }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        event.preventDefault();
        return false; 
    }
}
}