class DOMNodeCollection{
    constructor(node){
        this.node = node;
    }

    empty(){
        this.html('');
    }

    remove(){

    }   

    attr(){
        if (typeof val === "string") {
            this.each(node => node.setAttribute(key, val));
          } else {
            return this.nodes[0].getAttribute(key);
        }
    }

    addClass(){

    }

    removeClass(){

    }

    html(str){
        if (typeof html === "string") {
            this.each((node) => {
                node.innerHTML = html;
            });
        } else if (this.nodes.length > 0) {
            return this.nodes[0].innerHTML;
        }
    }

    find(){

    }
    children() {
        let childNodes = [];
        this.each((node) => {
          const childNodeList = node.children;
          childNodes = childNodes.concat(Array.from(childNodeList));
        });
        return new DomNodeCollection(childNodes);
    }
    
    parent() {
        const parentNodes = [];
        this.each(({ parentNode }) => {
            
            if (!parentNode.visited) {
            parentNodes.push(parentNode);
            parentNode.visited = true;
            }
        });
    }

    append(children) {
        if (this.nodes.length === 0) return;
    
        if (typeof children === 'object' &&
            !(children instanceof DomNodeCollection)) {
          children = $l(children);
        }
    
        if (typeof children === "string") {
          this.each((node) => {
            node.innerHTML += children;
          });
        } else if (children instanceof DomNodeCollection) {
          this.each((node) => {
            children.each((childNode) => {
              node.appendChild(childNode.cloneNode(true));
            });
          });
        }
      }
}

module.exports