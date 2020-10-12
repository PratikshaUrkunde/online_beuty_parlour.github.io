var entries = [
    { "name": "Pratiksha", "services": "Makeup", "mobile": "1657274413", "date": "16/12/1998", "time": "12:12" },
    { "name": "Pooja", "services": "Hairstyle", "mobile": "7887371770", "date": "13/11/1998", "time": "11:11" }
];

//var jsObj=JSON.parse(entries);
var booksArray = [];

function onSubmit() {
    //store the value entered by user in a variable
    var name = document.getElementById('name').value;
    var services = document.getElementById('services').value;
    var mobile = document.getElementById('mobile').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    //create a entry object with variables
    var entryobject = { name: name, services: services, mobile: mobile, date: date, time: time };
    if (name == "" || services == "" || mobile == "" || date == "" || time == "") {
        //alert("All fields must required");
        swal("Oops!", "All fields must required!", "error");

    }
    else {
        //add the entry object to the array
        booksArray.push(entryobject);
        //alert(booksArray[0].name);
        showEntries();
        //alert("Appointment booked successfully.")
        swal("Good job!", "Appointment booked successfully!", "success");
        localStorage.booksRecord = JSON.stringify(booksArray);
        document.getElementById("name").value = "";
        document.getElementById("services").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("date").value = "";
        document.getElementById("time").value = "";
        
    }
}

function showEntries() {
    var j = 0;
    var contents = "<center><table border='5'><tr><th>Name</th><th>Services</th><th>Mobile</th><th>Date</th><th>Time</th></tr>";
    for (i in booksArray) {
        contents += "<tr><td>" + booksArray[i].name + "</td>" + "<td>" + booksArray[i].services + "</td>" + "<td>" + booksArray[i].mobile + "</td>" + "<td>" + booksArray[i].date + "</td>" +
            "<td>" + booksArray[i].time + "</td><td><button id=" + j + " onclick=onDelete(this.id);" + ">Delete</button></td></tr>";
        j++;
    }
    contents += "</table><center>";
    document.getElementById('showrecords').innerHTML = contents;
}
/*For deleting the entry*/
function onDelete(clicked_id) {
    delete booksArray[clicked_id];
    showEntries();
    //alert('appointment cancelled')
    swal("All right!", "Appointment cancelled!", "success");;


}
function init() {
    if (localStorage.booksRecord) {
        booksArray = JSON.parse(localStorage.booksRecord);
        showEntries();
    }
    else {
        console.log(booksArray);
        //alert("Ha ha");
    }
}
