document.getElementById('btn-deposit').addEventListener('click',function(){

const depositField = document.getElementById('deposite-field');
const newDepositAmmountString =depositField.value;
const  newDepositAmmount=parseFloat(newDepositAmmountString);

const depositeTotalAmount = document.getElementById('deposite-total');
const previousDepositTotalString =depositeTotalAmount.innerText ;
const previousDepositTotal=parseFloat(previousDepositTotalString)

const currentDepositeTotal=previousDepositTotal+newDepositAmmount;
depositeTotalAmount.innerText=currentDepositeTotal;

const balanceTotalElement = document.getElementById('balance-total');
const prevoiusBallenceTotalString =balanceTotalElement.innerText;
const prevoiusBallenceTotal=parseFloat(prevoiusBallenceTotalString);

const currentBallenceTotal =prevoiusBallenceTotal+newDepositAmmount;

balanceTotalElement.innerText = currentBallenceTotal;



// ---------
depositField.value='';
})






















