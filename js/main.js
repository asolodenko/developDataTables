const mydata = [
    {
        Name: "Arina",
        Surname: "Karali",
        Department: "Software engineering",
        Group: "318",
        Scholarship: "+"
    },
    {
        Name: "Yana",
        Surname: "Marienko",
        Department: "Software engineering",
        Group: "218",
        Scholarship: "+"
    },
    {
        Name: "Maxim",
        Surname: "Gromov",
        Department: "Software engineering",
        Group: "315",
        Scholarship: "-"
    }
];
(function() {
    'use strict';

    window.addEventListener('load', function() {
        let tbody = document.getElementsByTagName("tbody");
        for (let obj of mydata) {
            let newRow = document.createElement('tr');
            tbody.appendChild(newRow);
            for (let property in obj) {
                let newCell = document.createElement('td');
                newRow.appendChild(newCell);
                let newText  = document.createTextNode(obj[property]);
                newCell.appendChild(newText);
            }
        }
    })
})();