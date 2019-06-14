$(document).ready(function () {
    $("#btMovies").click(function () {
        $('#allMovies').find('tbody').empty();
        $.ajax({
            method: 'GET',
            url: "http://localhost:51741/api/values",
            datatype: "JSON",
            success: function (data) {
                $(data).each(function (index, item) {
                    $("#allMovies tbody").append(
                        '<tr><td>' + item.Title +
                        '</td>,<td>' + item.Genre +
                        '</td>,<td>' + item.DirectorName +
                        '</td>,<td><button class=edit>Edit</button> <button class=delete>Delete</button></td></tr>'
                    )
                })
            }
        })
    });
    

    $("body").on("click", ".edit", function(){
        var title = $(this).parents("tr").attr('data-title');
        var genre = $(this).parents("tr").attr('data-genre');
        var directorName = $(this).parents("tr").attr('data-directorName');
    
        $(this).parents("tr").find("td:eq(0)").html('<input name="edit_title" value="'+title+'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="edit_genre" value="'+genre+'">');
        $(this).parents("tr").find("td:eq(2)").html('<input name="edit_directorName" value="'+directorName+'">');
        $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });

    

    $("#search").keyup(function(event){
        if (event.keyCode === 13) {
            var search = $("#search").val();
            $('#allMovies').find('tbody').empty();
            $.ajax({
                method: 'GET',
                url: "http://localhost:51741/api/values",
                datatype: "JSON",
                success: function (data) {
                    $(data).each(function (index, item) {
                        if (item.Title==search||item.Genre==search||item.DirectorName==search){
                            $("#allMovies tbody").append(
                                '<tr><td>' + item.Title +
                                '</td>,<td>' + item.Genre +
                                '</td>,<td>' + item.DirectorName +
                                '</td>,<td><button class=edit> Edit </button> <button class=delete>Delete</button></td></tr>'
                            )
                        }
                    })
                }
            })
        }
    });

    $(".add-movie").click(function (e) {
        $('#allMovies').find('tbody').empty();
        var title = $("#title").val();
        var genre = $("#genre").val();
        var directorName = $("#directorName").val();
        var movieToAdd = {
            Title: title,
            Genre: genre,
            DirectorName: directorName
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:51741/api/values',
            data: JSON.stringify(movieToAdd),
            contentType: 'application/json',
            dataType: 'JSON',
            success: function (data) {
                $(data).each(function (index, item) {
                    $("#allMovies tbody").append(
                        '<tr><td>' + item.Title +
                        '</td>,<td>' + item.Genre +
                        '</td>,<td>' + item.DirectorName +
                        '</td>,<td><button class=edit> Edit </button> <button class=delete>Delete</button></td></tr>'
                    )
                })
            }
        })
        e.preventDefault();
    });
    
});





