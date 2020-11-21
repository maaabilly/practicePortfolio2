console.log('working');

let theme = localStorage.getItem('theme');
// setting string 'theme' as default in local storage

if(theme == null) {
    setTheme('light');  // if first time visitor then default showing light theme
} else {
    setTheme(theme);    // else set w/e theme is stored in local storage
}

let themeDots = document.getElementsByClassName('theme-dot');
    // getElementByClassName returns an "array-like" object of all child elements which have all of the given class names
    // this is why themeDots[i] works below
        // doc - https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;   
            // dataset doc - https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
        console.log('option clicked', mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'css/default.css';
    }
    
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'css/blue.css';
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'css/green.css';
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'css/purple.css';
    }

    localStorage.setItem('theme', mode);
    // setting localStorage with 'theme' as the key and mode as the value
    // this allows the browser to save this data and so every time the user reloads, the data persists
}
