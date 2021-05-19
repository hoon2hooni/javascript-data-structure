// 스택 자료구조를 fixed array와 linked - list로 구현할 것입니다!
/*
stack이란 Last In First Out입니다.
즉 마지막에 들어온 데이터가 가장 먼저 나갑니다.

stack자료구조엔 push pop peak is_empty총 4가지의 methods를 구현하려 합니다.
push의 경우 stack자료구조 끝에 데이터를 추가해주는것 입니다.
pop의 경우 stack자료구조의 마지막 데이터값을 제거해주면서 그 값을 return 해줍니다.
peak의 경우 stack자료구조의 마지막 데이터를 알려줍니다 하지만 끝의 데이터를 제거하지 않는게 pop() 과의차이 입니다.
is_empty의 경우 stack자료구조에 데이터가 존재하는지 boolean값으로 반환 합니다.
*/

/*
fixed array로 먼저 구현할것입니다.
array의 장점은 데이터를 마지막에 추가하고 제거할때 O(1) 입니다.
허나 size가 고정되어 있어서 size보다 많이 데이터 추가를 할 수가 없는 단점이 있습니다.
*/

class StackByFixedArray {
  constructor(n) {
    this.maxSize = n;
    this.stack = new Array(n);
    this.topIdx = 0;
  }

  isMaxsize() {
    if (this.topIdx === this.maxSize) {
      return true;
    }
  }

  isEmpty() {
    if (this.topIdx === 0) {
      console.log('빈 데이터 입니다.')
      return true;
    }

  }

  push(value) {
    if (this.isMaxsize()) {
      console.log('더이상 데이터를 추가할 수 없습니다!');
    } else {
      this.stack[this.topIdx] = value;
      ++this.topIdx;
    }
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return this;
    }
    --this.topIdx;
    const endValue = this.stack[this.topIdx];
    this.stack[this.topIdx] = undefined;
    return endValue
  }

  peak() {
    if (this.isEmpty()) {
      return
    }
    return this.stack[this.topIdx - 1];
  }
}

const testStack = new StackByFixedArray(5);
testStack.push(3);
testStack.push(3);
testStack.push(3);
testStack.push(3);
testStack.push(3);
testStack.pop();
testStack.pop();
testStack.pop();
testStack.pop();
testStack.pop();
testStack.pop();
console.log(testStack.stack);


