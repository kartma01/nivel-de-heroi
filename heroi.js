let heroiXP = [["Joao", 845],["lucas", 1300],
["evellyn", 4440],["jardiel", 6401],["maria", 7002],
["kimbellyn", 8456],["jose", 9874],["marcos", 10001]]

for (let i = 0; i < heroiXP.length; i++) {
    if (heroiXP[i][1] < 1000){ //ferro
        console.log("O Herói de nome " + [heroiXP[i][0]] + " está no nível  Ferro")
     } else if(heroiXP[i][1] >= 1001 && heroiXP[i][1] <= 2000 ) { //bronze
        console.log("O Herói de nome " + [heroiXP[i][0]] + " esta no nível Bronze")
    } else if(heroiXP[i][1] >= 2001 && heroiXP[i][1] <= 5000) { //patra
        console.log("O Herói de nome " + [heroiXP[i][0]] + " esta no nível Prata")
    } else if(heroiXP[i][1] >= 6001 && heroiXP[i][1] <= 7000){//Ouro
        console.log("O Herói de nome " + [heroiXP[i][0]] + " esta no nível Ouro")
    }else if(heroiXP[i][1] >= 7001 && heroiXP[i][1] <= 8000){//Platina
        console.log("O Herói de nome " + [heroiXP[i][0]] + " esta no nível Platina")
    }else if (heroiXP[i][1] >= 8001 && heroiXP[i][1] <= 10000) {//Imortal
        console.log("O Herói de nome " + [heroiXP[i][0]] + " esta no nível Ascendente")
    } else { //Imortal
        console.log("O Herói de nome " + [heroiXP[i][0]] + " esta no nível Imortal")
    }
}


