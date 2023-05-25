const renderFooter = (containerElement, listElement) => {
    const footerBook = document.createElement('div');
    footerBook.classList.add('footer-book');
  
    const container = document.createElement('div');
    container.classList.add('container');
  
    const footerList = listElement.cloneNode(true);
    footerList.classList.add('footer-item');
  
    const link = document.createElement('a');
    link.href = '#';
    link.classList.add('footer-link');
    link.setAttribute('data-modal-open-command', '');
  
    const year = document.createElement('span');
    year.classList.add('footer-year');
    year.textContent = '© 2023';
  
    const text = document.createTextNode(' || Students ');
  
    const goit = document.createElement('span');
    goit.classList.add('footer-goit');
    goit.textContent = 'GO IT';
  
    link.appendChild(year);
    link.appendChild(text);
    link.appendChild(goit);
  
    container.appendChild(footerList);
    container.appendChild(link);
    footerBook.appendChild(container);
  
    containerElement.appendChild(footerBook);
  };

  const containerElement = document.getElementById('your-container-id');
  const listElement = document.createElement('ul');
  
  const listItems = [
    'Thank you for deciding to purchase books from our store!',
    'We are always working to provide you with the best shopping experience',
    'We are always happy to be of assistance and welcome you back to our website',
    'If you have any questions, please don\'t hesitate to contact us. Best regards, the book store team!'
  ];
  
  listItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('footer-list');
  
    const description = document.createElement('p');
    description.classList.add('footer-description');
    description.textContent = item;
  
    listItem.appendChild(description);
    listElement.appendChild(listItem);
  });
  
  renderFooter(containerElement, listElement);

  