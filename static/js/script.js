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
    var bio = topData.map(drivers =>drivers[6]);
    var rank = [1,2,3,4,5]
    var Textout0 = (`Driver: ${firstname[0]}  ${lastname[0]} 
                    Rank: ${rank[0]}
                    Wins: ${wins[0]}
                    Nationality:${nationality[0]} 
                    Birthday:${birthday[0]}
                    Driver Bio:${bio[0]}`)
        console.log(Textout0); 

        var Textout1 = (`Driver: ${firstname[1]} ${lastname[1]} 
                         Rank: ${rank[1]}
                         Wins: ${wins[1]}
                         Nationality: ${nationality[1]} 
                         Birthday: ${birthday[1]}
                         Driver Bio: ${bio[1]}`)
        console.log(Textout1); 

        var Textout2 = (`Driver: ${firstname[2]} ${lastname[2]} 
                    Rank: ${rank[2]}
                    Wins: ${wins[2]}
                    Nationality: ${nationality[2]} 
                    Birthday: ${birthday[2]}
                    Driver Bio: ${bio[2]}`)
        console.log(Textout2); 

        var Textout3 = (`Driver: ${firstname[3]} ${lastname[3]} 
                    Rank: ${rank[3]}
                    Wins: ${wins[3]}
                    Nationality: ${nationality[3]} 
                    Birthday: ${birthday[3]}
                    Driver Bio: ${bio[3]}`)
        console.log(Textout3); 

        var Textout4 = (`Driver: ${firstname[4]} ${lastname[4]} 
                    Rank: ${rank[4]}
                    Wins: ${wins[4]}
                    Nationality: ${nationality[4]} 
                    Birthday: ${birthday[4]}
                    Driver Bio: ${bio[4]}`)
        console.log(Textout4); 
        
    
        var demo_meta0 = d3.select("#sample-metadata0")
        demo_meta0.html("");
        demo_meta0.append("p").text(Textout0);
        //console.log(demo_meta);
        demo_meta0.append("img")
            .attr("src","static/images/flag0.JPG")
            .attr("width", 250)
            .attr("height", 250)
        console.log(demo_meta0)
        var demo_meta1 = d3.select("#sample-metadata1")
        demo_meta1.html("");
        demo_meta1.append("p").text(Textout1);
                  //console.log(demo_meta1);
        demo_meta1.append("img")
            .attr("src","static/images/flag1.JPG")
            .attr("width", 250)
            .attr("height", 250)
        console.log(demo_meta1);
          
        var demo_meta2 = d3.select("#sample-metadata2")
        demo_meta2.html("");
        demo_meta2.append("p").text(Textout2);
                  //console.log(demo_meta2);
        demo_meta2.append("img")
            .attr("src","static/images/flag1.JPG")
            .attr("width", 250)
            .attr("height", 250)

        
        var demo_meta3 = d3.select("#sample-metadata3")
        demo_meta3.html("");
        demo_meta3.append("p").text(Textout3);
                  //console.log(demo_meta3);
        demo_meta3.append("img")
                .attr("src","static/images/flag3.JPG")
                .attr("width", 250)
                .attr("height", 250)
          
        var demo_meta4 = d3.select("#sample-metadata4")
            demo_meta4.html("");
            demo_meta4.append("p").text(Textout4);
                  //console.log(demo_meta);
            demo_meta4.append("img")
                .attr("src","static/images/flag4.JPG")
                .attr("width", 250)
                .attr("height", 250)
          
          

    //console.log( wins[1], rank[1],nationality[1], birthday[1], number[1], bio[1]);
    var svgArea = d3.select("body").select("svg");
     if (!svgArea.empty()) {
      svgArea.remove();
  }

 // svg params
    var svgHeight = 800;
    var svgWidth = 1000;

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
    //console.log(yScale);

    rect = chartGroup.selectAll("rect")
        .data(wins)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(lastname[i]))
        .attr("y", d => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", d => chartHeight - yScale(d))
        .attr("fill", "white")
        //.on("click", function() {
             //alert(`Hey! You clicked bar(lastname[1])`)})
        .on("click", clickHandler)
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
        })

//createBar();
    function clickHandler() {
         console.log(d3.select(this)._groups[0][0].__data__);
        fetch('/top5_data')
  
      };
    }         