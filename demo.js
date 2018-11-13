/**
 * Created by dangoltanu on 5/26/2016.
 */
var url = window.location;
// Will only work if string in href matches with location
$('ul.nav a[href="'+ url +'"]').parent().addClass('active');

// Will also work for relative and absolute hrefs
$('ul.nav a').filter(function() {
    return this.href == url;
}).parent().addClass('active');


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#jsprofile_pic')
                .attr('src', e.target.result)
                .width(140)
                .height(130);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


