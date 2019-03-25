package com.revature;

public class LinkedList {
	
	private Node head;
	
	public LinkedList(Node node) {
		head = node;
	}
	
	// adding a node to the end of the list
	public void add(Node node) {
		Node temp = head;
		while(temp.next != null) {
			temp = temp.next;
		}
		temp.next = node;
	} 
    // return the list after delete a node otherwise return null
    public Node delete(Node node) 
    { 	
    	   if(head == null)
    		   return null;

    	   if( head.data.equals(node.data) )
    	   {
    	      head = head.next;
    	      return head;
    	   }

    	   Node cur  = head;
    	   Node prev = null;

    	   while(cur != null && !cur.data.equals(node.data) )
    	   {
    	      prev = cur;
    	      cur = cur.next;
    	   }

    	   if(cur == null)
    		   return null;

    	   prev.next = cur.next;
    	   return head;
    } 
    
    //return true if the data is exist otherwise return false
    public boolean search(String data) 
    { 
    	Node currNode = head;
        while (currNode != null) { 
            if(currNode.data.equals(data))
            	return true;
            currNode = currNode.next; 
        } 
        return false; 
    } 

    // print the list
    public void printList() 
    { 
        Node currNode = head;
  
        while (currNode != null) { 
            System.out.print(currNode.data + " "); 
            currNode = currNode.next; 
        } 
    } 

}
