// export { save, load };

// function save(key, value) {
//   // зберігає значення в форматі з JSON
//   try {
//     const dataJSON = JSON.stringify(value);
//     localStorage.setItem(key, dataJSON);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function load(key) {
//   // завантажує (віддає) значення в форматі з JSON
//   try {
//     const dataJSON = localStorage.getItem(key);
//     return dataJSON === null ? { shoppinglist } : JSON.parse(dataJSON);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function remove(key) {
//   // видаляє значення в форматі з JSON
//   localStorage.removeItem(key);
// }
// // при натисканні кнопки deleteButton видаляти значення в форматі JSON з localStorage
// const deleteButton = document.querySelector('.delete-shopping-list-btn');
// deleteButton.addEventListener('click', function () {
//   remove('shoppingList');
// });

// window.addEventListener('load', () => {
//   const data = load('shoppinglist');
//   if (data) {
//     // відбувається відображення даних
//   }
//   //     else {
//   // //якщо список пустий
//   //         console.log('This page is empty, add some books and proceed to order.');
//   //     }
// });
