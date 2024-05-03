export default function AppFooter() {
    return(
        <div className="App-header">
            <div className="Container">
                <div className="Task-info-container">
                    <span className="Task-info">Active tasks: </span>
                    <span className="Task-info">Finished tasks: </span>
                </div>
                <span className="Task-info">Kanban board by: </span>
            </div>
        </div>
    )
}