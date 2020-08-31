var mqMobile = window.matchMedia("(max-width: 750px)");
var mqTablet = window.matchMedia("(max-width: 1200px");

var projects = [];

function createProjects() {
  for (let i = 0; i < 2; i++) {
    projects.push({
      project: document.createElement("div"),
      indicator: document.createElement("div"),
    });
  }

  for (let i = 0; i < projects.length; i++) {
    projects[i].project.className = "projects";
    projects[i].indicator.className = "indicator";
    document.getElementById("indicators").appendChild(projects[i].indicator);
  }

  projects[0].project.innerHTML =
    '<div class="project"><img class="thumbnail" src="imgs/project-personal-portfolio.png" alt=""><div class="project-preview">' +
    '<h6 class="project-title">Personal Portfolio Site</h6><p>View the code behind this site; built using HTML, CSS and JavaScript.</p>' +
    '<div class="icon-wrap"> <a target="_blank" href="https://github.com/georgeosutton/Portfolio-Website-Public">GitHub</a>' +
    '<a target="_blank" href="https://github.com/georgeosutton/Portfolio-Website-Public"> <img class="github-icon"' +
    ' src="imgs/GitHub-Mark-32px.png" alt="GitHub Link"></a></div></div></div>';
  projects[1].project.innerHTML =
    '<div class="project"><img class="thumbnail" src="imgs/coming-soon.jpg" alt=""><div class="project-preview">' +
    '<h6 class="project-title">Coming Soon! </h6><p>Work in progress</p></div></div>';
}
createProjects();
projectsView();

function projectsView() {
  var displayed = document.querySelectorAll(".projects");
  displayed.forEach(function (displayed) {
    displayed.remove();
  });

  document.getElementById("project-wrapper").appendChild(projects[0].project);
  projects[0].indicator.className = "active indicator";
}

mqMobile.addListener(projectsView);
mqTablet.addListener(projectsView);

var before = document.getElementById("before");
before.addEventListener("click", function () {
  projects[0].indicator.className = "indicator";
  let first = projects.shift();
  projects.push(first);
  projectsView();
});

var next = document.getElementById("next");
next.addEventListener("click", function () {
  projects[0].indicator.className = "indicator";
  let last = projects.pop();
  projects.unshift(last);
  projectsView();
});
