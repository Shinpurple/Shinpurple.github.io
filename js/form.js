// function toggleSelectBox(selectBox) {
//     selectBox.classList.toggle("active");
//   }
//   let selectBoxElements = document.querySelectorAll(".select");
//   let optionElement = document.querySelectorAll(".select-list li");

//   function selectOption(optionElement) {
//     // let selectBox = optionElement.closest(".select");
//     let selectedElement = selectBoxElements.querySelector(".selected-value");
//     selectedElement.textContent = optionElement.textContent;
//   }
//   selectBoxElements.forEach(selectBoxElement => {
//     selectBoxElement.addEventListener("click", function (e) {
//       let targetElement = e.target;
//       let isOptionElement = targetElement.classList.contains("option");
  
//       if (isOptionElement) {
//         selectOption(targetElement);
//       }
  
//       toggleSelectBox(selectBoxElement);
//     });
//   });

$('.select').on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('active');
});

let option=$('.select-list li'),
    selectedHotel = $('.selected-value');

    option.click(function(e){
      e.preventDefault();
      let targetElement = e.target.val();
      console.log(targetElement);

      targetElement.appendTo(selectedHotel);
    });



