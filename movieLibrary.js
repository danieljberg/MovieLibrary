$(document).ready(function(){
    $("#Movies").click(function(){
        $.ajax({
            method: "get",
            url: "http://localhost:51741/api/values",
            datatype: "JSON",    
        });
    });
});


