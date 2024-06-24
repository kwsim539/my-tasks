const ShowTask = ({tasklist, setTasklist, handleEdit, handleDelete}) => {
    return (
        <section className='showTask'>
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <span className="clearAll" onClick={() => setTasklist([])}>Complete All</span>
            </div>
            <ul>
                {tasklist.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)} title="Edit Task"></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(task.id)} title="Complete Task"></i>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ShowTask;
