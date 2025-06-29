document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const counter = document.getElementById('counter');
  const plusBtn = document.getElementById('plus');
  const minusBtn = document.getElementById('minus');
  const heartBtn = document.getElementById('heart');
  const pauseBtn = document.getElementById('pause');
  const commentForm = document.getElementById('comment-form');
  const likesList = document.querySelector('.likes');
  
  // State variables
  let count = 0;
  let timer;
  const likes = {};
  
  // Timer function
  function startTimer() {
    timer = setInterval(() => {
      count++;
      counter.textContent = count;
    }, 1000);
  }
  
  // Start the timer initially
  startTimer();
  
  // Plus button
  plusBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
  });
  
  // Minus button
  minusBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
  });
  
  // Heart button
  heartBtn.addEventListener('click', () => {
    if (!likes[count]) {
      likes[count] = 1;
      const li = document.createElement('li');
      li.id = `like-${count}`;
      li.textContent = `${count} has been liked 1 time`;
      likesList.appendChild(li);
    } else {
      likes[count]++;
      const li = document.getElementById(`like-${count}`);
      li.textContent = `${count} has been liked ${likes[count]} times`;
    }
  });
  
  // Pause button
  pauseBtn.addEventListener('click', () => {
    if (pauseBtn.textContent === 'pause') {
      clearInterval(timer);
      plusBtn.disabled = true;
      minusBtn.disabled = true;
      heartBtn.disabled = true;
      pauseBtn.textContent = 'resume';
    } else {
      startTimer();
      plusBtn.disabled = false;
      minusBtn.disabled = false;
      heartBtn.disabled = false;
      pauseBtn.textContent = 'pause';
    }
  });
  
  // Comment form
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value;
    
    if (comment.trim()) {
      const commentsList = document.getElementById('list');
      const p = document.createElement('p');
      p.textContent = comment;
      commentsList.appendChild(p);
      commentInput.value = '';
    }
  });
});