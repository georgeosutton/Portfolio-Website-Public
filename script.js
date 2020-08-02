var mqMobile = window.matchMedia("(max-width: 750px)");
var mqTablet = window.matchMedia("(max-width: 1200px");    



var projects;


function createProjects(){
   
    projects = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")]
    
    for (let i = 0; i < projects.length; i++){
         projects[i].className = 'projects';
         projects[0].innerHTML = "<div class=\"project\"><img class=\"thumbnail\" src=\"imgs/coming-soon.jpg\" alt=\"\"><div class=\"project-preview\"><h6 class=\"project-title\">Example</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, in!</p></div></div>"
         projects[1].innerHTML = "<div class=\"project\"><img class=\"thumbnail\" src=\"imgs/coming-soon.jpg\" alt=\"\"><div class=\"project-preview\"><h6 class=\"project-title\">Example</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, in!</p></div></div>"
         projects[2].innerHTML = "<div class=\"project\"><img class=\"thumbnail\" src=\"imgs/coming-soon.jpg\" alt=\"\"><div class=\"project-preview\"><h6 class=\"project-title\">Example</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, in!</p></div></div>"
         projects[3].innerHTML = "<div class=\"project\"><img class=\"thumbnail\" src=\"imgs/coming-soon.jpg\" alt=\"\"><div class=\"project-preview\"><h6 class=\"project-title\">Example</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, in!</p></div></div>"
    }
    
   console.log(mqTablet)

    

}

createProjects();
projectsView();

    function projectsView(){
        var displayed = document.querySelectorAll('.projects')
        displayed.forEach(function(displayed){
            displayed.remove()
   }
   )
    
      

    if (mqMobile.matches) {
        document.getElementById('project-wrapper').appendChild(projects[0]);
    }
    else if (!mqMobile.matches && mqTablet.matches){
        document.getElementById('project-wrapper').appendChild(projects[0]);
        document.getElementById('project-wrapper').appendChild(projects[1]);
    }
    else {
        document.getElementById('project-wrapper').appendChild(projects[0]);
        document.getElementById('project-wrapper').appendChild(projects[1]);
        document.getElementById('project-wrapper').appendChild(projects[2]);
    }
}

mqMobile.addListener(projectsView);
mqTablet.addListener(projectsView);

var before = document.getElementById('before');
before.addEventListener('click', function(){
    let first = projects.shift();
        projects.push(first);
        projectsView()
    });

var next = document.getElementById('next');
next.addEventListener('click', function(){
    let last = projects.pop();
        projects.unshift(last); 

        projectsView()
    });


