import React from 'react'
import Note from './Note'

const NotesGallery = () => {
  const notes = [
    {id: "0", title: "Title", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?"},
    {id: "1", title: "Title", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?"},
    {id: "2", title: "Title", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?"},
    {id: "3", title: "Title", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?"},
    {id: "4", title: "Title", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?"},
    {id: "5", title: "Title", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?"},
    {id: "6", title: "Title", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?"},
  ]
  return (
    <div>
      Notes Gallery
      {
        notes.map(note => <Note note={note}/>)
      }
    </div>
  )
}

export default NotesGallery