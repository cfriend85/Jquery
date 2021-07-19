// Create an element and append

$.post(<url>, <data>, function (data) {
    let listItem = document.createElement("li")
    listItem.setAttribute("style", "margin: 5px 0px 5px 10px");
    listItem.innerHtml = data.name
    $("$list_item").append(listItem);
})