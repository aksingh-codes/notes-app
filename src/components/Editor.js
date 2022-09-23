const Editor = ({heading, note, children}) => {
  return (
    <div className="d-flex flex-column mt-5">
        <h5 className="text-muted text-center">{heading}</h5>
        <div className="mb-3">
          <label htmlFor="formControlTitle" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="formControlTitle"
            placeholder="Eg. JavaScript Arrays"
            value={note && note.title}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formControlContent" className="form-label">
            Content of your note
          </label>
          <textarea
            className="form-control"
            id="formControlContent"
            rows={10}
            value={note && note.content}
          ></textarea>
        </div>
        {children}
      </div>
  )
}

export default Editor