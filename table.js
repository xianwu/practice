const allComponents = [
    {name: '1a',weight: 0.05,description: '1a: Demonstrating knowledge of content and pedagogy'},
    {name: '1e',weight: 0.05,description: '1e: Designing coherent instruction'},
    {name: '2a',weight: 0.17,description: '2a: Creating an environment of respect and rapport'},
    {name: '2d',weight: 0.17,description: '2d: Managing student behavior'},
    {name: '3b',weight: 0.17,description: '3b: Using questioning and discussion techniques'},
    {name: '3c',weight: 0.17,description: '3c: Engaging students in learning'},
    {name: '3d',weight: 0.17,description: '3d: Using assessment in instruction'},
    {name: '4e',weight: 0.05,description: '4e: Growing and developing professionally'}, 
  ];
  
  const markup = `
      ${allComponents.map( component => {
        return `
        <tr>
          <td>${component.name}</td>
          <td>${component.weight}</td>
          <td>${component.description}</td>
        </tr>
        `
      }).join('')}
  `

  // grab element from index.html
const domElement = document.querySelector('.data')

domElement.innerHTML = markup