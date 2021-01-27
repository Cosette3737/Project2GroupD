fetch('/top5_data')
      .then(function (response) {
          return response.json();
      }).then(function (data) {
          //console.log('GET response:');
          let topData = data;
          // send data to the createMap function
          createBar(topData);
      });

 function createBar(topData) {
    console.log(topData)
    var wins = topData.map(drivers =>drivers[0]);
    var firstname = topData.map(drivers =>drivers[1]);
    var lastname = topData.map(drivers =>drivers[2]);
    var nationality = topData.map(drivers =>drivers[3]);
    var birthday = topData.map(drivers =>drivers[4]);
    var number = topData.map(drivers =>drivers[5]);
    var bio = topData.map(drivers =>drivers[6]);
    //var wins = [95, 91, 53, 51, 41];
    var rank = [1,2,3,4,5]
    // var flags = ['http://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg', 
    //             'http://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
    //             'http://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
    //             'http://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
    //             'http://upload.wikimedia.org/wikipedia/commons/O/05/Flag_of_Brazil.svg'];
    console.log( wins, rank,nationality, birthday, number, bio);
    var svgArea = d3.select("body").select("svg");
     if (!svgArea.empty()) {
      svgArea.remove();
  }

 // svg params
    var svgHeight = 800;
    var svgWidth = 100;

  // margins
    var margin = {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    };

 // chart area minus margins
    var chartHeight = svgHeight - margin.top - margin.bottom;
    var chartWidth = svgWidth - margin.left - margin.right;

 // create svg container
    var svg = d3.select("body").append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth);
 // shift everything over by the margins
    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
        //.attr("rotate", 90);
 // scale y to chart height
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(wins)])
        .range([chartHeight, 0]);

 // scale x to chart width
     var xScale = d3.scaleBand()
        .domain(lastname)
        .range([0, chartWidth])
        .padding(0.1);

 // create axes
    var yAxis = d3.axisLeft(yScale);
    var xAxis = d3.axisBottom(xScale);

 // set x to the bottom of the chart
    chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(xAxis);
        
 // set y to the y axis
    chartGroup.append("g")
        .call(yAxis);
    console.log(yScale);

    chartGroup.selectAll("rect")
        .data(wins)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(lastname[i]))
        .attr("y", d => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", d => chartHeight - yScale(d))
        .attr("fill", "white")
        .on("click", clickHandler)
             // event listener for mouseover
        .on("mouseover", function() {
           d3.select(this)
                .attr("fill", "red")
                .transition()
                .duration(500)
         })
        // event listener for mouseout
        .on("mouseout", function() {
           d3.select(this)
                 .attr("fill", "black")
                 .transition()
                .duration(500)
        });

//createBar();
    function clickHandler() {
      console.log(firstname);
        var Textout = ("Driver:");
        //               ("Rank:" + (rank))
        //              ("Wins:" + (wins))
        //               ("Nationality:" + (nationality)) 
        //              ("Birthday:" + (birthday))
        //              ("Driver Bio:" + (bio)) 
        var demo_meta = d3.select("#sample-metadata")
        demo_meta.html("");
        demo_meta.append("p").text(Textout);
        console.log(demo_meta);
        demo_meta.append("img")
          .attr("src","http://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg")
          .attr("width", 250)
          .attr("height", 250)
  }
 };
