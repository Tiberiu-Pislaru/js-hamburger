const container = document.getElementById('container');
const button = document.getElementById('button');
let trackerClick= 0;

button.addEventListener('click', function() {
    trackerClick++;

    if (trackerClick % 2 != 0){

        container.classList.remove('light');
        container.classList.add('dark');
        button.classList.add('btn_light');
        button.classList.remove('btn_dark');

        
    }else{
        container.classList.remove('dark');
        container.classList.add('light');
        button.classList.add('btn_dark');
        button.classList.remove('btn_light');

    }
})