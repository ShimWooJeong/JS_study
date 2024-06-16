const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    /* 작성한 toDos array의 내용을 localStorage에 넣기 */
    /* string 형식으로 저장하기 위해 JSON.stringify 활용 */
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    /* event.target = 클릭된 HTML element = button */
    /* parentElement = 클릭된 element의 부모 = li */
    const target = event.target.parentElement;
    target.remove();
    /* 클릭했던 li(target)의 id를 갖고 있는 toDo를 지우고 반환받은 array를 toDos에 업데이트 */
    /* 그런데 우리가 지우려는 localStorage의 id는 number 타입이고,
       target의 id는 string 타입이기 때문에 형변환이 필요하다. */
    toDos = toDos.filter((toDo) => toDo.id != parseInt(target.id));
    /* localStorage에서 todo를 지우고 나서 update된 array를 save함 */
    saveToDos();
}

function paintToDo(newToDoOject) {
    /* ul 태그 안에 넣어줄 li와 li 태그 안에 넣어줄 span 태그 element 생성 */
    const toDoList_li = document.createElement('li');
    /* 각각의 li를 구분하기 위해 id 할당 */
    toDoList_li.id = newToDoOject.id;
    const toDoList_span = document.createElement('span');
    /* 생성한 span element에 newToDo 할당 */
    toDoList_span.innerText = newToDoOject.text + ' ';

    /* todo_list에 추가된 후 삭제할 수 있도록 btn element 생성 */
    const delete_btn = document.createElement('button');
    delete_btn.innerText = '❌';
    delete_btn.addEventListener('click', deleteToDo);

    /* 생성한 element들을 추가해줌 */
    toDoList_li.appendChild(toDoList_span);
    toDoList_li.appendChild(delete_btn);

    toDoList.appendChild(toDoList_li);
}

function handleToDoSubmit(event) {
    /* enter -> submit 되면서 새로고침되는 기본동작을 막음 */
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';

    const newToDoOject = {
        text: newToDo,
        /* Date.now(): 밀리초 반환, 여기서 random의 역할을 대신 함 */
        id: Date.now(),
    };

    /* 새로운 toDo를 submit할 때마다 localStorage에 저장하기 위해 toDos array에 Object형으로 push */
    toDos.push(newToDoOject);
    paintToDo(newToDoOject);
    /* saveToDos가 호출되는 시점에는 이미 toDos에 newToDo가 들어있기 때문에 인자 x */
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

/* localStorage에서 todos 가져오기 */
const savedToDos = localStorage.getItem(TODOS_KEY);

/* localStorage에 todos가 존재한다면, 즉 null이 아니라면 */
if (savedToDos != null) {
    /* 디코딩 함으로써 JavaScript object로 바꿔줌 */
    const parsedToDos = JSON.parse(savedToDos);
    /* toDos에 localStorage에 저장되어있는 이전 값들을 할당 */
    toDos = parsedToDos;
    /* array에 있는 각각의 item(Object)에 대해 function을 실행 */
    parsedToDos.forEach(paintToDo);
}
