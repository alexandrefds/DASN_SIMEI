function rateAmount() {
    let amount = 0;

    const months = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec'
    ];

    months.forEach(month => {
      const wage = parseFloat(document.getElementById(month).value);

      if (!isNaN(wage)) {
        amount += wage;
      }
    });

    document.getElementById('amount').textContent = amount.toFixed(3);
}
  
const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach(input => {
    input.addEventListener('input', rateAmount);
});
