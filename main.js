function showBiology() {
};
function hideBiology() {
};
var head = document.createElement('div');
head.className = "head";
head.innerHTML = "<div></div>";
document.body.insertBefore(head, document.body.firstChild);
//Элемент 1 для вставки ссылки
var p1 = document.createElement('p');
p1.className = "p";
head.appendChild(p1);
/*//Элемент 2 для вставки ссылки
var p2 = document.createElement('p');
p2.className = "p";
head.appendChild(p2);
//Ссылка на биологию
var a2 = document.createElement('a');
a2.className = "href";
a2.href="https://vadimrukavitsyn.github.io/index2.html";
a2.innerHTML = "<a>Биология</a>";
p2.append(a2);*/
//Выпадающий список
var div2 = document.createElement('div');
div2.className = "div-select";
div2.onmouseover= "showBiology()";
div2.onmouseout= "hideBiology()";
div2.innerHTML = "Биология"
head.appendChild(div2);
//div2.appendChild
//Элемент 3 для вставки ссылки
var p3 = document.createElement('p');
p3.className = "p";
head.appendChild(p3);
//Ссылка на химию
var a1 = document.createElement('a');
a1.className = "href";
a1.href="https://vadimrukavitsyn.github.io/index1.html";
a1.innerHTML = "<a>Химия</a>";
p1.append(a1);
//Ссылка на математику
var a3 = document.createElement('a');
a3.className = "href";
a3.href="https://vadimrukavitsyn.github.io/index3.html";
a3.innerHTML = "<a>Математика</a>";
p3.append(a3);
