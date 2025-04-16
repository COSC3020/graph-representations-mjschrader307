function convertToAdjList(adjMatrix) {
  // Empty matrix check
  if (adjMatrix.length === 0) return [];

  // Initialize list
  let adjList = [];
  let numVertices = adjMatrix.length;
  for (let k = 0; k < numVertices; k++) {
    adjList.push([]);
  }

  // Iterate over rows
  for (let j = 0; j < adjMatrix.length; j++) {
    let L = adjMatrix[j];

    // Iterate over edges (i, j)
    for (let i = 0; i < L.length; i++) {
      let matrixEntry = adjMatrix[j][i];
      if (matrixEntry == 1) {
        adjList[j].push(i);
      }
    }
  }

  return list;
}
