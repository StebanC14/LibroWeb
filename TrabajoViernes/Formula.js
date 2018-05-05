//JavaScript
function res() {
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    var disc=0;     
    var x1=0;
    var x2=0;
    
    x1 = parseFloat(x1);
    x2 = parseFloat(x2);
    
    d=b*b-4*a*c;
    if(d==0){
        alert("No existen soluciones reales");
    }
    else
        d=b*b-4*a*c;
        x1=(-b+Math.sqrt(d))/(2*a);
        x2=(-b-Math.sqrt(d))/(2*a);
    
        x1=document.getElementById("x1").value=x1;
        x2=document.getElementById("x2").value=x2;
}

/*function res(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    var disc=0;     
    var x1=0;
    var x2=0;
    
    x1 = parseFloat(x1);
    x2 = parseFloat(x2);
    
    d=b*b-4*a*c;
    if(d==0){
        alert("No existen soluciones reales");
    }
    else
        d=b*b-4*a*c;
        x1=(-b+Math.sqrt(d))/(2*a);
        x2=(-b-Math.sqrt(d))/(2*a);
    
        x1=document.getElementById("X1").value=x1;
        x2=document.getElementById("X2").value=x2;
    
}
*/