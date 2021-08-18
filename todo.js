let myul = document.getElementsByClassName('ul')[0];
let par = document.getElementsByClassName('par')[0];
let count = 0;
let select = document.createElement()



document.getElementById('input').addEventListener('keypress',function(e)
{
    if(e.key === 'Enter')
    {
        let li = document.createElement('li');
        li.setAttribute('class','li');
        let check = document.createElement('input');
        check.setAttribute('type','checkbox');
        check.setAttribute('class','checkbox');
        check.setAttribute('name','checkbox');
        li.appendChild(check);
        par.innerHTML = ++count;

        check.addEventListener('change',function (e){
            let parent = check.parentNode;
            if(this.checked)
            {
                parent.setAttribute('style','text-decoration-line: line-through');
                par.innerHTML = --count;
            }
            else
            {
                parent.setAttribute('style',  'text-decoration-line: none');
                par.innerHTML = ++count;
            }
        })
        let input = document.getElementById('input').value;
        li.appendChild(document.createTextNode(input));
        let button = document.createElement('button');
        button.appendChild(document.createTextNode('x'));
        button.setAttribute('class','button');
        li.appendChild(button);
        document.getElementById('input').value = '';
        myul.appendChild(li);
    }
});
myul.addEventListener("click", function(e) {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }

    let elem = e.target.parentNode;
    e.target.parentNode.parentNode.removeChild(elem);
    --count;
    par.innerHTML = count;

});

let checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function(e) {
    if (e.target.checked) {
        alert("Checkbox is checked..");
    } else {
        alert("Checkbox is not checked..");
    }
});