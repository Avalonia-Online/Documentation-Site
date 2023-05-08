window.fetch("https://avalonia-online.github.io/Documentation-Site/modules/index.html")
.then(response => response.text())
.then(text => console.log(text));