let projects = [];

createProjects();
projectsView();

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
    '<div class="icon-wrap"> <a target="_blank" rel="noreferrer noopener" href="https://github.com/georgeosutton/Portfolio-Website-Public">GitHub</a>' +
    '<a target="_blank" rel="noreferrer noopener" href="https://github.com/georgeosutton/Portfolio-Website-Public"> <img class="github-icon"' +
    ' src="imgs/GitHub-Mark-32px.png" alt="GitHub Link"></a></div></div></div>';
  projects[1].project.innerHTML =
    '<div class="project"><img class="thumbnail" src="imgs/travelly-img.png" alt=""><div class="project-preview">' +
    '<h6 class="project-title">Travel Website</h6><p>A website made to showcase my proficiency in HTML and CSS! </p>' +
    '<div class="project-links"><div class="icon-wrap"><a target="_blank" rel="noreferrer noopener" href="https://github.com/georgeosutton/Portfolio-Website-Public">GitHub</a>' +
    '<a target="_blank" rel="noreferrer noopener" href="https://github.com/georgeosutton/Travelly-Website"> <img class="github-icon"' +
    ' src="imgs/GitHub-Mark-32px.png" alt="GitHub Link"></a></div>' +
    '<a target="_blank" rel="noreferrer noopener" href="https://travelly-website.netlify.app/"> View Site </a>';
}

function projectsView() {
  let displayed = document.querySelectorAll(".projects");
  displayed.forEach(function (displayed) {
    displayed.remove();
  });

  document.getElementById("project-wrapper").appendChild(projects[0].project);
  projects[0].indicator.className = "active indicator";
}

let before = document.getElementById("before");
before.addEventListener("click", function () {
  projects[0].indicator.className = "indicator";
  let first = projects.shift();
  projects.push(first);
  projectsView();
});

let next = document.getElementById("next");
next.addEventListener("click", function () {
  projects[0].indicator.className = "indicator";
  let last = projects.pop();
  projects.unshift(last);
  projectsView();
});
