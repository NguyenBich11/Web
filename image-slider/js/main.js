document.getElementById('next').onclick = function() {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slider').appendChild(lists[0]);
};

document.getElementById('prev').onclick = function() {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slider').prepend(lists[lists.length-1]);
};