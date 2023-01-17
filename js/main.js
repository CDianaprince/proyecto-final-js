import '../assets/style/style.scss';
import javascriptLogo from '../assets/logos/JavaScript.svg';



let checkBox = document.querySelector('.toggle-checkbox');
let price = document.querySelectorAll('.span-price');


let toggle = (e) =>{
  //if checked, show monthly prices
  if(e.target.checked) {
    price[0].textContent = "19.99";
    price[1].textContent = "24.99";
    price[2].textContent = "39.99";
  }
  else{
    price[0].textContent = "199.99";
    price[1].textContent = "244.99";
    price[2].textContent = "399.99";
  }
};

checkBox.onchange = toggle;
