
let onNode = document.querySelector(`#light`);
let offNode = document.querySelector(`#dark`);
let pageNode = document.querySelector(`#page`);
bb=document.querySelector(".news-container")
h=document.querySelector(`header`);
f=document.querySelector('footer');
f2=document.querySelector('.sing-container');
// onNode.addEventListener (`click`, function () {
//     pageNode.classList.remove(`dark`);
//     h.classList.remove(`dark`);
//      f.classList.remove(`dark`);
//      f2.classList.remove(`dark`);
//      bb.style.backgroundColor="white"
//      bb.style.color="black"
// })

// offNode.addEventListener (`click`, function() {
//     pageNode.classList.add(`dark`);
//     h.classList.add(`dark`);
//   f.classList.add(`dark`);
//   f2.style.backgroundColor=(`dark`);
//   bb.style.color="white"
//        bb.style.backgroundColor="rgba(252, 5, 5, 0.54)"

// })

let singButton = document.querySelector(`#sing-button`);
let infonameInput = document.querySelector(`#infoname`);
let infonumInput = document.querySelector(`#infonum`);
let infoemInput = document.querySelector(`#infoem`);
let answerNode = document.querySelector(`#answer`);
let sushiNode = document.querySelector(`#sushi`);

function foo(){
    let a = document.querySelector(".MODAL")
    a.style.display='flex'
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  // const forms = document.querySelectorAll('.needs-validation')
  let forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

singButton.addEventListener(`click`, function () {
    if ((infonameInput.value == ``) || (infonumInput.value == ``) || (infoemInput.value == ``)) {
        answerNode.innerHTML = `Заполните, пожалуйста, все поля.`;
    } else {
        answerNode.innerHTML = `Ждем Вас в нашем центре!` 
    }
})

