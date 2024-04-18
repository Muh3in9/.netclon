function showSection(sectionId) {
  // Hide all sections
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
    section.classList.remove('active');
  });

  // Show the selected section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');

  // Update active state in the navigation
  var navItems = document.querySelectorAll('nav ul li');
  navItems.forEach(function(item) {
    item.classList.remove('active');
    if (item.getAttribute('onclick').includes(sectionId)) {
      item.classList.add('active');
    }
  });
}

  