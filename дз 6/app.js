// Select the necessary DOM elements
const createButton = document.querySelector('#create_button');
const input = document.querySelector('#input');
const todoList = document.querySelector('.todo_list');

// Reusable function to handle the creation of a todo
const handleCreateTodo = () => {
    const value = input.value.trim();

    if (!value) {
        return alert('Произошла ошибка, введите какой-нибудь текст');
    }

    // Todo container
    const div = document.createElement('div');
    div.className = 'block_text';

    // Buttons container
    const divButton = document.createElement('div');
    divButton.className = 'div_button';

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete_button';
    deleteButton.textContent = 'DELETE';
    deleteButton.onclick = () => div.remove();

    // Edit button and edit text field
    const editButton = document.createElement('button');
    const editText = document.createElement('input');

    editButton.className = 'edit_button';
    editButton.textContent = 'EDIT';

    editText.type = 'text';
    editText.style.display = 'none'; // Initially hide the input field

    editButton.onclick = () => {
        text.style.display = 'none';
        editText.value = text.textContent;
        editText.style.display = 'block';
        editText.focus();
    };

    editText.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            if (editText.value.trim() !== '') {
                text.textContent = editText.value.trim();
            }
            text.style.display = 'block';
            editText.style.display = 'none';
        }
    });

    // Todo text
    const text = document.createElement('span'); // using span instead of h3 for text
    text.innerText = value;

    // Append elements together
    divButton.append(deleteButton, editButton);
    div.append(text, editText, divButton);

    // Add the new todo to the list
    todoList.prepend(div);

    // Reset the input field
    input.value = '';
};

// Attach the event listeners
createButton.onclick = handleCreateTodo;

// Simplify keydown event on the window
window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleCreateTodo();
    }
});

