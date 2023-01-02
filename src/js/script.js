
// Botoes de paginacao do slider de empregados
const employee1 = document.getElementById("employee-page-1");
const employee2 = document.getElementById("employee-page-2");
const employee3 = document.getElementById("employee-page-3");
const employee4 = document.getElementById("employee-page-4");
const employee5 = document.getElementById("employee-page-5");
const employeeContainer = document.getElementById("container-employee");
let employees = [employee1, employee2, employee3, employee4, employee5];

const slideEmployees = document.getElementById("employees-slides"); // Slider dos empregados

const menuBtn = document.getElementById("menu-button"); // Botao mobile
const headerNav = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    if(headerNav.style.display == "none") {
        headerNav.style.display = "block";
    } else {
        headerNav.style.display = "none";
    }
});





// Eventos de clique dos botoes de paginacao
employee1.addEventListener("click", () => {
    slideEmployees.style.transitionDuration = "600ms";
    slideEmployees.style.marginLeft = "0";
    toggleEmployeeActive(0);
});

employee2.addEventListener("click", () => {
    let width = activeWidth();
    
    slideEmployees.style.transitionDuration = "600ms";

    switch(width) {
        case 0:
            slideEmployees.style.marginLeft = "-1400px";
            break;
        case 1:
            slideEmployees.style.marginLeft = "-1200px";
            break;
        case 2:
            slideEmployees.style.marginLeft = "-1000px";
            break;
        case 3:
            slideEmployees.style.marginLeft = "-920px";
            break;
        case 4:
            slideEmployees.style.marginLeft = "-780px";
            break;
    }
    
    toggleEmployeeActive(1);
});

employee3.addEventListener("click", () => {
    let width = activeWidth();

    slideEmployees.style.transitionDuration = "600ms";

    switch(width) {
        case 0:
            slideEmployees.style.marginLeft = "-2800px";
            break;
        case 1:
            slideEmployees.style.marginLeft = "-2400px";
            break;
        case 2:
            slideEmployees.style.marginLeft = "-2000px";
            break;
        case 3:
            slideEmployees.style.marginLeft = "-1840px";
            break;
        case 4:
            slideEmployees.style.marginLeft = "-1560px";
            break;
    }

    toggleEmployeeActive(2);
});

employee4.addEventListener("click", () => {
    let width = activeWidth();

    slideEmployees.style.transitionDuration = "600ms";

    switch(width) {
        case 0:
            slideEmployees.style.marginLeft = "-4200px";
            break;
        case 1:
            slideEmployees.style.marginLeft = "-3600px";
            break;
        case 2:
            slideEmployees.style.marginLeft = "-3000px";
            break;
        case 3:
            slideEmployees.style.marginLeft = "-2760px";
            break;
        case 4:
            slideEmployees.style.marginLeft = "-2340px";
            break;
    }
    
    toggleEmployeeActive(3);
});

employee5.addEventListener("click", () => {
    let width = activeWidth();


    slideEmployees.style.transitionDuration = "600ms";

    switch(width) {
        case 0:
            slideEmployees.style.marginLeft = "-5600px";
            break;
        case 1:
            slideEmployees.style.marginLeft = "-4800px";
            break;
        case 2:
            slideEmployees.style.marginLeft = "-4000px";
            break;
        case 3:
            slideEmployees.style.marginLeft = "-3680px";
            break;
        case 4:
            slideEmployees.style.marginLeft = "-3120px";
            break;

    }

    toggleEmployeeActive(4);
});
//






// Funcao para alternar os botoes entre ativos e nao ativos
function toggleEmployeeActive(i) {
    for(let idx in employees) {
        if(idx == i) {
            employees[idx].classList.add("active");
        }else {
            employees[idx].classList.remove("active");
        }
    }
}

// Funcao para detectar tamanho ativo do container
function activeWidth() {
    if(employeeContainer.offsetWidth == 1400) { // 1400px
        return 0;
    } else if(employeeContainer.offsetWidth == 1200) { // 1200px
        return 1;
    } else if(employeeContainer.offsetWidth == 1000) { // 1000px
        return 2;
    } else if(employeeContainer.offsetWidth == 920) { // 920px
        return 3;
    } else if(employeeContainer.offsetWidth == 780) { // 780px
        return 4;
    } else {
        return 5;
    }
}