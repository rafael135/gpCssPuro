
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
    if(headerNav.classList.contains("show")) {
        headerNav.classList.remove("show");
    } else {
        headerNav.classList.add("show");
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
        case 5:
            slideEmployees.style.marginLeft = "-660px";
            break;
        case 6:
            slideEmployees.style.marginLeft = "-540px";
            break;
        case 7:
            slideEmployees.style.marginLeft = "-450px";
            break;
        case 8:
            slideEmployees.style.marginLeft = "-400px";
            break;
        case 9:
            slideEmployees.style.marginLeft = "-350px";
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
        case 5:
            slideEmployees.style.marginLeft = "-1320px";
            break;
        case 6:
            slideEmployees.style.marginLeft = "-1080px";
            break;
        case 7:
            slideEmployees.style.marginLeft = "-900px";
            break;
        case 8:
            slideEmployees.style.marginLeft = "-800px";
            break;
        case 9:
            slideEmployees.style.marginLeft = "-700px";
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
        case 5:
            slideEmployees.style.marginLeft = "-1980px";
            break;
        case 6:
            slideEmployees.style.marginLeft = "-1620px";
            break;
        case 7:
            slideEmployees.style.marginLeft = "-1350px";
            break;
        case 8:
            slideEmployees.style.marginLeft = "-1200px";
            break;
        case 9:
            slideEmployees.style.marginLeft = "-1050px";
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
        case 5:
            slideEmployees.style.marginLeft = "-2640px";
            break;
        case 6:
            slideEmployees.style.marginLeft = "-2160px";
            break;
        case 7:
            slideEmployees.style.marginLeft = "-1800px";
            break;
        case 8:
            slideEmployees.style.marginLeft = "-1600px";
            break;
        case 9:
            slideEmployees.style.marginLeft = "-1400px";
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
    } else if(employeeContainer.offsetWidth == 660) { // 660px
        return 5;
    } else if(employeeContainer.offsetWidth == 540) { // 540px
        return 6;
    } else if(employeeContainer.offsetWidth == 450) { // 450px
        return 7;
    } else if(employeeContainer.offsetWidth == 400) { // 400px
        return 8;
    } else if(employeeContainer.offsetWidth == 350) { // 350px
        return 9;
    } else {
        return 10;
    }
}