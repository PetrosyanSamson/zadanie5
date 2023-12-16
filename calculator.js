document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const serviceInputs = document.querySelectorAll('input[name="service"]');
    const optionsContainer = document.getElementById("options-container");
    const propertyContainer = document.getElementById("property-container");
    const optionsSelect = document.getElementById("options");
    const propertyCheckbox = document.getElementById("property");
    const totalPrice = document.getElementById("total-price");

    // Цены для различных услуг и опций
    const prices = {
        service1: 10,
        service2: 15,
        service3: 20,
        option1: 5,
        option2: 8,
        property1: 3,
    };

    // Обработчик изменений в форме
    function updateTotalPrice() {
        let price = 0;

        // Найти выбранную услугу
        let selectedService = '';
        serviceInputs.forEach(input => {
            if (input.checked) {
                selectedService = input.value;
            }
        });

        // Рассчитать стоимость на основе услуги, опции и свойства
        price = prices[selectedService] * quantityInput.value;

        if (selectedService === "service2") {
            optionsContainer.style.display = "block";
            propertyContainer.style.display = "none";
            price += prices[optionsSelect.value] * quantityInput.value;
        } else if (selectedService === "service3") {
            optionsContainer.style.display = "none";
            propertyContainer.style.display = "block";
        } else {
            optionsContainer.style.display = "none";
            propertyContainer.style.display = "none";
        }

        if (propertyCheckbox.checked) {
            price += prices[propertyCheckbox.value] * quantityInput.value;
        }

        totalPrice.textContent = price + " руб.";
    }

    // Добавление слушателей событий
    quantityInput.addEventListener("input", updateTotalPrice);

    serviceInputs.forEach(input => {
        input.addEventListener("change", updateTotalPrice);
    });

    optionsSelect.addEventListener("change", updateTotalPrice);
    propertyCheckbox.addEventListener("change", updateTotalPrice);
});

