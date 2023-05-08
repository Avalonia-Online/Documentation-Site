!function loadModule (module) {
    window.fetch(`../Documentation-Site/modules/${module}.html`)
        .then(response => response.text())
        .then(text => document.getElementById("content").innerHTML = text);
}("index");