//const vars
const img2 = document.querySelector('#img2');
const img1 = document.querySelector('#img1 img');
const inptext = document.getElementById('inptext');
const butt = document.getElementById('butt');
const sec22 = document.querySelector('.sec22');
const delIt = ' <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg> ';
const Ileft = document.getElementById('Ileft');
const buttAll = document.getElementById('buttAll');
const buttActive = document.getElementById('buttActive');
const buttComp = document.getElementById('buttComp');
const buttClear = document.getElementById('buttClear');


//vars
let light = document.cookie.split(' ');
light.forEach((el) => {
    els = el.split('=');
    if (els[0] === 'bool') {
        if (els[1] === "true") {
            light = "true";
        } if (els[1] === "false") {
            light = "false";
        }
    } 
})

let val = 0;

//buutons
img2.addEventListener('click', lightDark);
butt.addEventListener('click', make);


buttAll.addEventListener('click',all);


buttActive.addEventListener('click', act)
function act() {
    all()
    let count1 = document.querySelectorAll('.completed');
    count1.forEach((count) => {
        count.style.display = 'none';
    });
}



buttComp.addEventListener('click', comp)
function comp() {
    all()
    let count2 = document.querySelectorAll('.need');
    count2.forEach((count) => {
        count.style.display = 'none';
    });
}



buttClear.addEventListener('click', () => {
    let count2 = document.querySelectorAll('.completed');
    count2.forEach((count) => {
        count.remove();
    });

});


//funcs

function all() {
    let count = document.querySelectorAll('.div2');
    count.forEach((countt) => {
        countt.style.display = 'block';
    });
}

function lightDark() {
    if ((light == "true")) {
        img1.src = "./images/bg-desktop-dark.jpg";
        light = "false";
        document.cookie = `bool = true ;expires=Thu, 18 Dec 2025 12:00:00 UTC`;
        document.querySelector('body').style.backgroundColor = "hsl(235, 21%, 11%)";
        img2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>'
    } else {
        light = "true";
        document.cookie = `bool = false ;expires=Thu, 18 Dec 2025 12:00:00 UTC`;
        img1.src = "./images/bg-desktop-light.jpg";
        document.querySelector('body').style.backgroundColor = "white";
        img2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>'
    }
}

function setAttributes(el, attrs) {
    let i = 0;
    el.forEach((els) => {
        for (var key in attrs[i]) {
            els.setAttribute(key, attrs[i][key]);

        }
        i++;
    })
}

function make() {
    console.log('clicked');
    inptext.focus();
    let inpval = inptext.value;
    let fragment = document.createDocumentFragment();
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let checkbox = document.createElement('input');
    let lable = document.createElement('label');
    let spanSvg = document.createElement('span');
    let hr = document.createElement('hr');

    fragment.appendChild(checkbox);
    fragment.appendChild(spanSvg);
    fragment.appendChild(lable);
    fragment.appendChild(hr);

    div2.appendChild(fragment);
    div.appendChild(div2);

    fragment.appendChild(div);
    sec22.appendChild(fragment);

    //setAttributes(div, { 'draggable': 'true', 'class': 'need', "id": `ID${val}` });
    //setAttributes(spanSvg, { 'class': 'spanSvg', "id": `span${val}` });
    //setAttributes(checkbox, { 'type': 'checkbox', 'value': `${val}` });
    //setAttributes(lable, { 'for': `${val}` });
    setAttributes([div, div2, spanSvg, checkbox, lable], [{ "id": `ID${val}`, 'class': 'div1' },
        { 'draggable': 'true', 'class': 'need div2', "id": `IDTwo${val}` },
    { 'class': 'spanSvg', "id": `span${val}` },
        { 'type': 'checkbox', 'value': `${val}`, 'class': `check`, "id": `check${val}` },
        { 'for': `${val}`, 'class': 'label', "id": `label${val}` }
    ])

    lable.innerText = inpval;
    spanSvg.innerHTML = delIt;


    val++;
    inptext.value = '';

    line()
    addEventListeners();
    itemLeft();
    del();
   
}

function addEventListeners() {

    let items = document.querySelectorAll('.div1');
    
    function handleDragStart(e) {
        start = e.toElement.parentElement.attributes.id.value;
          startend = document.getElementById(start).innerHTML;
        

    }

    function handleDrop(e) {
        e.stopPropagation();
        let end = e.toElement.parentElement.attributes.id.value;
        let endstart = document.getElementById(end).innerHTML;
        if (startend !== endstart) {
            document.getElementById(end).innerHTML = `${startend}`;
            document.getElementById(start).innerHTML = `${endstart}`;
        }
        line();
        del();
        act();
        comp();
        all()
         return false;

    }

        function handleDragEnd(e) {
            items.forEach(function (item) {
                item.classList.remove('over');
            });
        }

    function handleDragOver(e) {
        e.preventDefault();
        }

        function handleDragEnter(e) {
        }

        function handleDragLeave(e) {

        }

        items.forEach(function (item) {
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragover', handleDragOver);
            item.addEventListener('dragenter', handleDragEnter);
            item.addEventListener('dragleave', handleDragLeave);
            item.addEventListener('dragend', handleDragEnd);
            item.addEventListener('drop', handleDrop);
        });
    
}

function line() {
    let checkBox = document.querySelectorAll('.check')
    checkBox.forEach((check) => {
        check.addEventListener('click', () => {
            let checkId = check.id;

            let lable = document.getElementById(`label${checkId[5]}`);
            let div2 = document.getElementById(`IDTwo${checkId[5]}`);

            if (check.checked === true) {
                lable.classList.remove('lineNot')
                div2.classList.remove('need')
                div2.classList.add(`completed`);
                lable.classList.add(`lineThrow`);
            } if (check.checked === false) {
                lable.classList.remove('lineThrow')
                lable.classList.add(`lineNot`);
                div2.classList.remove('completed')
                div2.classList.add(`need`);
            }
            itemLeft()
        });
    });
}

function itemLeft() {
        let count = document.querySelectorAll('.need');
        Ileft.innerText = count.length; 
}

function del() {
    let spanSvg = document.querySelectorAll('.spanSvg')
    spanSvg.forEach((span) => {
        span.addEventListener('click', () => {
            let num = span.id.split("");
            document.getElementById(`IDTwo${num[4]}`).remove();
            itemLeft();
        });

    })
   
}

//call funcs
lightDark()

