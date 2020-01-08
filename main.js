document.addEventListener("DOMContentLoaded", function () {

    const input1 = document.getElementById("ProductsInput");
    const input2 = document.getElementById("OrdersInput");

    const dropdownInput = document.getElementById("drop_input");
    const dropdownButton = document.getElementById("dropdown_button");
    const hiddenDiv = document.getElementById("Dropdown");

    const checkbox1 = document.getElementById("1Checkbox");
    const checkbox2 = document.getElementById("2Checkbox");

    const resultInput1 = document.getElementById("ResultInput1");
    const resultInput2 = document.getElementById("ResultInput2");
    const resultInput3 = document.getElementById("ResultInput3");
    const resultInput4 = document.getElementById("ResultInput4");
    const resultInput5 = document.getElementById("ResultInput5");
    const resultInput6 = document.getElementById("ResultInput6");

    const quantityProducts = document.getElementById("InputProducts");
    const resultProducts = document.getElementById("ProductsResult");
    const quantityOrders = document.getElementById("InputOrders");
    const resultOrders = document.getElementById("OrdersResult");
    const packageCost = document.getElementById("PackageCost");
    const accountingCheckbox = document.getElementById("Checkbox1");
    const rentalCheckbox = document.getElementById("Checkbox2");
    const totalCost = document.getElementById("TotalCost");


    if (!checkbox1.checked) {
        resultInput4.style.visibility = "hidden";
    } else {
        resultInput4.style.visibility = "visible";
    }
    checkbox1.addEventListener("click", function () {
        if (!this.checked) {
            resultInput4.style.visibility = "hidden";
        } else {
            resultInput4.style.visibility = "visible";
        }
    })
    if (!checkbox2.checked) {
        resultInput5.style.visibility = "hidden";
    } else {
        resultInput5.style.visibility = "visible";
    }
    checkbox2.addEventListener("click", function () {
        if (!this.checked) {
            resultInput5.style.visibility = "hidden";
        } else {
            resultInput5.style.visibility = "visible";
        }
    })

    dropdownButton.addEventListener("click", function () {
        if (hiddenDiv.style.display === "none") {
            hiddenDiv.style.display = "block";
        } else {
            hiddenDiv.style.display = "none";
        }
    });


    hiddenDiv.addEventListener("click", function () {

        var basic = document.querySelector(".basic").innerText;
        var pro = document.querySelector(".pro").innerText;
        var premium = document.querySelector(".premium").innerText;
        var packageVersion = document.getElementById("PackageVersion").innerText;
        var list = document.querySelectorAll('.list');

        for (const el of list) {
            if (el === hiddenDiv.firstChild) {
                basic = packageVersion;
            } else if (el === hiddenDiv.lastChild) {
                premium = packageVersion;
            } else {
                pro = packageVersion;
            }

            if (this.style.display === "block") {
                resultInput3.style.visibility = "visible";
            }
        }
    })


})

