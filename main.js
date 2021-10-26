name_of_the_guests_array=[];
function submit(){
var name_1=document.getElementById("name_of_guests_1").value;
var name_2=document.getElementById("name_of_guests_2").value;
var name_3=document.getElementById("name_of_guests_3").value;
var name_4=document.getElementById("name_of_guests_4").value;
name_of_the_guests_array.push(name_1);
name_of_the_guests_array.push(name_2);
name_of_the_guests_array.push(name_3);
name_of_the_guests_array.push(name_4);
document.getElementById("display_name").innerHTML=name_of_the_guests_array;
}