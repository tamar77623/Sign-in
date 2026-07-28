let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4');
let btn = document.getElementById('btn');
let h4 = document.getElementById('h4');
let span = document.getElementById('span')
let btn2 = document.getElementById('btn2')
let small = document.getElementById('small')
let email = "@gmail.com";
function w(){
    setTimeout(() => {
        h4.innerText = '';
    }, 1000);
}
btn.onclick = function(){
    if(inp1.value === ""){
        h4.innerText = 'Please Enter Your Name';
        w();
        return;
    }
    if(inp2.value === ""){
        h4.innerText = 'Please Enter Your Eamil';
        w();
        return;
    }
    if(!inp2.value.includes(email)){
        h4.innerText = 'Please enter a valid email address';
        w();
        return;
    }
    if(inp3.value === ""){
        h4.innerText = 'Please Enter Your Password';
        w();
        return;
    }
    if(inp4.value === ""){
        h4.innerText = 'Please Enter Your Phone Number';
        w();
        return;
    }
    if(inp4.value.length != 11){
        h4.innerText = 'Please enter a valid phone number';
        w();
        return;
    }
    savedate();
}
function savedate(){
    let save = [
        localStorage.inp1value = inp1.value,
        localStorage.inp2value = inp2.value,
        localStorage.inp3value = inp3.value,
        localStorage.inp4value = inp4.value,
    ]
    location.reload();
}
window.onload = function(){
    if(localStorage.inp1value !=''){
        inp1.style.display = 'none';
        inp2.style.display = 'none';
        inp3.style.display = 'none';
        inp4.style.display = 'none';
        btn.style.display = 'none';
        span.innerText = 'Welcome ' + localStorage.inp1value;
        btn2.style.display = 'block';
    }
    else{
        inp1.style.display = 'block';
        inp2.style.display = 'block';
        inp3.style.display = 'block';
        inp4.style.display = 'block';
        btn.style.display = 'block';
        btn2.style.display = 'none';
        span.innerText ='';
    }
    if(localStorage.inp1value === undefined){
        inp1.style.display = 'block';
        inp2.style.display = 'block';
        inp3.style.display = 'block';
        inp4.style.display = 'block';
        btn.style.display = 'block';
        btn2.style.display = 'none';
        span.innerText = '';
    }
}
btn2.onclick = function(){
    localStorage.clear();
    location.reload();
}
inp3.oninput = function(){

    if(inp3.value.length < 8){
        small.innerText = 'weak password';
        small.style.color = 'red';
        inp3.style.borderColor = 'red'
    }else{
        small.innerText = 'good password';
        small.style.color = 'green';
        inp3.style.borderColor = '#444';
        setTimeout(() => {
            small.innerText = '';
        }, 1000);
    }
    if(inp3.value === ""){
        small.innerText = '';
        small.style.color = 'white';
        inp3.style.borderColor = '#444'
    }
}