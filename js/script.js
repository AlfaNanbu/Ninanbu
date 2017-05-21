//====== Llamado de Funciones ======
resetTec();



//====== Funciones Generales ======
function UnderConstruct()
{
  alert("La Pagina se encuentra en construccion por lo cual no esta disponible.")
}


// ====== Seccion de Tecnologias ======
var a = document.querySelector('#front');
a.addEventListener("click",rotarFront);
var b = document.querySelector('#back');
b.addEventListener("click",rotarBack);
var c = document.querySelector('#frame');
c.addEventListener("click",rotarFrame);

function resetTec()
{
  dinamic2.style.display="none";
  dinamic3.style.display="none";
  dinamic1.style.display="none";
}

function rotarFront()
{
  dinamic0.style.display="none";
  dinamic2.style.display="none";
  dinamic3.style.display="none";
  dinamic1.style.display="block";
}

function rotarBack()
{
  dinamic0.style.display="none";
  dinamic1.style.display="none";
  dinamic3.style.display="none";
  dinamic2.style.display="block";
}

function rotarFrame()
{
  dinamic0.style.display="none";
  dinamic1.style.display="none";
  dinamic2.style.display="none";
  dinamic3.style.display="block";
}
