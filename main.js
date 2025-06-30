function div_chemistry_close()
{document.getElementById('div_chemistry_list').style.display = 'none';
};

function div_biology_close()
{document.getElementById('div_biology_list').style.display = 'none';
};

function div_mathematics_close()
{document.getElementById('div_mathematics_list').style.display = 'none';
};

function div_medicine_close()
{document.getElementById('div_medicine_list').style.display = 'none';
};

function HeadCreate() {var head = document.createElement('div');
head.className = "head";
document.body.insertBefore(head, document.body.firstChild);

//Раскрывающийся элемент

var div_chemistry = document.createElement('div');
div_chemistry.className = "div-head";
div_chemistry.id = "div_chemistry";
div_chemistry.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/chemistry.html">Химия</a>';
head.appendChild(div_chemistry);

var div_chemistry_list = document.createElement('div');
div_chemistry_list.className = "div-list";
div_chemistry_list.id = "div_chemistry_list";
div_chemistry.appendChild(div_chemistry_list);

var a_chemistry_presentations = document.createElement('a');
a_chemistry_presentations.href = "https://vadimrukavitsyn.github.io/chemistry/data/presentations.html";
a_chemistry_presentations.className = "href";
a_chemistry_presentations.innerHTML = "Презентации";
div_chemistry_list.appendChild(a_chemistry_presentations);

var a_chemistry_mse = document.createElement('a');
a_chemistry_mse.href = "https://vadimrukavitsyn.github.io/chemistry/mse.html";
a_chemistry_mse.className = "href";
a_chemistry_mse.innerHTML = "ОГЭ";
div_chemistry_list.appendChild(a_chemistry_mse);

var a_chemistry_use = document.createElement('a');
a_chemistry_use.href = "https://vadimrukavitsyn.github.io/chemistry/use.html";
a_chemistry_use.className = "href";
a_chemistry_use.innerHTML = "EГЭ";
div_chemistry_list.appendChild(a_chemistry_use);

var div_biology = document.createElement('div');
div_biology.className = "div-head";
div_biology.id = "div_biology";
div_biology.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/biology.html">Биология</a>';
head.appendChild(div_biology);

var div_biology_list = document.createElement('div');
div_biology_list.className = "div-list";
div_biology_list.id = "div_biology_list";
div_biology.appendChild(div_biology_list);

var a_biology_presentations = document.createElement('a');
a_biology_presentations.href = "https://vadimrukavitsyn.github.io/biology/data/presentations.html";
a_biology_presentations.className = "href";
a_biology_presentations.innerHTML = "Презентации";
div_biology_list.appendChild(a_biology_presentations);
/*Полезные ссылки
Тесты ОГЭ*/

var a_biology_use = document.createElement('a');
a_biology_use.href = "https://vadimrukavitsyn.github.io/biology/use.html";
a_biology_use.className = "href";
a_biology_use.innerHTML = "ЕГЭ";
div_biology_list.appendChild(a_biology_use);

var a_biology_facts = document.createElement('a');
a_biology_facts.href = "https://vadimrukavitsyn.github.io/biology/facts.html";
a_biology_facts.className = "href";
a_biology_facts.innerHTML = "Интересные факты";
div_biology_list.appendChild(a_biology_facts);

var a_biology_addition = document.createElement('a');
a_biology_addition.href = "https://vadimrukavitsyn.github.io/biology/addition.html";
a_biology_addition.className = "href";
a_biology_addition.innerHTML = "Дополнительная информация";
div_biology_list.appendChild(a_biology_addition);

var a_biology_links = document.createElement('a');
a_biology_links.href = "https://vadimrukavitsyn.github.io/biology/links.html";
a_biology_links.className = "href";
a_biology_links.innerHTML = "Ссылки";
div_biology_list.appendChild(a_biology_links);

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

var div_medicine = document.createElement('div');
div_medicine.className = "div-head";
div_medicine.id = "div_medicine";
div_medicine.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/medicine.html">Медицина</a>';
head.appendChild(div_medicine);

var div_medicine_list = document.createElement('div');
div_medicine_list.className = "div-list";
div_medicine_list.id = "div_medicine_list";
div_medicine.appendChild(div_medicine_list);

var a_medicine_diseases = document.createElement('a');
a_medicine_diseases.href = "https://vadimrukavitsyn.github.io/medicine/diseases.html";
a_medicine_diseases.className = "href";
a_medicine_diseases.innerHTML = "Заболевания";
div_medicine_list.appendChild(a_medicine_diseases);

var a_medicine_drugs = document.createElement('a');
a_medicine_drugs.href = "https://vadimrukavitsyn.github.io/medicine/drugs.html";
a_medicine_drugs.className = "href";
a_medicine_drugs.innerHTML = "Лекарства";
div_medicine_list.appendChild(a_medicine_drugs);

var a_medicine_operations = document.createElement('a');
a_medicine_operations.href = "https://vadimrukavitsyn.github.io/medicine/operations.html";
a_medicine_operations.className = "href";
a_medicine_operations.innerHTML = "Операции";
div_medicine_list.appendChild(a_medicine_operations);

var a_medicine_documents = document.createElement('a');
a_medicine_documents.href = "https://vadimrukavitsyn.github.io/medicine/documents.html";
a_medicine_documents.className = "href";
a_medicine_documents.innerHTML = "Документы";
div_medicine_list.appendChild(a_medicine_documents);

var div_about = document.createElement('div');
div_about.className = "div-head";
div_about.id = "div_about";
div_about.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/about.html">О репетиторе</a>';
head.appendChild(div_about);

document.getElementById('div_chemistry').onmouseover = function()
{
  document.getElementById('div_chemistry_list').style.display = 'grid';
  document.getElementById('div_biology_list').style.display = 'none';
  document.getElementById('div_mathematics_list').style.display = 'none';
  document.getElementById('div_medicine_list').style.display = 'none';
};

document.getElementById('div_chemistry').onmouseout = function()
{
  setTimeout(div_chemistry_close, 4000)
};

document.getElementById('div_biology').onmouseover = function()
{
  document.getElementById('div_chemistry_list').style.display = 'none';
  document.getElementById('div_biology_list').style.display = 'grid';
  document.getElementById('div_mathematics_list').style.display = 'none';
  document.getElementById('div_medicine_list').style.display = 'none';
};
document.getElementById('div_biology').onmouseout = function()
{
  setTimeout(div_biology_close, 4000)
};
document.getElementById('div_mathematics').onmouseover = function()
{
  document.getElementById('div_chemistry_list').style.display = 'none';
  document.getElementById('div_biology_list').style.display = 'none';
  document.getElementById('div_mathematics_list').style.display = 'grid';
  document.getElementById('div_medicine_list').style.display = 'none';
};
document.getElementById('div_mathematics').onmouseout = function()
{
  setTimeout(div_mathematics_close, 4000)
};
document.getElementById('div_medicine').onmouseover = function()
{
  document.getElementById('div_chemistry_list').style.display = 'none';
  document.getElementById('div_biology_list').style.display = 'none';
  document.getElementById('div_mathematics_list').style.display = 'none';
  document.getElementById('div_medicine_list').style.display = 'grid';
};
document.getElementById('div_medicine').onmouseout = function()
{
  setTimeout(div_medicine_close, 4000)
};
};
function TailCreate()  {var tail = document.createElement('div');
tail.className = "foot";
document.body.append(tail);

var div_chemistry = document.createElement('div');
div_chemistry.className = "div-foot";
div_chemistry.id = "tail_div_chemistry";
div_chemistry.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/chemistry.html">Химия</a>';
tail.appendChild(div_chemistry);

var a_chemistry_presentations = document.createElement('a');
a_chemistry_presentations.href = "https://vadimrukavitsyn.github.io/chemistry/data/presentations.html";
a_chemistry_presentations.className = "href";
a_chemistry_presentations.innerHTML = "Презентации";
div_chemistry.appendChild(a_chemistry_presentations);

var a_chemistry_mse = document.createElement('a');
a_chemistry_mse.href = "https://vadimrukavitsyn.github.io/chemistry/mse.html";
a_chemistry_mse.className = "href";
a_chemistry_mse.innerHTML = "ОГЭ";
div_chemistry.appendChild(a_chemistry_mse);

var a_chemistry_use = document.createElement('a');
a_chemistry_use.href = "https://vadimrukavitsyn.github.io/chemistry/use.html";
a_chemistry_use.className = "href";
a_chemistry_use.innerHTML = "ЕГЭ";
div_chemistry.appendChild(a_chemistry_use);

var div_biology = document.createElement('div');
div_biology.className = "div-foot";
div_biology.id = "tail_div_biology";
div_biology.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/biology.html">Биология</a>';
tail.appendChild(div_biology);

var a_biology_presentations = document.createElement('a');
a_biology_presentations.href = "https://vadimrukavitsyn.github.io/biology/data/presentations.html";
a_biology_presentations.className = "href";
a_biology_presentations.innerHTML = "Презентации";
div_biology.appendChild(a_biology_presentations);
                        
var a_biology_use = document.createElement('a');
a_biology_use.href = "https://vadimrukavitsyn.github.io/biology/use.html";
a_biology_use.className = "href";
a_biology_use.innerHTML = "ЕГЭ";
div_biology.appendChild(a_biology_use);

var a_biology_facts = document.createElement('a');
a_biology_facts.href = "https://vadimrukavitsyn.github.io/biology/facts.html";
a_biology_facts.className = "href";
a_biology_facts.innerHTML = "Интересные факты";
div_biology.appendChild(a_biology_facts);

var a_biology_addition = document.createElement('a');
a_biology_addition.href = "https://vadimrukavitsyn.github.io/biology/addition.html";
a_biology_addition.className = "href";
a_biology_addition.innerHTML = "Дополнительная информация";
div_biology.appendChild(a_biology_addition);

var a_biology_links = document.createElement('a');
a_biology_links.href = "https://vadimrukavitsyn.github.io/biology/links.html";
a_biology_links.className = "href";
a_biology_links.innerHTML = "Ссылки";
div_biology.appendChild(a_biology_links);

var div_mathematics = document.createElement('div');
div_mathematics.className = "div-foot";
div_mathematics.id = "tail_div_mathematics";
div_mathematics.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/mathematics.html">Математика и информатика</a>';
tail.appendChild(div_mathematics);

var a_mathematics_statistics = document.createElement('a');
a_mathematics_statistics.href = "https://vadimrukavitsyn.github.io/mathematics/statistics.html";
a_mathematics_statistics.className = "href";
a_mathematics_statistics.innerHTML = "Статистика";
div_mathematics.appendChild(a_mathematics_statistics);

var a_mathematics_programming_languages = document.createElement('a');
a_mathematics_programming_languages.href = "https://vadimrukavitsyn.github.io/mathematics/programming-languages.html";
a_mathematics_programming_languages.className = "href";
a_mathematics_programming_languages.innerHTML = "Языки программирования";
div_mathematics.appendChild(a_mathematics_programming_languages);

var a_mathematics_machine_learning = document.createElement('a');
a_mathematics_machine_learning.href = "https://vadimrukavitsyn.github.io/mathematics/machine-learning.html";
a_mathematics_machine_learning.className = "href";
a_mathematics_machine_learning.innerHTML = "Машинное обучение";
div_mathematics.appendChild(a_mathematics_machine_learning);

var a_mathematics_modeling = document.createElement('a');
a_mathematics_modeling.href = "https://vadimrukavitsyn.github.io/mathematics/modeling.html";
a_mathematics_modeling.className = "href";
a_mathematics_modeling.innerHTML = "Моделирование";
div_mathematics.appendChild(a_mathematics_modeling);

var div_medicine = document.createElement('div');
div_medicine.className = "div-foot";
div_medicine.id = "tail_div_medicine";
div_medicine.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/medicine.html">Медицина</a>';
tail.appendChild(div_medicine);

var a_medicine_diseases = document.createElement('a');
a_medicine_diseases.href = "https://vadimrukavitsyn.github.io/medicine/diseases.html";
a_medicine_diseases.className = "href";
a_medicine_diseases.innerHTML = "Заболевания";
div_medicine.appendChild(a_medicine_diseases);

var a_medicine_drugs = document.createElement('a');
a_medicine_drugs.href = "https://vadimrukavitsyn.github.io/medicine/drugs.html";
a_medicine_drugs.className = "href";
a_medicine_drugs.innerHTML = "Лекарства";
div_medicine.appendChild(a_medicine_drugs);

var a_medicine_operations = document.createElement('a');
a_medicine_operations.href = "https://vadimrukavitsyn.github.io/medicine/operations.html";
a_medicine_operations.className = "href";
a_medicine_operations.innerHTML = "Операции";
div_medicine.appendChild(a_medicine_operations);

var a_medicine_documents = document.createElement('a');
a_medicine_documents.href = "https://vadimrukavitsyn.github.io/medicine/documents.html";
a_medicine_documents.className = "href";
a_medicine_documents.innerHTML = "Документы";
div_medicine.appendChild(a_medicine_documents);

var div_about = document.createElement('div');
div_about.className = "div-foot";
div_about.id = "tail_div_about";
div_about.innerHTML = '<a class="href" href="https://vadimrukavitsyn.github.io/about.html">О репетиторе</a>';
tail.appendChild(div_about);
};
HeadCreate();
TailCreate();
