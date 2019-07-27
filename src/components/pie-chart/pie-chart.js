let data = {
    size: 230,
    sectors: [
        {
            percentage: 0.45,
            label: 'Thing 1'
        },
        {
            percentage: 0.21,
            label: "Thing Two"
        },
        {
            percentage: 0.11,
            label: "Another Thing"
        },
        {
            percentage: 0.23,
            label: "Pineapple"
        }
    ]
}
function calculateSectors( data ) {
    let sectors = [];
    let colors = [
        "#61C0BF", "#DA507A", "#BB3D49", "#DB4547"
    ];

    let center = data.size / 2 //center
    let l = (data.size/2)-4 //large
    let stroke = 4 //stroke
    let a = 0 // Angle
    let aRad = 0 // Angle in Rad
    let z = 0 // Size z
    let x = 0 // Side x
    let y = 0 // Side y
    let X = 0 // SVG X coordinate
    let Y = 0 // SVG Y coordinate
    let R = 0 // Rotation

    data.sectors.map( function(item, key ) {
        a = 360 * item.percentage;
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
        Y = y + 4;

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
            color: colors[key],
            arcSweep: arcSweep,
            L: l,
            X: X,
            Y: Y,
            R: R,
            C:center
        });

        R = R + a;
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
    newSector.setAttributeNS(null, 'fill', sector.color);
    newSector.setAttributeNS(null, 'd', 'M' + sector.C + ',' + sector.C + ' L' + sector.C + ',4 A' + sector.L + ',' + sector.L + ' 1 0,1 ' + sector.X + ', ' + sector.Y + ' z');
    newSector.setAttributeNS(null, 'transform', 'rotate(' + sector.R + ', '+ sector.C+', '+ sector.C+')');

    newSVG.appendChild(newSector);
})
// var midCircle = document.createElementNS( "http://www.w3.org/2000/svg","circle" );
// midCircle.setAttributeNS(null, 'cx', data.size * 0.5 );
// midCircle.setAttributeNS(null, 'cy', data.size * 0.5);
// midCircle.setAttributeNS(null, 'r', data.size * 0.4 );
// midCircle.setAttributeNS(null, 'fill', '#ffffff' );

newSVG.appendChild(midCircle);