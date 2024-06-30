$(document).ready(function(){
    $("#myForm").on("submit", function(event){
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        $("#myTable tbody").append("<tr><td>" + name + "</td><td>" + email + "</td></tr>");
        $("#name").val("");
        $("#email").val("");
    });
});
