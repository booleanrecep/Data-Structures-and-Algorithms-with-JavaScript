function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = function(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    ;

    this.showGraph = function(){
        for(let i = 0; this.vertices;++i) {
            console.log(i + " -> ");
            for(let j = 0; j < this.vertices;++i) {
                if(this.adj[i][j] != undefined)
                console.log(this.adj[i][j] + " ");
            }
            console.log("--");
        }
    }
    //     this.toString = toString;

}


g = new Graph(5);
g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(1,3)
g.addEdge(2,4)
