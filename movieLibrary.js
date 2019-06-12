$(document).ready(function(){
    $("#movies").click(function(){
        $.ajax({
            method: "GET",
            url: "http://localhost:51741/api/values",
            datatype: "JSON",
            success: function(data){
                $(data).each(function (index, item){
                    $("#allMovies tbody").append(
                        '<tr><td>' + item.Title +
                        '</td>,<td>' + item.Genre +
                        '</td>,<td>' + item.DirectorName +
                        '</td></tr>'
                    )
                })
            }
        })
    });
});


