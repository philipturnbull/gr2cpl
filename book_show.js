var title_node = document.querySelector('h1#bookTitle');
var title = title_node.childNodes[0].textContent.trim();

title_node.appendChild(a_for_query(title));
