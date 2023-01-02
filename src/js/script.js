
// Botoes de paginacao do slider de empregados
const employee1 = document.getElementById("employee-page-1");
const employee2 = document.getElementById("employee-page-2");
const employee3 = document.getElementById("employee-page-3");
const employee4 = document.getElementById("employee-page-4");
const employee5 = document.getElementById("employee-page-5");
const employeeContainer = document.getElementById("container-employee");
let employees = [employee1, employee2, employee3, employee4, employee5];

const slideEmployees = document.getElementById("employees-slides"); // Slider dos empregados







// Eventos de clique dos botoes de paginacao
employee1.addEventListener("click", () => {
    slideEmployees.style.transitionDuration = "600ms";
    slideEmployees.style.marginLeft = "0";
    toggleEmployeeActive(0);
});

employee2.addEventListener("click", () => {
    let width = activeWidth();
    
    slideEmployees.style.transitionDuration = "600ms";
    if(width == 0){
        slideEmployees.style.marginLeft = "-1400px";
    }
    else if(width == 1) {
        slideEmployees.style.marginLeft = "-1200px";
    }
    
    toggleEmployeeActive(1);
});

employee3.addEventListener("click", () => {
    let width = activeWidth();

    slideEmployees.style.transitionDuration = "600ms";
    if(width == 0){
        slideEmployees.style.marginLeft = "-2800px";
    }
    else if(width == 1){
        slideEmployees.style.marginLeft = "-2400px";
    }

    toggleEmployeeActive(2);
});

employee4.addEventListener("click", () => {
    let width = activeWidth();

    slideEmployees.style.transitionDuration = "600ms";
    if(width == 0){
        slideEmployees.style.marginLeft = "-4200px";
    }
    else if(width == 1){
        slideEmployees.style.marginLeft = "-3600px";
    }
    
    toggleEmployeeActive(3);
});

employee5.addEventListener("click", () => {
    let width = activeWidth();

    slideEmployees.style.transitionDuration = "600ms";
    if(width == 0){
        slideEmployees.style.marginLeft = "-5600px";
    }
    else if(width == 1){
        slideEmployees.style.marginLeft = "-4800px";
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
    } else {
        return 2;
    }
}