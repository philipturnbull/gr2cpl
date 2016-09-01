function url_for_query(query) {
    return 'http://find.minlib.net/iii/encore/search/C__S' + encodeURIComponent(query) + '__Ff%3Afacetmediatype%3Aa%3Aa%3ABOOK%3A%3A__Ff%3Afacetavailability%3Atrue%3Atrue%3AAt%20a%20library%3A%3A__Orightresult__U__X0?lang=eng&suite=cobalt';
}

function a_for_query(query) {
    return $.el.a({'href': url_for_query(title), 'title':'Search for at CPL'}, 'CPL');
}
