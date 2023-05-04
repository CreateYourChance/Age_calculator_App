function calculerAge (){
    const day = parseInt(document.getElementById('day').value)
    const month = parseInt(document.getElementById('month').value)
    const year = parseInt(document.getElementById('year').value)

    const now = new Date()
    const age = now.getFullYear - year
    const differenceMonth = now.getMonth() - month
    const differenceDay = now.getDate() - day
    let month_result = Math.abs(differenceMonth)
    let day_result = Math.abs(differenceDay)

    if (differenceMonth < 0 ){
        age--
    }

    if (differenceDay < 0){
        month_result--
    }

    

    document.getElementById('year-result').textContent = age
    document.getElementById('month-result').textContent = 12 - month_result
    document.getElementById('day-result').textContent = 30 - day_result



}