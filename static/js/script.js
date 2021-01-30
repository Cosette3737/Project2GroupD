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
    var bio = topData.map(drivers =>drivers[6]);

    var rank = [1,2,3,4,5]
    
    
        //console.log(Textout4); 
        document.getElementById("sample_metadata0").innerHTML += '<img width="250" height="250" src="static/images/id0.jpg">';
        document.getElementById("sample_metadata1").innerHTML += '<img width="250" height="250" src="static/images/id1.JPG">';
        document.getElementById("sample_metadata2").innerHTML += '<img width="250" height="250" src="static/images/id2.JPG">';
        document.getElementById("sample_metadata3").innerHTML += '<img width="250" height="250" src="static/images/id3.jpg">';
        document.getElementById("sample_metadata4").innerHTML += '<img width= "250" height="250"src="static/images/id4.JPG">';
        
        document.getElementById("sample_metadata0").innerHTML += ` ${firstname[0]}  ${lastname[0]}\
                         <br>Rank: ${rank[0]}\
                         <br>Wins: ${wins[0]}\
                        <br>Nationality: ${nationality[0]} \
                         `
        document.getElementById("sample_metadata1").innerHTML += ` ${firstname[1]}  ${lastname[1]}\
                         <br>Rank: ${rank[1]}\
                         <br>Wins: ${wins[1]}\
                        <br>Nationality: ${nationality[1]} \
                         `
        document.getElementById("sample_metadata2").innerHTML += ` ${firstname[2]}  ${lastname[2]}\n
                         <br>Rank: ${rank[2]}\
                         <br>Wins: ${wins[2]}\
                        <br>Nationality: ${nationality[2]} \
                         `
        document.getElementById("sample_metadata3").innerHTML += ` ${firstname[3]}  ${lastname[3]}\n
                         <br>Rank: ${rank[3]}\
                         <br>Wins: ${wins[3]}\
                        <br>Nationality: ${nationality[3]} \
                         `
        document.getElementById("sample_metadata4").innerHTML += ` ${firstname[4]}  ${lastname[4]}\n
                         <br>Rank: ${rank[4]}\
                         <br>Wins: ${wins[4]}\
                        <br>Nationality: ${nationality[4]} \
                         `
                                                     
        

        
        document.getElementById("sample_metadata0").style.visibility='hidden'
        document.getElementById("sample_metadata1").style.visibility='hidden'
        document.getElementById("sample_metadata2").style.visibility='hidden'
        document.getElementById("sample_metadata3").style.visibility='hidden'
        document.getElementById("sample_metadata4").style.visibility='hidden';
        
    console.log(sample_metadata4);
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
        .attr("width", svgWidth)

 // shift everything over by the margins
    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
        
        
    svg.append('text')
        .attr('x', 330)
        .attr('y', 295)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .text('Number of races Won')
    
    svg.append('text')
        .attr('x', 400)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        


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
        });
  
    function clickHandler() {
        clickvalue = (d3.select(this)._groups[0][0].__data__);
        console.log(clickvalue);
        if (clickvalue == 95) {
            document.getElementById("sample_metadata0").style.visibility='visible';
            document.getElementById("sample_metadata1").style.visibility='hidden';
            document.getElementById("sample_metadata2").style.visibility='hidden';
            document.getElementById("sample_metadata3").style.visibility='hidden';
            document.getElementById("sample_metadata4").style.visibility='hidden';
        } else if  (clickvalue == 91) {
            document.getElementById("sample_metadata1").style.visibility='visible';
            document.getElementById("sample_metadata0").style.visibility='hidden';
            document.getElementById("sample_metadata2").style.visibility='hidden';
            document.getElementById("sample_metadata3").style.visibility='hidden';
            document.getElementById("sample_metadata4").style.visibility='hidden';
        } else if (clickvalue == 53) {
            document.getElementById("sample_metadata2").style.visibility='visible';
            document.getElementById("sample_metadata1").style.visibility='hidden';
            document.getElementById("sample_metadata0").style.visibility='hidden';
            document.getElementById("sample_metadata3").style.visibility='hidden';
            document.getElementById("sample_metadata4").style.visibility='hidden';
        } else if (clickvalue == 51) {
            document.getElementById("sample_metadata3").style.visibility='visible';
            document.getElementById("sample_metadata1").style.visibility='hidden';
            document.getElementById("sample_metadata2").style.visibility='hidden';
            document.getElementById("sample_metadata0").style.visibility='hidden';
            document.getElementById("sample_metadata4").style.visibility='hidden';
        } else {
            document.getElementById("sample_metadata4").style.visibility='visible';
            document.getElementById("sample_metadata1").style.visibility='hidden';
            document.getElementById("sample_metadata2").style.visibility='hidden';
            document.getElementById("sample_metadata3").style.visibility='hidden';
            document.getElementById("sample_metadata0").style.visibility='hidden';
            } 
      }; }