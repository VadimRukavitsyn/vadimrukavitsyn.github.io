function div_biology_close()
{document.getElementById('div_biology_list').style.display = 'none';
};
function div_mathematics_close()
{document.getElementById('div_mathematics_list').style.display = 'none';
};
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

var a_tests_secondpart_proteins = document.createElement('a');
a_tests_secondpart_proteins.href = "https://vadimrukavitsyn.github.io/biology/tests/secondpart/proteins.html";
a_tests_secondpart_proteins.className = "href";
a_tests_secondpart_proteins.innerHTML = "Задачи на биосинтез белка";
div_biology_list.appendChild(a_tests_secondpart_proteins);
                       
var a_tests_secondpart_plants = document.createElement('a');
a_tests_secondpart_plants.href = "https://vadimrukavitsyn.github.io/biology/tests/secondpart/plants.html";
a_tests_secondpart_plants.className = "href";
a_tests_secondpart_plants.innerHTML = "Задачи по жизненным циклам растений";
div_biology_list.appendChild(a_tests_secondpart_plants);

var a_tests_secondpart_animals = document.createElement('a');
a_tests_secondpart_animals.href = "https://vadimrukavitsyn.github.io/biology/tests/secondpart/animals.html";
a_tests_secondpart_animals.className = "href";
a_tests_secondpart_animals.innerHTML = "Задачи по делению клеток животных";
div_biology_list.appendChild(a_tests_secondpart_animals);

var a_biology_facts = document.createElement('a');
/*a_biology_facts.href = "https://vadimrukavitsyn.github.io/biology/facts.html";*/
a_biology_facts.href = "https://vadimrukavitsyn.github.io/biology/facts.html";
a_biology_facts.className = "href";
a_biology_facts.innerHTML = "Интересные факты;
div_biology_list.appendChild(a_biology_facts);
                       
var a_biology_addition = document.createElement('a');
a_biology_addition.href = "https://vadimrukavitsyn.github.io/biology/addition.html";
a_biology_addition.className = "href";
a_biology_addition.innerHTML = "Дополнительная информация";
div_biology_list.appendChild(a_biology_addition);

var div_mathematics = document.createElement('div');
div_mathematics.className = "div-head";
div_mathematics.id = "div_mathematics";
div_mathematics.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/mathematics.html">Математика и информатика</a>';
head.appendChild(div_mathematics);

var div_mathematics_list = document.createElement('div');
div_mathematics_list.className = "div-list";
div_mathematics_list.id = "div_mathematics_list";
div_mathematics.appendChild(div_mathematics_list);

var a_mathematics_statistics = document.createElement('a');
a_mathematics_statistics.href = "https://vadimrukavitsyn.github.io/mathematics/statistics.html";
a_mathematics_statistics.className = "href";
a_mathematics_statistics.innerHTML = "Статистика";
div_mathematics_list.appendChild(a_mathematics_statistics);

var a_programming_languages = document.createElement('a');
a_programming_languages.href = "https://vadimrukavitsyn.github.io/mathematics/programming-languages.html";
a_programming_languages.className = "href";
a_programming_languages.innerHTML = "Языки программирования";
div_mathematics_list.appendChild(a_programming_languages);

var a_machine_learning = document.createElement('a');
a_machine_learning.href = "https://vadimrukavitsyn.github.io/mathematics/machine-learning.html";
a_machine_learning.className = "href";
a_machine_learning.innerHTML = "Машинное обучение";
div_mathematics_list.appendChild(a_machine_learning);

var a_modeling = document.createElement('a');
a_modeling.href = "https://vadimrukavitsyn.github.io/mathematics/modeling.html";
a_modeling.className = "href";
a_modeling.innerHTML = "Моделирование";
div_mathematics_list.appendChild(a_modeling);

/*Задачи по цитологии*/
document.getElementById('div_biology').onmouseover = function()
{
  document.getElementById('div_biology_list').style.display = 'grid';
  document.getElementById('div_mathematics_list').style.display = 'none';
};
document.getElementById('div_biology').onmouseout = function()
{
  setTimeout(div_biology_close, 4000)
};
document.getElementById('div_mathematics').onmouseover = function()
{
  document.getElementById('div_mathematics_list').style.display = 'grid';
  document.getElementById('div_biology_list').style.display = 'none';
};
document.getElementById('div_mathematics').onmouseout = function()
{
  setTimeout(div_mathematics_close, 4000)
};
}
HeadCreate();
