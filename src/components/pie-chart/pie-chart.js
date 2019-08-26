let data = {
    size: 120,
    stroke: 5,
    dash: 3,
    sectors: [
        {
            percentage: 0.25,
            votes:130,
            label: 'good',
            color1:"#BC9CFF",
            color2:"#8BA4F9"
        },
        {
            percentage: 0.25,
            votes:120,
            label: "indifferently",
            color1:  "#6FCF97",
            color2: "#66D2EA"
        },
        {
            percentage: 0.50,
            votes:260,
            label: "very_good",
            color1: "#FFE39C",
            color2:"#FFBA9C"
        },
        {
            percentage: 0,
            label: "bad",
            color: "#919191",
            color2: "#3D4975"
        },
    ]
}



function getPie(el,data){
sectors = calculateSectors(data,data.stroke);
sectorsFocus=calculateSectors(data,(data.stroke*2))
let pieChart = document.querySelector(el);
if(!pieChart){return}
let diagram = pieChart.querySelector(".pie-chart__diagram");
let votes = pieChart.querySelector(".pie-chart__votes");
let votesNum = votes.querySelector(".pie-chart__votes__num")

let newSVG = document.createElementNS( "http://www.w3.org/2000/svg","svg" );
newSVG.setAttributeNS(null, 'style', "width: "+data.size+"px; height: " + data.size+ "px");
let newDefs = document.createElementNS( "http://www.w3.org/2000/svg","defs" )
data.sectors.map(function(sector){
    let linearGradient = document.createElementNS( "http://www.w3.org/2000/svg","linearGradient" );
    linearGradient.setAttributeNS(null,"id",sector.label)
    let stop = document.createElementNS( "http://www.w3.org/2000/svg","stop" );
    let stop1 = document.createElementNS( "http://www.w3.org/2000/svg","stop" );
    stop.setAttributeNS(null,"offset","0%")
    stop.setAttributeNS(null,"style","stop-color:"+sector.color1)
    stop1.setAttributeNS(null,"offset","100%")
    stop1.setAttributeNS(null,"style","stop-color:"+sector.color2)
    linearGradient.appendChild(stop)
    linearGradient.appendChild(stop1)
    newDefs.appendChild(linearGradient)
})
newSVG.appendChild(newDefs);

sectors.map( function(sector) {

    var newSector = document.createElementNS( "http://www.w3.org/2000/svg","path" );
    newSector.setAttributeNS(null, 'fill', "url(#"+sector.label+")");
    newSector.setAttributeNS(null, 'd', 'M' + sector.C + ',' + sector.S + ' L' + sector.C + ',0 A' + sector.L + ',' + sector.L + ' 1 0,1 ' + sector.X + ', ' + sector.Y + ' L' + sector.X1 +", " + sector.Y1 + " A"+ sector.L1+","+sector.L1+" 1 0 0 "+sector.C+","+sector.S);
    newSector.setAttributeNS(null, 'transform', 'rotate(' + sector.R + ', '+ sector.L+', '+ sector.L+')');

    newSVG.appendChild(newSector);
})


sectorsFocus.map( function(sector) {

    var newSector = document.createElementNS( "http://www.w3.org/2000/svg","path" );
    newSector.setAttributeNS(null, 'fill', "url(#"+sector.label+")");
    newSector.setAttributeNS(null, 'fill-opacity', "0");
    newSector.setAttributeNS(null, 'd', 'M' + sector.C + ',' + sector.S + ' L' + sector.C + ',0 A' + sector.L + ',' + sector.L + ' 1 0,1 ' + sector.X + ', ' + sector.Y + ' L' + sector.X1 +", " + sector.Y1 + " A"+ sector.L1+","+sector.L1+" 1 0 0 "+sector.C+","+sector.S);
    newSector.setAttributeNS(null, 'transform', 'rotate(' + sector.R + ', '+ sector.L+', '+ sector.L+')');

    newSVG.appendChild(newSector);
})
diagram.appendChild(newSVG)

let sectorsEl = newSVG.querySelectorAll("path")
sectorsEl.forEach(element => {
    let styles=getComputedStyle(element)
    let fillOpacity = parseInt(styles.fillOpacity)
    let id
    let votesInt
    
    element.addEventListener("mouseover",()=>{
        id = styles.fill.split("\"")[1].split("\#")[1];
        data.sectors.forEach((item)=>{
            if(id==item.label){
                votesInt=item.votes
            }
        })  
        votesNum.innerHTML=votesInt
        votes.classList.add("pie-chart__votes--"+id)
        element.style.fillOpacity="1"
       
    })
    element.addEventListener("mouseleave",(e)=>{
        votesNum.innerHTML="";
        element.style.fillOpacity=fillOpacity
        votes.classList.remove("pie-chart__votes--"+id)
    })
    
});
function calculateDash(size,padSect){
    return  padSect/(Math.PI*size)
}
function calculateSectors( data,pad ) {
    let sectors = [];
    let center = data.size / 2 //center   
    // let pad = data.stroke //stroke
    let l = center //large
    let l1 = (data.size/2)-pad
    let a = 0 // Angle
    let aRad = 0 // Angle in Rad
    let z = 0 // Size z
    let x = 0 // Side x
    let y = 0 // Side y

    let z1 = 0 // Size z
    let x2 = 0 // Side x
    let y3 = 0 // Side y

    let X = 0 // SVG X coordinate
    let Y = 0 // SVG Y coordinate

    let X1 = 0 // SVG X coordinate
    let Y2 = 0 // SVG Y coordinate


    let R = 0 // Rotation
    let aR = 0
    
    let dash=calculateDash(data.size,data.dash)
    

    data.sectors.map( function(item, key ) {
        a =(item.percentage)?360 * (item.percentage - dash):0;
        aR= 360 * item.percentage;

        aCalc = ( a > 180 ) ? 360 - a : a;
        aRad = aCalc * Math.PI / 180;
        z = Math.sqrt( 2*l*l - ( 2*l*l*Math.cos(aRad) ) );
        z1 = Math.sqrt( 2*l1*l1 - ( 2*l1*l1*Math.cos(aRad) ) );
        if( aCalc <= 90 ) {
            x = l*Math.sin(aRad);
            x1 = l1*Math.sin(aRad);
        }
        else {
            x = l*Math.sin((180 - aCalc) * Math.PI/180 );
            x1 = l1*Math.sin((180 - aCalc) * Math.PI/180 );
        }
        
        y = Math.sqrt( z*z - x*x );
        y1 = Math.sqrt( z1*z1 - x1*x1 );
        Y = y;
        Y1 = y1+pad;

        if( a <= 180 ) {
            X = center + x;
            X1 = center + x1;
            arcSweep = 0;
        }
        else {
            X = center - x;
            X1 = center - x1;
            arcSweep = 1;
        }
        
        sectors.push({
            percentage: item.percentage,
            label: item.label,
            color1: item.color1,
            color2: item.color2,
            arcSweep: arcSweep,
            L: l,
            L1:l1,
            X: X,
            X1: X1,
            Y: Y,
            Y1: Y1,
            R: R,
            C:center,
            S:pad,

        });
        
        R = R + aR;
        
    })


    return sectors
}
}

getPie(".pie-chart",data)