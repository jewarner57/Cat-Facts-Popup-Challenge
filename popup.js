// should display cat facts
document.getElementById('get-facts').addEventListener('click', async (e) => {
  const facts_elem = document.getElementById('cat-facts')
  // remove existing cat facts
  facts_elem.innerHTML = ""

  const factCount = 5
  const factList = await getFacts(factCount)

  for (let fact of factList) {
    const child = document.createElement('p');
    child.innerHTML = fact.text
    facts_elem.appendChild(child)
  }

})

async function getFacts(factCount) {
  const res = await fetch(`https://cat-fact.herokuapp.com/facts/random?amount=${factCount}`)
  const json = await res.json()
  return json
}

// should slide down on x click

// should not display again if user clicks x twice or more