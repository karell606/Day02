let hamsandwich = 0 
let tunasandwich = 0
let vegetariansandwich = 0 

while (breadCount >= 2 && hamCount >= 1) {
hamsandwich += 1
breadCount -= 2
hamCount -= 1 
}

while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2 ) {
tunasandwich += 1
breadCount -= 2
tunaCount -= 1
saladCount -= 2
}

while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2 ) {
vegetariansandwich += 1
breadCount -= 2
saladCount -= 1
tomatoCount -= 2
} 
 
displayThisText("Number of ham sandwich(es):" + hamsandwich)
displayThisText("Number of tuna sandwich(es):" + tunasandwich)
displayThisText("Number of vegetarian sandwich(es):" + vegetariansandwich)
displayIngredients()
