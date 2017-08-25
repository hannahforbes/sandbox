$(document).ready(function() {
      // $.ajax({
      //   url: "http://www.kickstarter.com/projects/usefulcharts/timeline-of-world-history-poster-projects-of-earth/stats.json?v=1",
      //   context: document.body
      // }).done(function(result) {
      //   var backers = result.project.backers_count;
      //   var pledged = result.project.pledged;
      //   console.log(backers, pledged);
      //   document.getElementById('data-zone1').innerHTML = "Backers = " + backers;
      //   document.getElementById('data-zone2').innerHTML = "Pledged = " + pledged;
      // });


      setInterval(function()
      {
        //World History Poster
        // var dataUrl = $('#data-zone1').attr('data-url');
        function dataKickstarter(dataUrl, projectName, dataZone1, dataZone2){
        $.ajax({
          url: dataUrl,
          context: document.body
        }).done(function(result) {
          // var projectName = 'History Poster'
          // var dataZone1 = 'data-zone1';
          // var dataZone2 = 'data-zone2';
          var backers = result.project.backers_count;
          var pledged = result.project.pledged;
          var time = result.project.state_changed_at;
          console.log(", " + projectName + ", " + "Backers = " + backers + ", ", "Pledged = " + pledged + ",");
          document.getElementById(dataZone1).innerHTML = "Backers = " + backers;
          document.getElementById(dataZone2).innerHTML = "Pledged = " + pledged;
        });
      }
      dataKickstarter($('#data-zone1').attr('data-url'), 'History Poster', 'data-zone1', 'data-zone2');
      dataKickstarter($('#data-zone3').attr('data-url'), 'Sun Spots', 'data-zone3', 'data-zone4');
        //Sun Spots
        // $.ajax({
        //   url: "https://www.kickstarter.com/projects/1421716661/sun-spots-a-print-portfolio/stats.json?v=1",
        //   context: document.body
        // }).done(function(result) {
        //   var backers = result.project.backers_count;
        //   var pledged = result.project.pledged;
        //   var time = result.project.state_changed_at;
        //   console.log(", Sun Spots, ", "Backers = " + backers + ", ", "Pledged = " + pledged + ",");
        //   document.getElementById('data-zone3').innerHTML = "Backers = " + backers;
        //   document.getElementById('data-zone4').innerHTML = "Pledged = " + pledged;
        // });

        // //Project 3
        // $.ajax({
        //   url: "https://www.kickstarter.com/projects/1421716661/sun-spots-a-print-portfolio/stats.json?v=1",
        //   context: document.body
        // }).done(function(result) {
        //   var backers = result.project.backers_count;
        //   var pledged = result.project.pledged;
        //   var time = result.project.state_changed_at;
        //   //console.log(", Sun Spots, ", "Backers = " + backers + ", ", "Pledged = " + pledged + ",");
        //   document.getElementById('data-zone5').innerHTML = "Backers = " + backers;
        //   document.getElementById('data-zone6').innerHTML = "Pledged = " + pledged;
        // });
        //
        // //Project 4
        // $.ajax({
        //   url: "https://www.kickstarter.com/projects/1421716661/sun-spots-a-print-portfolio/stats.json?v=1",
        //   context: document.body
        // }).done(function(result) {
        //   var backers = result.project.backers_count;
        //   var pledged = result.project.pledged;
        //   var time = result.project.state_changed_at;
        //   //console.log(", Sun Spots, ", "Backers = " + backers + ", ", "Pledged = " + pledged + ",");
        //   document.getElementById('data-zone3').innerHTML = "Backers = " + backers;
        //   document.getElementById('data-zone4').innerHTML = "Pledged = " + pledged;
        // });
        //
        // //Project 5
        // $.ajax({
        //   url: "https://www.kickstarter.com/projects/1421716661/sun-spots-a-print-portfolio/stats.json?v=1",
        //   context: document.body
        // }).done(function(result) {
        //   var backers = result.project.backers_count;
        //   var pledged = result.project.pledged;
        //   var time = result.project.state_changed_at;
        //   //console.log(", Sun Spots, ", "Backers = " + backers + ", ", "Pledged = " + pledged + ",");
        //   document.getElementById('data-zone3').innerHTML = "Backers = " + backers;
        //   document.getElementById('data-zone4').innerHTML = "Pledged = " + pledged;
        // });
        //
        // //Project 6
        // $.ajax({
        //   url: "https://www.kickstarter.com/projects/1421716661/sun-spots-a-print-portfolio/stats.json?v=1",
        //   context: document.body
        // }).done(function(result) {
        //   var backers = result.project.backers_count;
        //   var pledged = result.project.pledged;
        //   var time = result.project.state_changed_at;
        //   //console.log(", Sun Spots, ", "Backers = " + backers + ", ", "Pledged = " + pledged + ",");
        //   document.getElementById('data-zone3').innerHTML = "Backers = " + backers;
        //   document.getElementById('data-zone4').innerHTML = "Pledged = " + pledged;
        // });
      }, 1000) //10000 = 10s

    });
