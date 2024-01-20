/**
 * 
 * @param {HTMLDivElement} element 
 */


export function setupCounter(element) {
  fetch('https://rickandmortyapi.com/api/character', { method: 'GET' })
    .then(response => response.json())
    .then(data => console.log(data));
}
