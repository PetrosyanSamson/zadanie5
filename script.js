javascript
document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.getElementById("quantity");
  const serviceTypeInputs = document.querySelectorAll('input[name="serviceType"]');
  const optionsSelect = document.getElementById("optionsSelect");
  const propertyCheckbox = document.getElementById("propertyCheckbox");
  const totalPrice = document.getElementById("totalPrice");

  // Обработчик изменения элементов формы
  function updateForm() {
    const quantity = parseInt(quantityInput.value);
    const serviceType = document.querySelector('input[name="serviceType"]:checked').value;
    const option = optionsSelect.value;
    const property = propertyCheckbox.checked;

    let total = quantity;

    if (serviceType === "type2") {
      total += option === "option1" ? 10 : 20;
    }

    if (serviceType === "type3" && property) {
      total += 5;
    }

    totalPrice.textContent = total + " руб.";
  }

  // Обработчики изменения элементов формы
  quantityInput.addEventListener("input", updateForm);
  optionsSelect.addEventListener("change", updateForm);
  propertyCheckbox.addEventListener("change", updateForm);

  serviceTypeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      // Обновление формы при смене типа услуги
      updateForm();
    });
  });

  // Первоначальное обновление формы
  updateForm();
});

