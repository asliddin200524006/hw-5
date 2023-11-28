//задание 1

// function TextFirstLi() {
//     const firstLi = document.querySelector('li');
//     return firstLi ? firstLi.textContent : null;
// }

// const result = TextFirstLi();
// console.log(result);


//------------------------------------------------

//задание 2

// function TextFirstLi() {
//     const liElements = document.querySelectorAll('li');
//     const textArray = [];

//     liElements.forEach(li => {
//         textArray.push(li.textContent);
//     });

//     return textArray;
// }

// const resultArray = TextFirstLi();
// console.log(resultArray);

//-----------------------------------------------------

//задание 3

// function TextsListItems(){
//     const listItemElement = document.querySelectorAll('.list-item');
//     const textArray = [];

//     listItemElement.forEach(listItemElement => {
//         textArray.push(listItemElement.textContent);
//     });

//     return textArray;
// }

//     const resultArray = TextsListItems();
//     console.log(resultArray);

//метод 2

// function TextsListItems() {
//     const listItemElements = document.querySelectorAll('.list-item');
//     return Array.from(listItemElements, item => item.textContent);
// }

// const resultArray = TextsListItems();
// console.log(resultArray);

//-------------------------------------------------

//задание 4

// function ClassListItems() {
//     const listItemElements = document.querySelectorAll('.list-item');
//     return Array.from(listItemElements, item => item.getAttribute('class'));
// }

// const resultArray = ClassListItems();
// console.log(resultArray);


//---------------------------------------------------------


//задание 5

// function ClassListItems() {
//     const listItemElements = document.querySelectorAll('.list-item');
//     return Array.from(listItemElements, item => item.getAttribute('data-test-id'));
// }

// const resultArray = ClassListItems();
// console.log(resultArray);



//---------------------------------------------------------------


//задание 6


// function findMismatchedElements() {
//     const mismatchedElements = [];

//     document.querySelectorAll('.list-item').forEach(item => {
//         const text = item.textContent.toLowerCase().trim();
//         const classList = item.classList;

//         if (!classList.contains(text)) {
//             const dataTestId = item.getAttribute('data-test-id');
//             mismatchedElements.push(dataTestId);
//         }
//     });

//     return mismatchedElements;
// }

// const resultArray = findMismatchedElements();
// console.log(resultArray);