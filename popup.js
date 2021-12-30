const popup = document.querySelector('.cat-popup')

// Get saved state from local storage so we dont display if the user
// previously double clicked the x
const shouldDisplay = localStorage.getItem('shouldDisplay') ? JSON.parse(localStorage.getItem('shouldDisplay')) : 'true';
console.log(shouldDisplay)

// wait 3 seconds before showing popup
setTimeout(() => {
  if (shouldDisplay === 'true') {
    popup.classList.add('showPopup')
  }
}, 3000)

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
const xButton = document.getElementById('close-popup')
// hide popup on click
xButton.addEventListener('click', e => hidePopup())
// permahide on doubleclick
xButton.addEventListener('dblclick', () => {
  hidePopup()
  // Save shouldDisplay as false so the user doesn't see popup again
  localStorage.setItem('shouldDisplay', JSON.stringify('false'));
});

function hidePopup() {
  popup.classList.remove('showPopup')
  popup.classList.add('hidePopup')
}