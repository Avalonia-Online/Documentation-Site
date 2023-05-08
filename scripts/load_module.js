!function loadModule (module) {
    window.fetch(`../modules/${module}.html`)
        .then(response => response.text())
        .then(text => document.getElementById("content").innerHTML = text);
}("index");