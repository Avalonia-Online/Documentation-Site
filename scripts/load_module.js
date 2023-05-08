function loadModule (module) {
    window.fetch(`https://avalonia-online.github.io/Documentation-Site/modules/${module}.html`)
        .then(response => response.text())
        .then(text => document.getElementById("content").innerHTML = text);
}