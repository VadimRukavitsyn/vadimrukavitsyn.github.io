function div_biology_close()
{document.getElementById('div_biology_list').style.display = 'none';
}
function HeadCreate() {var head = document.createElement('div');
head.className = "head";
document.body.insertBefore(head, document.body.firstChild);

//Раскрывающийся элемент

var div_chemistry = document.createElement('div');
div_chemistry.className = "div-head";
div_chemistry.id = "div_chemistry";
div_chemistry.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/index1.html">Химия</a>';
head.appendChild(div_chemistry);

var div_biology = document.createElement('div');
div_biology.className = "div-head";
div_biology.id = "div_biology";
div_biology.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/index2.html">Биология</a>';
head.appendChild(div_biology);

var div_mathematics = document.createElement('div');
div_mathematics.className = "div-head";
div_mathematics.id = "div_mathematics";
div_mathematics.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/mathematics.html">Математика и информатика</a>';
head.appendChild(div_mathematics);

var div_biology_list = document.createElement('div');
div_biology_list.className = "div-list";
div_biology_list.id = "div_biology_list";
div_biology.appendChild(div_biology_list);

var a_data_presentations = document.createElement('a');
a_data_presentations.href = "https://vadimrukavitsyn.github.io/biology/data/presentations.html";
a_data_presentations.className = "href";
a_data_presentations.innerHTML = "Презентации";
div_biology_list.appendChild(a_data_presentations);
/*Полезные ссылки
Тесты ОГЭ*/

var a_tests_firstpart_use = document.createElement('a');
a_tests_firstpart_use.href = "https://vadimrukavitsyn.github.io/biology/tests/firstpart/use.html";
a_tests_firstpart_use.className = "href";
a_tests_firstpart_use.innerHTML = "Тесты ЕГЭ";
div_biology_list.appendChild(a_tests_firstpart_use);

var a_tests_secondpart_genetics = document.createElement('a');
a_tests_secondpart_genetics.href = "https://vadimrukavitsyn.github.io/biology/tests/secondpart/genetics.html";
a_tests_secondpart_genetics.className = "href";
a_tests_secondpart_genetics.innerHTML = "Задачи по генетике";
div_biology_list.appendChild(a_tests_secondpart_genetics);

var a_biology_addition = document.createElement('a');
a_biology_addition.href = "https://vadimrukavitsyn.github.io/biology/addition.html";
a_biology_addition.className = "href";
a_biology_addition.innerHTML = "Дополнительная информация";
div_biology_list.appendChild(a_biology_addition);
/*Задачи по цитологии*/
document.getElementById('div_biology').onmouseover = function()
{
  document.getElementById('div_biology_list').style.display = 'grid';
};
document.getElementById('div_biology').onmouseout = function()
{
  setTimeout(div_biology_close, 4000)
};
}
HeadCreate();
