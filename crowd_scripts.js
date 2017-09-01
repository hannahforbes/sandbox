$(document).ready(function() {

  function projTitleToUrl (projTitle){
  //  var projTitle = "Timeline of World History Poster - Projects of Earth";
    var projPuncRemove = projTitle.replace("'", "");
    var projTitleSplit = projPuncRemove.split(/\s*\-\s*/g)
    var projTitleSplitFirst = projTitleSplit[0].replace(/\s+/g, '-').toLowerCase();
    var projTitleSplitSecond = projTitleSplit[1].replace(/\s+/g, '-').toLowerCase();
    var projTitleFinal = projTitleSplitFirst + '-' + projTitleSplitSecond;
    return projTitleFinal;
  }

  function dataKickstarter(projectCreator, projectTitle, projectName, dataZone1, dataZone2, dataZone3) {
    $.ajax({
      url: 'https://www.kickstarter.com/projects/' + projectCreator + '/' + projectTitle + '/stats.json',
      context: document.body
    }).done(function(result) {
      var backers = result.project.backers_count;
      var pledged = result.project.pledged;
      var time = result.project.state_changed_at;
      console.log(", " + projectName + ", " + backers + ", ", + pledged);
      document.getElementById(dataZone1).innerHTML = "Backers = " + backers;
      document.getElementById(dataZone2).innerHTML = "Pledged = " + pledged;
      document.getElementById(dataZone3).innerHTML = projectName;
    });
  }
  dataKickstarter('mattbaker', 'timeline-of-world-history-poster-projects-of-earth', 'History Poster', 'data-zone1', 'data-zone2', 'data-zoneA');
  dataKickstarter('kellideas', 'turtle-rover-worlds-first-earth-rover', 'Turtle Rover', 'data-zone3', 'data-zone4', 'data-zoneB');
  dataKickstarter('robjmadin', 'steamroller-album', 'Steam Roller', 'data-zone5', 'data-zone6', 'data-zoneC');
  dataKickstarter('opengoldberg', 'libre-art-of-the-fugue', 'Libre Art of the Fugure', 'data-zone7', 'data-zone8', 'data-zoneD');

  setInterval(function() {
    dataKickstarter('mattbaker', 'timeline-of-world-history-poster-projects-of-earth', 'History Poster', 'data-zone1', 'data-zone2', 'data-zoneA');
    dataKickstarter('kellideas', 'turtle-rover-worlds-first-earth-rover', 'Turtle Rover', 'data-zone3', 'data-zone4', 'data-zoneB');
    dataKickstarter('robjmadin', 'steamroller-album', 'Steam Roller', 'data-zone5', 'data-zone6', 'data-zoneC');
    dataKickstarter('opengoldberg', 'libre-art-of-the-fugue', 'Libre Art of the Fugure', 'data-zone7', 'data-zone8', 'data-zoneD');
  }, 10000) //10000 = 10s, 60000 = 1m, 3600000 = 1h, 86400000 = 1d



console.log(projTitleToUrl("Turtle Rover - World's First Earth Rover"));

});
