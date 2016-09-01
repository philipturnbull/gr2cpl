var th =
    $.el.th({'class': 'header field'},
        $.el.a(
            'CPL'
        )
);
var header = document.querySelector('tr#booksHeader');
header.insertBefore(th, header.childNodes[0]);

var rows = document.querySelectorAll('tbody#booksBody > tr');

var i;
for (i = 0; i < rows.length; i++) {
    var row = rows[i];
    var title = row.querySelector('td.field.title > div.value > a').childNodes[0].textContent.trim();

    var td = $.el.td({'class': 'field'}, a_for_query(title));
    row.insertBefore(td, row.childNodes[0]);
}

