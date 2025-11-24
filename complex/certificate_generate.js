// Example user object
let user = {
  name: 'Nayem',
  courses: [
    { id: 1, title: 'JavaScript Basics', completed: false },
    { id: 2, title: 'React Fundamentals', completed: false },
  ],
  certificates: [],
};

// Function: Mark a course as completed
function completeCourse(user, courseId) {
  let course = user.courses.filter((c) => c.id === courseId)[0];

  if (!course) {
    console.log('Course not found!');
    return;
  }

  if (course.completed) {
    console.log('Course already completed.');
    return;
  }

  course.completed = true;
  console.log(`${user.name} has completed course: ${course.title}`);

  // Automatically generate certificate
  generateCertificate(user, course);
}

// Function: Generate certificate
function generateCertificate(user, course) {
  let certificate = {
    courseId: course.id,
    courseTitle: course.title,
    issuedTo: user.name,
    issuedOn: new Date().toLocaleDateString(),
  };

  user.certificates.push(certificate);
  console.log(`🎉 Certificate earned for ${course.title}!`);
}

// Test
completeCourse(user, 2);
console.log(user.certificates);
