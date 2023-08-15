document.getElementById('btn-withdraw').addEventListener('click',function(){

  const withdrawField =document.getElementById('withdraw-field');
const newWithdrawAmmountString = withdrawField.value ;
const newWithdrawAmmount=parseFloat(newWithdrawAmmountString);
withdrawField.value=''
if(isNaN(newWithdrawAmmount)){
  alert('please provide number')
  return;
}

const withdrawTotalAmount = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalAmount.innerText; 
const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);



const balanceTotalElement=document.getElementById('balance-total');
const previousBallenceTotalString=balanceTotalElement.innerText;
const previousBallenceTotal=parseFloat(previousBallenceTotalString);


if(newWithdrawAmmount>previousBallenceTotal){
  alert('tor baper Bank ea ato taka nai')
  return 
}

const currentWIthdrawTotal=previousWithdrawTotal+newWithdrawAmmount;

withdrawTotalAmount.innerText=currentWIthdrawTotal;

const currentBallenceTotal=previousBallenceTotal-newWithdrawAmmount;

balanceTotalElement.innerText=currentBallenceTotal


})








































