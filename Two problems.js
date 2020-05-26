function prime_position(x){
    var k = 0;
    for(var i = 0; i <= 500000; i++){
        if(prime_num(i)==true){
          k += 1;
        }
        if(k==x){
            return i;
        }
    }
}

function prime_num(y){
 for (var i = y - 1; i>= 1; i--){
     if (y % i == 0 && i > 1){
         return false;
     }else if(y % i == 0 && i == 1){
         return true;
     }

    }
}


function sort_subtract(int){
    var str = int.toString();
    var y = "";
    var digit1 = -1;
    var digit2 = -1;
    var digit3 = -1;
    var digit4 = -1;
    var digit5 = -1;

    if(str.length==4){
        digit5="";
    }
    if(str.length=3){
        digit5="";
        digit4="";
    }
    if(str.length=2){
        digit5="";
        digit4="";
        digit3="";
    }
    if(str.length=1) {
        digit5="";
        digit4="";
        digit3="";
        digit2 = "";
    }

    if(str[0]==str[1] && str[1]==str[2] && str[2]==str[3]){
        digit4=str[0];
        digit3=str[0];
        digit2=str[0];
        digit1=str[0];
    }

    for(var i=0;i<=str.length;i++) {
        if (str[i] >= digit1) {
            digit1 = str[i];
        }
    }
    y += digit1;

    for(var i=0;i<=str.length;i++) {
        if (str[i] >= digit2 && str[i] <digit1) {
            digit2 = str[i];
            for(var j=i+1;j<=str.length;j++){
                if(str[j]==str[i]){
                    digit3 = str[i];
                }
            }
        }
    }
    y += digit2;

    for(var i=0;i<=str.length;i++) {
        if (str[i] >= digit3 && str[i] <digit2) {
            digit3 = str[i];
            for(var j=i+1;j<=str.length;j++){
                if(str[j]==str[i]){
                    digit4 = str[i];
                }
            }
        }
    }
    y += digit3;

    for(var i=0;i<=str.length;i++) {
        if (str[i] >= digit4 && str[i] <digit3) {
            digit4 = str[i];
            for(var j=i+1;j<=str.length;j++){
                if(str[j]==str[i]){
                    digit5 = str[i];
                }
            }
        }
    }
    y += digit4;

    for(var i=0;i<=str.length;i++) {
        if (str[i] >= digit5 && str[i] <digit4) {
            digit5 = str[i];
        }
    }
    y += digit5;

    var z = ""
    var digit6 = 10;
    var digit7 = 10;
    var digit8 = 10;
    var digit9 = 10;
    var digit10 = 10;

    if(str.length==4){
        digit10="";
    }
    if(str.length==3){
        digit10="";
        digit9="";
    }
    if(str.length==2){
        digit10="";
        digit9="";
        digit8="";
    }
    if(str.length==1) {
        digit10="";
        digit9="";
        digit8="";
        digit7="";
    }


    if(str[0]==str[1] && str[1]==str[2] && str[2]==str[3]){
        digit9=str[0];
        digit8=str[0];
        digit7=str[0];
        digit6=str[0];
    }


    for(var i=0;i<=str.length;i++) {
        if (str[i] <= digit6) {
            digit6 = str[i];
            for(var j=i+1;j<=str.length;j++){
                if(str[j]==str[i]){
                    digit7 = str[i];
                }
            }
        }
    }
    z += digit6;

    for(var i=0;i<=str.length;i++) {
        if (str[i] < digit7 && str[i] >digit6) {
            digit7 = str[i];
            for(var j=i+1;j<=str.length;j++){
                if(str[j]==str[i]){
                    digit8 = str[i];
                }
            }
        }
    }
    z += digit7;

    for(var i=0;i<=str.length;i++) {
        if (str[i] < digit8 && str[i] >digit7) {
            digit8 = str[i];
            for(var j=i+1;j<=str.length;j++){
                if(str[j]==str[i]){
                    digit9 = str[i];
                }
            }
        }
    }
    z += digit8;

    for(var i=0;i<=str.length;i++) {
        if (str[i] < digit9 && str[i] >digit8) {
            digit9 = str[i];
            for(var j=i+1;j<=str.length;j++){
                if(str[j]==str[i]){
                    digit10 = str[i];
                }
            }
        }
    }
    z += digit9;

    for(var i=0;i<=str.length;i++) {
        if (str[i] < digit10 && str[i] >digit9) {
            digit10 = str[i];
        }
    }
    z += digit10;

    return y-z;


}


