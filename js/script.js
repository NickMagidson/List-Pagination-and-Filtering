/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


// Global Variables

const studentlistItem = document.querySelectorAll('li.student-item');
const numOfItems = 9; 

const numofButtons = Math.ceil(studentlistItem.length / numOfItems); // Rounds it up

console.log(studentlistItem); // Console test

// Function showPage that hides all students except for 10 students (list, page)
function showPage(list, page) {
   let startIndex = (page * numOfItems) - numOfItems;
   let endIndex = page * numOfItems; 
   
   for (let i = 0; i < list.length; i += 1) {
      if (i >= startIndex && i <= endIndex) {
         list[i].style.display = 'block'; // Show it
      } else {
         list[i].style.display = 'none'; // Hide it
      }
   }
};

console.log(showPage(studentlistItem, numofButtons)); // test

// appendPageLinks function will create and append functioning pagination links

function appendPageLinks(list) {
   let div = document.createElement('div'); // Create Div
   let pageDiv = document.querySelector('div.page'); // Grabbing div.page
   div.setAttribute("class", "pagination");
   pageDiv.appendChild(div);
   let ul = document.createElement('ul'); // Create ul
   div.appendChild(ul); 
   for (x = 1; x <= numofButtons; x++) {
      let listItem = document.createElement('li'); // create li
      let listAnchor = document.createElement('a'); // create a
      listItem.className = 'pagination'; // Giving the li a class of pagination
      ul.appendChild(listItem);
      listItem.appendChild(listAnchor);
      listAnchor.setAttribute('href', '#');
      listAnchor.textContent = x;
      if (x === 1) {
         listAnchor.className = 'active';
      }
      listAnchor.addEventListener('click', (e) => {
         let activeItem = document.querySelector(".active");
         activeItem.classList.remove('active');
         e.target.classList.add('active');
         let current = document.getElementsByClassName("active");
         this.className += "active";
         showPage(list, listAnchor.textContent);
      })
   }
};

showPage(studentlistItem, 1);
appendPageLinks(studentlistItem);
console.log(studentlistItem);
