// 1. 첫번째 방법
// const numbers = document.querySelectorAll('.screen span');

// setInterval(()=>{
//     let now = new Date();
//     let hr = now.getHours();
//     let min = now.getMinutes();
//     let sec = now.getSeconds();

//     if(hr<10) hr = '0' + hr;
//     if(min<10) min = '0' + min;
//     if(sec<10) sec = '0' + sec;

//     numbers[0].innerText = hr;
//     numbers[1].innerText = min;
//     numbers[2].innerText = sec;

// },1000);

//setInterval((익명함수)=>{},1000);


// 2. 두번째방법
const main = document.querySelector('main');
const menus = document.querySelectorAll('nav span')
const numbers = document.querySelectorAll('.screen span');
const [am, pm] = document.querySelectorAll('.screen em');

setInterval(()=>{

    let now = new Date();
    let hr = now.getHours();

    const data = [  
        {condition: hr>=5 && hr<11, name: 'morning'},
        {condition: hr>=11 && hr<16, name: 'afternoon'},
        {condition: hr>=16 && hr<19, name: 'evening'},
        {condition: hr>=19 || hr<5, name: 'night'},

    ];

    data.forEach((item,index)=>{
        if(item.condition){
            main.className='';
            main.classList.add(item.name);

            for(let menu of menus) menu.classList.remove('on');
            menus[index].classList.add('on');
        }
    })

    if(main.classList.contains('afternoon')){
        main.classList.add('dark_text');
    }else{
        main.classList.remove('dark_text');
    }


    // if(hr>=5 && hr<11){
    //     main.className='';  //초기화
    //     main.classList.add('morning');
    // }
    // if(hr>=11 && hr<16){
    //     main.className='';  //초기화
    //     main.classList.add('afternoon');
    // }
    // if(hr>=16 && hr<19){
    //     main.className='';  //초기화
    //     main.classList.add('evening');
    // }
    // if(hr>=19 || hr<5){
    //     main.className='';  //초기화
    //     main.classList.add('night');
    // }

    const times = setTime();
    times.forEach((time,index)=> getTime(time,index));
},1000);

function setTime(){
    let hr2 = null;
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hr>12){
        hr2 = hr-12;
        pm.classList.add('on');
        am.classList.remove('on');
    }else{
        hr2 = hr;
        am.classList.add('on');
        pm.classList.remove('on');
    }

    return [hr2, min, sec];
}

function getTime(num, index){
    if(num<10) num = '0' + num;
    numbers[index].innerText = num;
}

