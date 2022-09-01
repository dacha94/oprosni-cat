//новый код 
document.getElementById('firstName').addEventListener('change', function() {//начало с большой буквы

    const firstName = document.getElementById('firstName').value.trim().toLowerCase();
    document.querySelector('#firstName').value = firstName[0].toUpperCase()+firstName.slice(1);
}); 

document.getElementById('email').addEventListener('change', function() {//нижний регистр 

    document.querySelector('#email').value = document.getElementById('email').value.trim().toLowerCase();
});


document.getElementById('petName').addEventListener('change', function() {//с большой буквы

    const petName = document.getElementById('petName').value.trim().toLowerCase();

    document.querySelector('#petName').value = petName[0].toUpperCase()+petName.slice(1);

});

//вывод опции 
document.querySelector('#drycheckbox').addEventListener('keypress', function (e) {

    if (e.key === 'Enter' && document.getElementById('dryfood').hasAttribute("checked", "")) {
        document.getElementById('dryfood').removeAttribute("checked", "");

    } else if (e.key === 'Enter'){
        document.getElementById('dryfood').setAttribute("checked", "");
    }
});

document.querySelector('#ntrlcheckbox').addEventListener('keypress', function (e) {

    if (e.key === 'Enter' && document.getElementById('naturalfood').hasAttribute("checked", "")) {
        document.getElementById('naturalfood').removeAttribute("checked", "");

    } else if (e.key === 'Enter'){
        document.getElementById('naturalfood').setAttribute("checked", "");
    }
});

document.querySelector('#wetcheckbox').addEventListener('keypress', function (e) {

    if (e.key === 'Enter' && document.getElementById('wetfood').hasAttribute("checked", "")) {
        document.getElementById('wetfood').removeAttribute("checked", "");

    } else if (e.key === 'Enter'){
        document.getElementById('wetfood').setAttribute("checked", "");
    }
});


document.querySelector('#femaleradio').addEventListener('keypress', function (e)  {

    if (e.key === 'Enter' && document.getElementById('female').hasAttribute("checked", "")) {
        document.getElementById('female').removeAttribute("checked", "");

    } else {
        document.getElementById('male').removeAttribute("checked", "");
        document.getElementById('female').setAttribute("checked", "");
    }
});

document.querySelector('#maleradio').addEventListener('keypress', function (e)  {

    if (e.key === 'Enter' && document.getElementById('male').hasAttribute("checked", "")) {
        document.getElementById('male').removeAttribute("checked", "");

    } else {
        document.getElementById('female').removeAttribute("checked", "");
        document.getElementById('male').setAttribute("checked", "");
    }
});

//валид телефонного номера 
document.querySelector('#phone').addEventListener('change', function validatePhone(){
    const phone = document.querySelector('#phone').value;

    let lengthPhone = phone.length;
    let digits=phone.split('');

    if(lengthPhone == 10){
        digits.splice(0,"", "(");
        digits.splice(4,"", ")");
        digits.splice(8,"", "-");
        digits.splice(11,"", "-");

    } else if (lengthPhone == 11){
        digits.splice(1,"", "(");
        digits.splice(5,"", ")");
        digits.splice(9,"", "-");
        digits.splice(12,"", "-");

    } else if (lengthPhone == 12){
        digits.splice(2,"", "(");
        digits.splice(6,"", ")");
        digits.splice(10,"", "-");
        digits.splice(13,"", "-");
    };

    let almostPhone = digits.join('');

    document.querySelector('#phone').value = '+7'+ almostPhone.slice(-14);
});

//превью загруженной фотки 
const formPhoto = document.getElementById('formPhoto');
const photoPreview = document.getElementById('photoPreview');
let photo;

formPhoto.addEventListener('change', () => {
        uploadFile(formPhoto.files[0]);
    });

function uploadFile(file) {
        let reader = new FileReader();
        reader.onload = function(e){
            photoPreview.innerHTML = `<img src='${e.target.result}' alt="photo"'>`
            photo = e.target.result;
        };

        reader.readAsDataURL(file);
};

// Чтобы при нажатии на кнопку фото котика убиралось
document.querySelector("#resetForm").addEventListener('click', function(){

    location.reload();
});

// старый код 
// function check() {
//     let result = document.getElementById('firstName').value;
//     if (result == '') {
//         alert('first Name, please*');
//     }
// }

// function check() {
//     let result = document.getElementById('petsName').ariaValueMax;
//     if (result == '') {
//         alert('Pets name, please*');
//     }
// }

// function check() {
//     let result = document.getElementById('tel').ariaValueMax;
//     if (result == '') {
//         alert('Number, please*');
//     }
// }

// function check() {
//     let result = document.getElementById('firstName').value;
//     if (result == '') {
//         alert('first Name, please*');
//     }
// }

// //Вставка фото не работает 
// document.getElementById('file').addEventListener('file', (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (function (file) {
//         return function (e) {
//             const r = e.target;
//             const photo = r.result

//             document.getElementById('file').src = photo
//         };
//     })(file);

//     reader.readAsDataURL(file);
// })

// 19 неделя. добавление  класса cat 
// class Cat {
//     constructor(name, race, sex, food, comment) {
//         this.name = name;
//         this.race = race;
//         this.sex = sex;
//         this.food = food;
//         this.comment = comment;
//     }
// }
//     console.log(name); 
//     console.log(race); 
//     console.log(sex); 
//     console.log(food);
//     console.log(comment);

//21 неделя. Добавление оправки формы 
document.querySelector("#sendForm").addEventListener('click', function(event){

    event.preventDefault();

        fetch("https://httpbin.org/post",
            {
                method:'POST',
                body: new FormData(form),
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                },
            })
        .then(response => response.json())
        .catch(error => console.log(error));

});
