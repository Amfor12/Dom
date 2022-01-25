
let comments = {
    name: 'Alex',
    comment: 'Hi, i am Alex',
    child: {
      name: 'John',
      comment: 'How are you, Alex?',
      child: {
        name: 'Vic',
        comment: 'i like it',
        child: {},
      },
    }
  };


const body = document.body;
let commentElem; 
let commentObj;

  function commentLog (a) {
      if (a.child) {
        commentElem = `${a.name} ${a.comment}`
        commentObj = document.createElement("p")
        commentObj.textContent = commentElem;
        commentObj.classList.add("comment")
        body.append(commentObj)
       
        return commentLog(a.child)
      } 
  }

  commentLog(comments);