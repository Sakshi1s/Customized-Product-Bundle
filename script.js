function calculateTotalPrice() {
    const darkChocolateQuantity = parseInt(document.getElementById('darkChocolateQuantity').value);
    const milkChocolateQuantity = parseInt(document.getElementById('milkChocolateQuantity').value);
    const whiteChocolateQuantity = parseInt(document.getElementById('whiteChocolateQuantity').value);

    const totalItems = darkChocolateQuantity + milkChocolateQuantity + whiteChocolateQuantity;

    if (totalItems > 8) {
      alert('Total items cannot exceed 8.');
      return;
    }

    const totalPrice = calculatePrice(darkChocolateQuantity, 1.5) +
                      calculatePrice(milkChocolateQuantity, 2.0) +
                      calculatePrice(whiteChocolateQuantity, 2.5);

    document.getElementById('total-price').innerText = `Total Price: ${totalPrice.toFixed(2)}`;
  }

  function calculatePrice(quantity, pricePerItem) {
    return quantity * pricePerItem;
  }
