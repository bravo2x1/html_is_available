help=[];
function submit() {
var g=document.getElementById("nombre_alumno_1").value;
var ses=document.getElementById("nombre_alumno_2").value
var lel=document.getElementById("nombre_alumno_3").value;
var js=document.getElementById("nombre_alumno_4").value;
help.push(g);
help.push(ses);
help.push(lel);
help.push(js);
document.getElementById("ver_nombre").innerHTML=help;
}