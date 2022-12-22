let counter = 0
let num = Math.floor(Math.random() * 100)
document.getElementById("enterNumber").innerHTML = "1. tahmini girin"
console.log(num)
const handleSubmit = (event) => {
  do {
    event.preventDefault()
    document.getElementById("enterNumber").innerHTML = `${
      counter + 1
    }. tahmini girin`
    let guessNumber = document.getElementById("guessNumber").value
    if (guessNumber > num) {
      document.getElementById("guessHelper").innerHTML =
        "Daha kucuk bir sayi girin"
    } else if (guessNumber < num) {
      document.getElementById("guessHelper").innerHTML =
        "Daha buyuk bir sayi girin"
    } else {
      document.getElementById("guessHelper").innerHTML = "Tebrikler"
      document.getElementById(
        "counterResult"
      ).innerHTML = `Sayi ${counter} denemede bulundu`
      break
    }
    counter++

    if (counter == 7) {
      document.getElementById("counterResult").innerHTML =
        "Uzgunum baska hakkiniz kalmadi"
      break
    }
  } while (counter == 7 || guessNumber == num)
  console.log(counter)
}
