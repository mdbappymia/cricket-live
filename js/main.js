const BASE_URL = `https://cricket-api.vercel.app/cri.php?url=`
const matchUrl = `https://www.cricbuzz.com/live-cricket-scores/37842/ban-vs-nz-1st-t20i-new-zealand-tour-of-bangladesh-2021`

setInterval(function () {
    fetch(`${BASE_URL}${matchUrl}`)
        .then(res => res.json())
        .then(data => showScore(data))

    const showScore = (data) => {
        document.getElementById('score').innerHTML = `
        ${new Date()}
        <h1>${data.livescore.current}<h1>`
        // console.log(data.livescore.current)
    }
}, 1000)