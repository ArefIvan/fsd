let data = {
    size: 230,
    stroke: 20,
    dash: 3,
    sectors: [
        {
            percentage: 0.45,
            label: 'Thing 1',
            color:"#61C0BF"
        },
        {
            percentage: 0.21,
            label: "Thing Two",
            color:  "#DA507A"
        },
        {
            percentage: 0.11,
            label: "Another Thing",
            color: "#BB3D49"
        },
        {
            percentage: 0.23,
            label: "Pineapple",
            color: "#DB4547"
        }
    ]
}
function calculateDash(data){
    let r = (data.size/2)-data.stroke;//радиус
    let l = Math.PI*r*2;//длина окружности
    return dash=data.dash/l
}
console.log(calculateDash(data))
function calculateSectors( data ) {
    let sectors = [];
    let center = data.size / 2 //center   
    let stroke = data.stroke //stroke
    let l = (data.size/2)-stroke //large
    let a = 0 // Angle
    let aRad = 0 // Angle in Rad
    let z = 0 // Size z
    let x = 0 // Side x
    let y = 0 // Side y
    let X = 0 // SVG X coordinate
    let Y = 0 // SVG Y coordinate
    let R = 0 // Rotation
    let aR = 0
    console.log(calculateDash(data))
    let dash=calculateDash(data)
    console.log(dash)

    data.sectors.map( function(item, key ) {
        a = 360 * (item.percentage - dash);
        aR= 360 * item.percentage;

        aCalc = ( a > 180 ) ? 360 - a : a;
        aRad = aCalc * Math.PI / 180;
        z = Math.sqrt( 2*l*l - ( 2*l*l*Math.cos(aRad) ) );
        if( aCalc <= 90 ) {
            x = l*Math.sin(aRad);
        }
        else {
            x = l*Math.sin((180 - aCalc) * Math.PI/180 );
        }
        
        y = Math.sqrt( z*z - x*x );
        Y = y + stroke;

        if( a <= 180 ) {
            X = center + x;
            arcSweep = 0;
        }
        else {
            X = center - x;
            arcSweep = 1;
        }
        
        sectors.push({
            percentage: item.percentage,
            label: item.label,
            color: item.color,
            arcSweep: arcSweep,
            L: l,
            X: X,
            Y: Y,
            R: R,
            C:center,
            S:stroke
        });
        
        R = R + aR;
        
    })


    return sectors
}
sectors = calculateSectors(data);
let diagram = document.querySelector(".pie-chart__diagram")
let newSVG = document.createElementNS( "http://www.w3.org/2000/svg","svg" );
diagram.appendChild(newSVG)


newSVG.setAttributeNS(null, 'style', "width: "+data.size+"px; height: " + data.size+ "px");
sectors.map( function(sector) {

    var newSector = document.createElementNS( "http://www.w3.org/2000/svg","path" );
    newSector.setAttributeNS(null, 'fill', "none");
    newSector.setAttributeNS(null, 'stroke', sector.color);
    newSector.setAttributeNS(null, 'stroke-width', sector.S);
    newSector.setAttributeNS(null, 'd', 'M' + sector.C + ',' + sector.S + ',A' + sector.L + ',' + sector.L + ' 1 0,1 ' + sector.X + ', ' + sector.Y );
    newSector.setAttributeNS(null, 'transform', 'rotate(' + sector.R + ', '+ sector.C+', '+ sector.C+')');

    newSVG.appendChild(newSector);
})
// var midCircle = document.createElementNS( "http://www.w3.org/2000/svg","circle" );
// midCircle.setAttributeNS(null, 'cx', data.size * 0.5 );
// midCircle.setAttributeNS(null, 'cy', data.size * 0.5);
// midCircle.setAttributeNS(null, 'r', data.size * 0.4 );
// midCircle.setAttributeNS(null, 'fill', '#ffffff' );

// newSVG.appendChild(midCircle);