{
  class Node {
    constructor(value = null) {
      this.value = value;
      this.next = undefined;
    }
  }

  class StackByLinkedList {
    constructor() {
      this.header = new Node();
      this.count = 0;
    }

    isEmpty() {
      if (this.count === 0) {
        console.log("빈 스택 입니다.")
        return true;
      }
    }

    push(value) {
      //새로운 노드 추가 -> 새로운 노드 포인터 기존 헤더 가리킴 -> stack의 헤더 추가된 노드로 변경해줌
      const newNode = new Node(value);
      newNode.next = this.header;
      this.header = newNode;
      ++this.count;
    }

    pop() {
      if (this.isEmpty()) {
        return
      }
      const endValue = this.header.value;
      this.header = this.header.next;
      --this.count;
      return endValue;
    }

    peek() {
      if (this.isEmpty()) {
        return 
      }
      return this.header.value;
    }
  }
  const testStack = new StackByLinkedList();
  testStack.push(3)
  testStack.push(2)
  testStack.push(1)
  testStack.push(0)
  testStack.pop();
  testStack.pop();
  testStack.pop();
  testStack.pop();
  testStack.pop();
  testStack.pop();
  console.log(testStack.peek());

}
