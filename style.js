function toggleText() {
    var text1 = document.querySelector('.text2');
    var readButton = document.querySelector('.read');
    if (text1.style.display === 'none' || text1.style.display === '') {
        text1.style.display = 'block';
        readButton.textContent = 'Read Less';
        readButton.style.marginTop = '100px';
    } else {
        text1.style.display = 'none';
        readButton.textContent = 'Read More';
        readButton.style.marginTop = '0px';
    }
  }
  function order(){
    console.log("booked");
    window.location.href="index.html";
}
function pay() {
    const cardNumber = document.getElementById('cardnum').value;
    const cardHolderName = document.getElementById('holdername').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    const paymentData = {
        cardNumber: cardNumber,
        cardHolderName: cardHolderName,
        expiry: expiry,
        cvv: cvv
    };
    
    console.log('Payment Data:', paymentData);
    window.location.href="index.html";
}

function commentBtn(){
    alert("Your response was submitted successfully!");
}