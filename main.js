var student_name_array=[];
var display_student_names=[];
var display_student_names_sorted=[];
function submit(){
    for (var j=1 ; j<=4 ; j++){
        var student_name=document.getElementById("name_of_the_student_" + j).value;
        student_name_array.push(student_name);
    }
    console.log(student_name_array);
    var length_student_array = student_name_array.length;
    console.log(length_student_array);
    for (var k=0; k<length_student_array; k++){
        display_student_names.push("<p>Name- " + student_name_array[k]+"</p>");
    }
    console.log(display_student_names);
    document.getElementById("display_name_with_commas").innerHTML=display_student_names;

    var remove_commas=display_student_names.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    student_name_array.sort();
    console.log(student_name_array);
    var length_student_array = student_name_array.length;
    console.log(length_student_array);
    for (var k=0; k<length_student_array; k++){
        display_student_names_sorted.push("<p>Name- " + student_name_array[k]+"</p>");
}
    console.log(display_student_names_sorted);
    document.getElementById("display_name_with_commas").innerHTML=display_student_names_sorted;

    var remove_commas=display_student_names_sorted.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}