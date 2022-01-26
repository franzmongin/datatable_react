# DataTable React HRNET

## Install the package

Install the package in your project with `npm i datatable_table_react_test`

### Import the component in your code

`import { Datatable } from "datatable_table_react_test";`

### Use it in your code

Use it as a React Component `<DataTable columns={...} data ={...}/>`

#### Pass it a "columns" prop on this model:

`[{ title: "First Name", data: "firstName" }, { title: "Last Name", data: "lastName" }, { title: "Start Date", data: "startDate" }, { title: "Department", data: "department" }, { title: "Date of Birth", data: "dateOfBirth" }, { title: "Street", data: "street" }, { title: "City", data: "city" }, { title: "State", data: "state" }, { title: "Zip Code", data: "zipCode" }]`

One title value and one data value for each column you want to display in your table.

#### Pass it a "data" prop on this model:

`[{ firstName: "Michel", lastName: "Augustin", dateOfBirth: "01/01/1991", startDate: "31/12/2021", department: "Sales", street: "3 rue de Rivoli, ", city: "paris", state: "FR", zipCode: "75004", }, { firstName: "Jean", lastName: "Claude", dateOfBirth: "25/08/2005", startDate: "25/11/2019", department: "Marketing", street: "4 rue de Charonne, ", city: "paris", state: "FR", zipCode: "75011" }]`

The keys have to exist in the "columns" prop data values.
