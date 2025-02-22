function printRecords(recordIds) {
	// TODO
	 var currentStudents = studentRecords.filter(function findRecord(student){
		return Array.isArray(recordIds) && recordIds.includes(student.id);
	 });

	 currentStudents.sort(function sorting(a, b) {
		const nameA = a.name.toUpperCase(); // ignore upper and lowercase
		const nameB = b.name.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
		  return -1;
		}
		if (nameA > nameB) {
		  return 1;
		}
	  
		// names must be equal
		return 0;
	  });

	  currentStudents.forEach(function currentStudents(student) {
		let paidStatus;
		if(student.paid){
			paidStatus = 'Paid';
		} else {
			paidStatus = 'Not Paid';
		}

		console.log(`${student.name} (${student.id}): ${paidStatus}`);
	  });

}

function paidStudentsToEnroll() {
	// TODO

	var paidStudentsNotEnrolled = studentRecords.filter(function findRecord(student){
		return student.paid && Array.isArray(currentEnrollment) && !currentEnrollment.includes(student.id);
	 }).map(function studentID(student){
		return student.id;
	 });

	 return[...currentEnrollment, ...paidStudentsNotEnrolled];
}

function remindUnpaid(recordIds) {
	// TODO

	var unpaidStudents = studentRecords.filter(function findRecord(student){
		return !student.paid && Array.isArray(currentEnrollment) && currentEnrollment.includes(student.id);
	 }).map(function studentID(student){
		return student.id;
	 });

	 printRecords(unpaidStudents);
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
