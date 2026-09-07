const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navbar nav');
if(menu){menu.addEventListener('click',()=>nav.classList.toggle('open'));}
function sendMessage(e){
  e.preventDefault();
  const msg=document.getElementById('form-message');
  msg.textContent='Thank you. Your message has been prepared. Connect this form to your email service or backend to receive submissions.';
  e.target.reset();
}
