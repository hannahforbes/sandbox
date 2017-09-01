$(document).ready(function() {

    setInterval(function()
      {
        function dataKickstarter(projectCreator, projectTitle, projectName, dataZone1, dataZone2){
        $.ajax({
          url: 'https://www.kickstarter.com/projects/' + projectCreator + '/' + projectTitle + '/stats.json',
          context: document.body
        }).done(function(result) {
          var backers = result.project.backers_count;
          var pledged = result.project.pledged;
          var time = result.project.state_changed_at;
          console.log(", " + projectName + ", " + "Backers = " + backers + ", ", "Pledged = " + pledged + ",");
          document.getElementById(dataZone1).innerHTML = "Backers = " + backers;
          document.getElementById(dataZone2).innerHTML = "Pledged = " + pledged;
        });
      }
      dataKickstarter('mattbaker','timeline-of-world-history-poster-projects-of-earth', 'History Poster', 'data-zone1', 'data-zone2');
      // dataKickstarter($('#data-zone3').attr('data-url'), 'Sun Spots', 'data-zone3', 'data-zone4');
      // dataKickstarter($('#data-zone5').attr('data-url'), 'Orrery Lamp', 'data-zone5', 'data-zone6');
      // dataKickstarter($('#data-zone7').attr('data-url'), 'Apricoat', 'data-zone7', 'data-zone8');
      // dataKickstarter($('#data-zone9').attr('data-url'), 'Nise Wave', 'data-zone9', 'data-zone10');
      // dataKickstarter($('#data-zone11').attr('data-url'), 'Wooden World Watch', 'data-zone11', 'data-zone12');
    }, 10000) //10000 = 10s

});
