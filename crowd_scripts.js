$(document).ready(function() {

  //KS Info
  var projectInfo = [
    //Project names need all other punctuation (colons, exclataion points, full stops, commas etc.) removing
    //and can not be over 50 characters
    //Take "&" out of any project creator names
    ["Matt Baker", "Timeline of World History Poster - Projects of Earth"],
    ["Kell Ideas", "Turtle Rover - World's First Earth Rover"],
    ["Rob J Madin", "Steamroller Album"],
    ["Open Goldberg", "Libre Art of the Fugue"],
    ["Wooden Overcoats", "Wooden Overcoats Fund Season 3"],
    ["The Cleaver Quarterly", "The Illustrated Wok Chinese food like you've never"],
    ["Biliana Marina Grozdanova", "Golden Tracks a documentary series"],
    ["Comite de Proyectos", "Lampara Binomios"],
    ["Bandido Studio", "DEBORAH a pendant lamp"],
    ["Timothy Davis", "Yewood Guard Simple Adaptable Wooden Mudguards Fen"]
  ]
  // var projectCreators = ['Matt Baker', 'Kell Ideas', 'Rob J Madin', 'Open Goldberg'];
  // var projectTitles = ["Timeline of World History Poster - Projects of Earth", "Turtle Rover - World's First Earth Rover", "Steamroller Album", "Libre Art of the Fugue"];

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
    //Allows a Project Creator's name to include a maximum of 5 words, while loop crashed browser
    if (projCreator.indexOf(" ") > -1) {
      var projCreatorSpaceRemove = projCreator.replace(" ", "").toLowerCase();
    } else {
      return projCreator;
    }
    if (projCreatorSpaceRemove.indexOf(" ") > -1) {
      var projCreatorSpaceRemoveAgain = projCreatorSpaceRemove.replace(" ", "").toLowerCase();
    } else {
      return projCreatorSpaceRemove;
    }
    if (projCreatorSpaceRemoveAgain.indexOf(" ") > -1) {
      var projCreatorSpaceRemoveAgainAgain = projCreatorSpaceRemoveAgain.replace(" ", "").toLowerCase();
    } else {
      return projCreatorSpaceRemoveAgain;
    }

    if (projCreatorSpaceRemoveAgainAgain.indexOf(" ") > -1) {
      var projCreatorSpaceRemoveAgainAgainAgain = projCreatorSpaceRemoveAgainAgain.replace(" ", "").toLowerCase();
    } else {
      return projCreatorSpaceRemoveAgainAgain;
    }
  }

  //Simplifies/shortens name for data entry
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
      //Inserting on HTML Page
      // document.getElementById(dataZone1).innerHTML = projectName;
      // document.getElementById(dataZone2).innerHTML = "Backers = " + backers;
      // document.getElementById(dataZone3).innerHTML = "Pledged = " + pledged;
    });
  }

  for (i = 0;
    (i < projectInfo.length); i++) {
    dataKickstarter(projCreatorToUrl(projectInfo[i][0]), projTitleToUrl(projectInfo[i][1]), projSimpleName(projectInfo[i][1]),
    //  'data-zone' + i, 'data-zone' + i + 'A', 'data-zone' + i + 'B' //Inserting on HTML page
    );
  }

  setInterval(function() {
    for (i = 0;
      (i < projectInfo.length); i++) {
      dataKickstarter(projCreatorToUrl(projectInfo[i][0]), projTitleToUrl(projectInfo[i][1]), projSimpleName(projectInfo[i][1]),
    //    'data-zone' + i, 'data-zone' + i + 'A', 'data-zone' + i + 'B' //Inserting on HTML page
      );
    }
  }, 1000) //10000 = 10s, 60000 = 1m, 3600000 = 1h, 86400000 = 1d

});
