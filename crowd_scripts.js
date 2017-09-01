$(document).ready(function() {

    setInterval(function()
      {
        function dataKickstarter(projectCreator, projectTitle, projectName, dataZone1, dataZone2, dataZone3){
        $.ajax({
          url: 'https://www.kickstarter.com/projects/' + projectCreator + '/' + projectTitle + '/stats.json',
          context: document.body
        }).done(function(result) {
          var backers = result.project.backers_count;
          var pledged = result.project.pledged;
          var time = result.project.state_changed_at;
          console.log(", " + projectName + ", " +  backers + ", ",  + pledged);
          document.getElementById(dataZone1).innerHTML = "Backers = " + backers;
          document.getElementById(dataZone2).innerHTML = "Pledged = " + pledged;
          document.getElementById(dataZone3).innerHTML = projectName;
        });
      }
      dataKickstarter('mattbaker','timeline-of-world-history-poster-projects-of-earth', 'History Poster', 'data-zone1', 'data-zone2', 'data-zoneA');
      dataKickstarter('kellideas','turtle-rover-worlds-first-earth-rover', 'Turtle Rover', 'data-zone3', 'data-zone4', 'data-zoneB');
      dataKickstarter('robjmadin','steamroller-album', 'Steam Roller', 'data-zone5', 'data-zone6', 'data-zoneC');
      dataKickstarter('opengoldberg', 'libre-art-of-the-fugue', 'Libre Art of the Fugure', 'data-zone7', 'data-zone8', 'data-zoneD');
    }, 1000) //10000 = 10s

});
