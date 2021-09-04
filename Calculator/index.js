var res = document.querySelector('#res');
var btn = document.querySelectorAll('.btn');

for (item of btn){
    item.addEventListener('click',(e)=>{
        btnvalue = e.target.innerText;
        if(btnvalue == 'x')
            btnvalue = '*';
        
        
        res.value+= btnvalue;
    })
}
 
function sin(){
    res.value = Math.sin(res.value);
}

function cos(){
    res.value = Math.cos(res.value);
}

function tan(){
    res.value = Math.tan(res.value);
}

function log(){
    res.value = Math.log(res.value);
}

function sqrt(){
    res.value = Math.sqrt(res.value);
}

function pi(){
    res.value = 3.141592653589793;
}
function e(){
    res.value =2.718281828459045;
}

function pow(){
    res.value = Math.pow(res.value,2);
}

function backspace(){
    res.value = res.value.substr(0, res.value.length-1);
}

function fact(){
    var x=1;
    for(let i=1;i<=res.value;i++){
        x*=i;
    }
    res.value=x;
}