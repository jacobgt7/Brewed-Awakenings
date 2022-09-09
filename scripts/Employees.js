import { getEmployees, getOrders } from "./database.js"

//An event listener that shows how many products an employee has sold when clicked.
document.addEventListener(
    "click",
    (e) => {
        const clickTarget = e.target
        //If click target is an employee
        if (clickTarget.id.startsWith("employee")) {
            //Split element ID and store the number in a variable.
            const [, primaryKey] = clickTarget.id.split("--")
            //Iterate through employees array and match the correct id. Store match in variable.
            let matchingEmployee = null
            for (let employee of employees) {
                if (employee.id === parseInt(primaryKey)) {
                    matchingEmployee = employee
                }
            }
            //create empty variable to store number of sold products
            let numOfProductsSold = 0
            //Iterate through orders array and and add 1 to sold products each time order mathches employee.
            for (let order of orders) {
                if (order.employeeId === matchingEmployee.id) {
                    numOfProductsSold++
                }
            }
            //Window alert number of products sold.
            window.alert(`${matchingEmployee.name} has sold ${numOfProductsSold} products.`)
        }
    }
)








const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

