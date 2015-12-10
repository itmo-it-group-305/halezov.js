var form = {
	tag: 'form',
	child: [
		{tag:'button', text:'x', id:'close'},
		{tag:'br'},
		{tag:'label', text:'Дата'},
		{tag:'input', type:"text", id:"date"},
		{tag:'label', text:'Телефон'},
		{tag:'input', type:"text", id:"phone"},
		{tag:'label', text:"Email"},
		{tag:'input', type:"text", id:"Email"},
		{tag:'button', text:'Отправить', id:'knopa'},
	]
}

function builderHtml (obj) {
	for(i in obj) {
		if(i == 'tag'){
			elm=document.createElement(obj[i]);
		}
		if(i == 'text') {
			elm.innerHTML = obj[i];
		}
		if(i == 'type' || i == 'id') {
			elm.setAttribute(i, obj[i])
		}
	}
			return elm;
}

function builderForm (obj) {
	for (i in obj) {
		if(i == 'tag') {
			parent=document.createElement(obj[i])
		}
		if(i == 'child') {
			for (i in obj.child) {
				parent.appendChild(builderHtml(obj.child[i]))
			}
		}
	}
		return parent;
}

parent=document.getElementById('form');
	parent.appendChild(builderForm(form));


function checkEmptyField (field) {
	return Boolean(field.value);
}

document.getElementById('knopa').onclick =
function getFieldsForm () {
	var field=['date', 'phone', 'Email'];
	for (i in field) {
		var obj=document.getElementById(field[i])
			if (checkEmptyField(obj)){
				obj.style.background = 'green';
			}
			else {
				obj.style.background = 'red';
				continue;
			}

			if (field[i] == 'phone') {
				if (checkPhone(obj.value)){
					obj.style.background = 'green';
				}
				else {
					obj.style.background = 'red';
				}
			}

			if (field[i] == 'Email') {
				if (checkEmail(obj.value)){
					obj.style.background = 'green';
				}
				else {
					obj.style.background = 'red';
				}
			}

			if (field[i] == 'date') {
				if (checkDate(obj.value)){
					obj.style.background = 'green';
				}
				else {
					obj.style.background = 'red';
				}
			}
		}
	}



function checkPhone (str) {
	ptr = /\b7\(\d{3}\)\d{3}-\d{2}-\d{2}\b/
	return ptr.test(str);
}

function checkEmail (str) {
	ptr = /\w+@\w+[.][a-z]/
	return ptr.test(str);
}

function checkDate (str) {
	ptr = /\d{2}[\/.]\d{2}[\/.]\d{4}/
	return ptr.test(str);
}

document.getElementById('close').onclick =
    function close() {
		var forms = document.getElementById('form');
    	forms.style.display = "none";
   		return false;
}