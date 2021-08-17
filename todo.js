let myul = document.getElementsByClassName('ul')[0];
let arrBut = [];

document.getElementById('input').addEventListener('keypress',function(e)
{
    if(e.key === 'Enter')
    {
        let input = document.getElementById('input').value;
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(input));
        myul.appendChild(li);
        let button = document.createElement('button');
        button.appendChild(document.createTextNode('x'));
        button.setAttribute('class','button');

        li.appendChild(button);
        li.setAttribute('class','li');
        document.getElementById('input').value = '';


    }
});
myul.addEventListener("click", function(e) {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
   // let elem = document.getElementsByClassName("button")[0].parentNode;
    let elem = e.target.parentNode;
    e.target.parentNode.parentNode.removeChild(elem);

});

