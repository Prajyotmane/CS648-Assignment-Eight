/*eslint-env browser*/

var employees = [
    ["Alex Logan", "Analyst", 3423],
    ["Shaun Mendis", "Web Developer", 3346],
    ["Khristy Wang", "Design Engineer 2", 3232],
    ["Dan Pitt", "Manager", 3333],
    ["Steve Kane", "Lead", 3000],
];

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load",function(){
    "use strict";
    $("name").focus();
    refreshEmployeeList();
    var submit = $("add");
    submit.addEventListener("click", addEmployee);

});

function  addEmployee(add) {
    var name =$("name");
    var title = $("title");
    var ext = $("extension");

    if (!name.value) {
        $("error_name").innerHTML = "Name is required";
    }
    else {
        $("error_name").innerHTML = "";
    }

    if (!title.value) {
        $("error_title").innerHTML = "Title is required";
    }
    else {
        $("error_title").innerHTML = "";
    }

    if (!ext.value) {
        $("error_extension").innerHTML = "Extension is required";
    }
    else {
        $("error_extension").innerHTML = "";
    }

    if (name.value && title.value && ext.value) {
        employees.push([name.value, title.value, ext.value]);
        name.value = "";
        title.value = "";
        ext.value = "";
        refreshEmployeeList();
    }
    
}

function refreshEmployeeList() {
    "use strict";
    var html = "";
    document.getElementById("count").innerHTML = employees.length;
    for (var i = 0; i < employees.length; i++) {
        var employee = employees[i];
        html += '<tr><td>' + employee[0] + '</td><td>' + employee[1] + '</td><td>' + employee[2] + '</td><td class="del_container"><button class="del_btn" onclick="deleteEmployee(' + i + ')">Delete</button></td></tr>';
    }
    
    document.querySelector("#employee_info tbody").innerHTML = html;
    
}
function deleteEmployee(n) {
    employees.splice(n, 1);
    refreshEmployeeList();
}
