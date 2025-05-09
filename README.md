# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

---

Answer:

I don't think this algorithm has anything to do with edges. Regardless of how the graph's edges are setup, the algorithm is going to traverse the entirety of a $|V| \times |V|$ matrix to then create a corresponding list of lists. It's like seeing if an edge exists (complexity of $\Theta(1)$), but for all edges (becomes $\Theta(|V|^2)$)

The instantiation of the adjacency list and the push operations to it are all done in constant time, so the resulting complexity of this algorithm is quadratic in the number of vertices: $\Theta(|V|^2)$

---

**I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.**