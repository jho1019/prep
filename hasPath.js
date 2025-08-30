const hasPathBFS = (graph, src, dest) => {
    const queue = [src];
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);
        if(current === dest) return true;

        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false;
}

const hasPathDFSIterative = (graph, src, dest) => {
    const stack = [src];

    while(stack.length > 0){
       const current = stack.pop();
       if (current === dest) { return true }

       for(let neighbor of graph[current]){
           stack.push(neighbor);
       }
    }

    return false;
}

const hasPathDFSRecursive = (graph, src, dest) => {
    if (src === dest) return true;

    for(let neighbor of graph[src]){
        if(hasPathDFSRecursive(graph, neighbor, dest) === true) return true
    }

    return false;
}

const graph = {
    f: ['g','i'],
    g: ['h'] ,
    h: [],
    i: ['k'],
    j: ['i'],
    k: []
}

const result = hasPathDFSRecursive(graph, 'f', 'h');
console.log(result);


