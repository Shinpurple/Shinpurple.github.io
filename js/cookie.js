 /* ===================== POPUP ===================== */
 let popup = document.querySelector('.popup');
 let popupCheckBox = document.querySelector('#popup');
 let popupClose = popup.querySelector('.p_close');

 function setCookie(name,value,day){
   let date = new Date();
   date.setDate(date.getDate() + day);

   let cookieContent = '';
   cookieContent += `${name}=${value};`;
   cookieContent += `Expires=${date.toUTCString()}`;

   document.cookie = cookieContent;
 }

 //쿠키확인
 function getCookie(name){
   let visited = false;
   let cookies = document.cookie.split(';');

   for(let cookie of cookies){
     if(cookie.indexOf(name) > -1){
       visited = true;
     }
   }
   if(visited){
     popup.style.display = 'none';
   }else{
     popup.style.display = 'block';
   }
 }
 getCookie('Shilla');

 // 쿠키삭제
 function delCookie(name,value){

   let date = new Date();
   date.setDate(date.getDate() -1);

   let cookieContent = '';
   cookieContent += `${name}=${value};`;
   cookieContent += `Expires=${date.toUTCString()}`;

   document.cookie = cookieContent;
 }

 popupClose.addEventListener('click',()=>{
     console.log('close');
   popup.style.display = 'none';
   if(popupCheckBox.checked){
     setCookie('Shilla','Main Page',1);
   }else{
     delCookie('Shilla','Main Page');
   }
 });

