const topoSort = (numEdges: number, edges: number[][]) => {
    // Step 1: initialize graph and indegree
    let graph: Map<number, number[]> = new Map();
    let indegree: number[] = new Array(numEdges).fill(0);

    // Step 2: populate graph and indegree  
    for(let [u,v] of edges){
      if(!graph.get(u)) graph.set(u, []);
      graph.get(u)!.push(v);
      indegree[v]++;
    }
  
    // Step 3: create and populate queue with INDEX of node with 0 deps
    let queue: number[] = [];
    for (let i = 0; i < numEdges; i++){
      if(indegree[i] === 0) queue.push(i);
    }
  
    // Step 4: process queue -- queue shift, push current to queue, update indegree, push to queue if indegree 0
    let result: number[] = [];
    while(queue.length > 0){
      let curr = queue.shift();
      result.push(curr!);
      for(let neighbor of graph.get(curr!) ?? []){
        indegree[neighbor]--;
        if(indegree[neighbor] === 0) queue.push(neighbor);
      }
    }
  
    return result.length != numEdges ? [] : result;
  }
  
  const numEdges: number = 14;
  const edges: number[][] = [
    [0,2],
    [0,6],
    [0,3],
    [1,4],
    [2,6],
    [3,1],
    [3,4],
    [4,5],
    [4,8],
    [6,7],
    [6,11],
    [7,4],
    [7,12],
    [9,2],
    [9,10],
    [10,6],
    [11,12],
    [12,8]
  ]
  
  console.log(topoSort(numEdges, edges));