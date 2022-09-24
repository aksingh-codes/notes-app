const Editor = ({title, setTitle, content, setContent, error, heading, children}) => {
  return (
    <form className="d-flex flex-column mt-5">
        <h5 className="text-muted text-center">{heading}</h5>
        <div className="mb-3">
          <label htmlFor="formControlTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className={`form-control ${error?.title && 'is-invalid'}`}
            id="formControlTitle"
            placeholder="Eg. JavaScript Arrays"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <div id="validationFeedback" className="invalid-feedback">
            {error?.title}
          </div>

        </div>
        <div className="mb-3">
          <label htmlFor="formControlContent" className="form-label">
            Content of your note
          </label>
          <textarea
            className="form-control"
            id="formControlContent"
            rows={10}
            value={content}
            onChange={e => setContent(e.target.value)}
          ></textarea>
        </div>
        {children}
      </form>
  )
}

export default Editor