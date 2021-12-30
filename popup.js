// should display cat facts
document.getElementById('get-facts').addEventListener('click', async (e) => {
  const facts = document.getElementById('cat-facts')
  const factCount = 5
  const factList = await getFacts(factCount)
  console.log(factList)

  for (let i = 0; i < factCount; i++) {

  }

})


async function getFacts(factCount) {
  const res = await fetch(`https://cat-fact.herokuapp.com/facts?amount=${factCount}`)
  const json = await res.json()

  return json
}

// should slide down on x double click

// should not display again if user clicks x twice or more