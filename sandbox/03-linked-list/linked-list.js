
//outputExample = "a -> b -> c"

class Node {
	
	constructor(value){
	 this.value=value;
	 this.next=null;
	}
}

class LinkedList{
	constructor(){
	 this.head=null;
	 this.tail=null;
	}
	
	
	append(value){		
		const newNode = new Node(value)
		
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
		}else{
			this.tail.next = newNode;
			this.tail = newNode
		}
	}
	
	
	prepend(value){
		const newNode = new Node(value)	
		
		newNode.next = this.head;
		this.head = newNode;
		
		if(!this.tail){
			this.tal = newNode;
		}
	}
	
	delete(value){
	/* 
		0 -> 3 -> 7 -> 9 -> 4
			delete(9)
		0 -> 3 -> 7 -> 4
	*/
		if(!this.head){
			return
		}
		
		if(this.head.value === value){
			this.head = this.head.next;
			if(!this.head){
				this.tail = null;
			}
			return;
		}
		
		// begin to test each item from the head of the list (this.head) to test value
		let currentNode = this.head;
		
		
		// while the currentNode (which is the head) has a "next" sibling the code below will run
		while(currentNode.next){
		
			// if the next sibling value to the current node is equal to the testing value to be deleted
			if(currentNode.next.value === value){
			
				// set the next sibling to the current node to be the next of the next sibling to the current node. Note, we are not sure if the next sibling to the next sibling exist (meaning it might be null)
				currentNode.next = currentNode.next.next;
				
				// if the next sibling to the current node happens to be null from above, the set the tail o the list to be the current node;
				if(!currentNode.next){
					this.tail = currentNode;
				}
				return
			}
			
			// the current node is now the next node.
			currentNode = currentNode.next;
		}
		
		
	}
	
	
	
	display(){
		const elements= [];
		let currentNode = this.head;
		while(currentNode){
			elements.push(currentNode.value);
			currentNode = currentNode.next;
		}
		
		console.log(elements.join(" -> "))
	}
}


const linkedList = new LinkedList();
linkedList.append(3);
linkedList.append(7);
linkedList.append(9);
linkedList.append(4);
linkedList.prepend(0);
linkedList.display();
linkedList.delete(9);
linkedList.delete(4);
linkedList.delete(3);
linkedList.display();