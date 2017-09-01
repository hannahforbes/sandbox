$(document).ready(function() {

  //KS Info
  var projectCreators = ['Matt Baker', 'Kell Ideas', 'Rob J Madin', 'Open Goldberg'];
  var projectTitles = ["Timeline of World History Poster - Projects of Earth", "Turtle Rover - World's First Earth Rover", "Steamroller Album", "Libre Art of the Fugue"];

  //Takes Project Title (copied from KS) and allows it to be inserted into url
  function projTitleToUrl(projTitle) {
    var projPuncRemove = projTitle.replace("'", "");
    if (projPuncRemove.indexOf('-') > -1) {
      var projTitleSplit = projPuncRemove.split(/\s*\-\s*/g);
      var projTitleSplitFirst = projTitleSplit[0].replace(/\s+/g, '-').toLowerCase();
      var projTitleSplitSecond = projTitleSplit[1].replace(/\s+/g, '-').toLowerCase();
      var projTitleFinal = projTitleSplitFirst + '-' + projTitleSplitSecond;
      return projTitleFinal;
    } else {
      var projTitleFinal = projPuncRemove.replace(/\s+/g, '-').toLowerCase();
      return projTitleFinal;
    }


  }

  //Takes Project Creator (copied from KS) and allows it to be inserted into url
  function projCreatorToUrl(projCreator) {

    if (projCreator.indexOf(" ") > -1){
      var projCreatorSpaceRemove = projCreator.replace(" ", "").toLowerCase();
    } else {
      return projCreator;
    }
    if (projCreatorSpaceRemove.indexOf(" ") > -1){
      var projCreatorSpaceRemoveAgain = projCreatorSpaceRemove.replace(" ", "").toLowerCase();
    } else {
      return projCreatorSpaceRemove;
    }
    if (projCreatorSpaceRemoveAgain.indexOf(" ") > -1){
      var projCreatorSpaceRemoveAgainAgain = projCreatorSpaceRemoveAgain.replace(" ", "").toLowerCase();
    } else {
      return projCreatorSpaceRemoveAgain;
    }

    if (projCreatorSpaceRemoveAgainAgain.indexOf(" ") > -1){
      var projCreatorSpaceRemoveAgainAgainAgain = projCreatorSpaceRemoveAgainAgain.replace(" ", "").toLowerCase();
    } else {
      return projCreatorSpaceRemoveAgainAgain;
    }
  }

  //implifies/shortens name for data entry
  function projSimpleName(projName) {
    var projNameSplit = projName.split(/\s*\-\s*/g);
    return projNameSplit[0];
  }

  function dataKickstarter(projectCreator, projectTitle, projectName, dataZone1, dataZone2, dataZone3) {
    $.ajax({
      url: 'https://www.kickstarter.com/projects/' + projectCreator + '/' + projectTitle + '/stats.json',
      context: document.body
    }).done(function(result) {
      var backers = result.project.backers_count;
      var pledged = result.project.pledged;
      var time = result.project.state_changed_at;
      console.log(", " + projectName + ", " + backers + ", ", +pledged);
      document.getElementById(dataZone1).innerHTML = "Backers = " + backers;
      document.getElementById(dataZone2).innerHTML = "Pledged = " + pledged;
      document.getElementById(dataZone3).innerHTML = projectName;
    });
  }
  dataKickstarter(projCreatorToUrl(projectCreators[0]), projTitleToUrl(projectTitles[0]), projSimpleName(projectTitles[0]), 'data-zone1', 'data-zone2', 'data-zoneA');
  dataKickstarter(projCreatorToUrl(projectCreators[1]), projTitleToUrl(projectTitles[1]), projSimpleName(projectTitles[1]), 'data-zone3', 'data-zone4', 'data-zoneB');
  dataKickstarter(projCreatorToUrl(projectCreators[2]), projTitleToUrl(projectTitles[2]), projSimpleName(projectTitles[2]), 'data-zone5', 'data-zone6', 'data-zoneC');
  dataKickstarter(projCreatorToUrl(projectCreators[3]), projTitleToUrl(projectTitles[3]), projSimpleName(projectTitles[3]), 'data-zone7', 'data-zone8', 'data-zoneD');



  setInterval(function() {
    dataKickstarter(projCreatorToUrl(projectCreators[0]), projTitleToUrl(projectTitles[0]), projSimpleName(projectTitles[0]), 'data-zone1', 'data-zone2', 'data-zoneA');
    dataKickstarter(projCreatorToUrl(projectCreators[1]), projTitleToUrl(projectTitles[1]), projSimpleName(projectTitles[1]), 'data-zone3', 'data-zone4', 'data-zoneB');
    dataKickstarter(projCreatorToUrl(projectCreators[2]), projTitleToUrl(projectTitles[2]), projSimpleName(projectTitles[2]), 'data-zone5', 'data-zone6', 'data-zoneC');
    dataKickstarter(projCreatorToUrl(projectCreators[3]), projTitleToUrl(projectTitles[3]), projSimpleName(projectTitles[3]), 'data-zone7', 'data-zone8', 'data-zoneD');
  }, 1000) //10000 = 10s, 60000 = 1m, 3600000 = 1h, 86400000 = 1d

});
