/**
 * queue를 기존의 배열로 구현하게되면 
 * enqueue의 경우 끝에 추가해주는 것이기에 O(1)이 걸림!
 * dequeue의 경우 O(N)이 걸림
 * - 앞의 원소를 제거해주고 나머지 원소들 모두를 앞으로 움직여야 하므로 
 * 그래서 배열을 원형 배열로 생각함
 * 
 * @param {frontIndex} 를 맨앞의 인덱스로
 * @param {rearIndex} 를 맨끝의 인덱스로 구현함
 * 
 * enqueue의 경우 rearIndex만 
 * 1.길이가 이미 배열이 담을수 있는 최대 길이와 같을때 overflow
 * 2.원소를 추가해줄때 rearIndex가 배열 맨끝 인덱스일때 -> 추가해주고 0으로 초기화해줌
 * 
 * deque의 경우 frontIndex만 움직임
 * 1.이미 빈배열일 경우 오류를 통해 유저에게 이미 빈 배열이기에 dequeue할 수 없다고 알려줌!
 * 2.공통사항
 * -frontIndex에 있는 값을 저장
 * -frontIndex를 undefined처리
 * -size -1함
 * 
 * 2.배열의 길이가 1개라면 
 * frontIndex를 
 * 3.frontIndex가 0이라면
 * 4.frontIndex가 0이 아닐때
 */
interface Queue {
  size: number;
  enqueue<T>(value: T): void;
  dequeue<T>(): T;
  isEmpty(): boolean;
}

class QueueImpl implements Queue {
  queue: any[];
  private frontIndex: number;
  private rearIndex: number;
  private maxSize: number;
  private _size: number;

  constructor(n: number) {
    this.queue = new Array(n);
    this.frontIndex = 0;
    this.rearIndex = 0;
    this.maxSize = n;
    this._size = 0;
  }
  get size() {
    return this._size;
  }
  enqueue<T>(value: T): void{
    
    //꽉찼을때
    if (this.size === this.maxSize) {
      console.log("It's already full");
      return 
    }

    //비었을때
    if (this.isEmpty()) {
      this.queue[this.rearIndex] = value;
      ++this._size;
      return
    }
    /**
     * 맨앞 인덱스가 0이면 배열의 끝으로 가줌
     */
    if (this.rearIndex !== this.maxSize-1) {
      ++this.rearIndex;
    } else {
      this.rearIndex = 0;
    }
    this.queue[this.rearIndex] = value;
    ++this._size;
    return
  }

  dequeue(): any{

    //비었을때
    if (this.isEmpty()) {
      throw new Error('this queue is already Empty')
    }
    
    //맨뒤에 인덱스만 움직여주면됨 맨뒤에 인덱스가 끝보다 작아지면 초기화해줌
    const frontValue = this.queue[this.frontIndex];
    this.queue[this.frontIndex] = undefined;

    //길이가 1개일때 frontIndex움직여주면 frontIndex를 역전하는 현상이 생김!
    if (this.size === 1) {
      --this._size;
      return frontValue;
    }
    
    if (this.frontIndex !== this.maxSize - 1) {
      ++this.frontIndex;
    } else {
      this.frontIndex = 0;
    }
    --this._size;
    return frontValue;
    
  }

  isEmpty(): boolean {
    if (this._size === 0) {
      return true;
    }
    return false;
  }

}

const queue: Queue = new QueueImpl(10);


queue.enqueue(3);
console.log(queue);
queue.enqueue(3);
console.log(queue);
queue.enqueue(3);
console.log(queue);
queue.enqueue(3);
console.log(queue.size);
console.log(queue)
while (queue.size > 0) {
  console.log(queue.dequeue());
  console.log(queue);
}
queue.enqueue(3);
queue.enqueue(3);
queue.enqueue(3);
queue.dequeue();
console.log(queue);
