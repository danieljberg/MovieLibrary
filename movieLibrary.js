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
                        '</td></tr>'
                    )
                })
            }
        })
    });
    // $("#btsearch").click(function(){

    // });


    $(".add-movie").click(function (e) {
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
            dataType: 'JSON'
        })
        e.preventDefault();
    });


    // $("#btAdd").click(function(){
    //     var title = $('#title')[0].value;
    //     var genre = $('genre');
    //     var directorName = $('directorName');

    //     var movie = {
    //         title: title,
    //         genre: genre.val(),
    //         directorName: directorName.val()
    //     }
    //     var movieToAdd = JSON.stringify(movie);
    //     $.ajax({
    //         method: 'POST',
    //         url: 'http://localhost:51741/api/values',
    //         data: movieToAdd,
    //         datatype: 'JSON',
    //         success: function(newData){
    //             $(newData).each(function (index, item){
    //                 $("#allMovies tbody").append(
    //                     '<tr><td>' + item.Title +
    //                     '</td>,<td>' + item.Genre +
    //                     '</td>,<td>' + item.DirectorName +
    //                     '</td></tr>'
    //                 )
    //             })
    //         }            
    //     })
    // });    
});





