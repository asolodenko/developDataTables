const dataSet = [
    [ "Arina", "Karali", "Software engineering", "318", "+" ],
    [ "Yana", "Marienko", "Software engineering", "316", "+" ],
    [ "Maxim", "Gromov", "Software engineering", "314", "-" ],
    [ "Ivan", "Karaev", "Hardware engineering", "141", "-" ],
    [ "Yan", "Marienkov", "Hardware engineering", "245", "+" ],
    [ "Mikhail", "Gromenko", "Hardware engineering", "544", "+" ],
    [ "Alina", "Ivanova", "Computer knowledge", "222", "+" ],
    [ "Yana", "Marko", "Computer knowledge", "222", "+" ],
    [ "Maxim", "Chemeris", "Software engineering", "114", "+" ],
    [ "Maria", "Omova", "Computer knowledge", "329", "-" ],
    [ "Karina", "Hatsko", "Software engineering", "414", "+" ],
    [ "Maxim", "Karlash", "Hardware engineering", "341", "-" ],
];

$(document).ready(function(){
    $('.dataTable').dataTable({
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Surname" },
            { title: "Department" },
            { title: "Group" },
            { title: "Scholarship" }
        ]
    });
});