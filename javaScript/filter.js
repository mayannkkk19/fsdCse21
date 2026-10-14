//queue has ids which are to be sent to mark as read to server
let queue = [101, 103, 105, 104, 106, 107];

//this array contains the ids to be marked as unread
const ids_to_remove = new Set([103, 106]);


//filtering in order to avoid conflicts between mark as unread and read
queue = queue.filter((id) => {
  return !ids_to_remove.has(id);
});


console.log(queue);