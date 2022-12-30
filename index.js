let counter = 0;
const root = document.documentElement;
function start() {
    setInterval( () => {
    let x = root.style.getPropertyValue('--degree');
    console.log(x);
    counter = (counter + 1) % 360;
   root.style.setProperty('--degree', counter + 'deg');
    document.location.refresh
},10);
};
start();