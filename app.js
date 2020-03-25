const addForm = document.querySelector(".add");
const list = document.querySelector('.todos');
const err = document.querySelector('.err');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>
`
    list.innerHTML += html;
}

// Add items to the todo list  
addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim().toLowerCase();
    if (todo.length) {
        generateTemplate(todo);
        err.classList.add('d-none');
        addForm.reset();

    }
});

// Delete items from the list
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    if (!list.getElementsByTagName('li').length) {
        err.classList.remove('d-none');
    }
});

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))
}

// Keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
