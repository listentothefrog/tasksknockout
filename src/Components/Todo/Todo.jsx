import "./Todo.css"
import AddIcon from '@material-ui/icons/Add';

function Todo() {
    return (
        <div className="todoBoxContainer">
            <div className="todoBoxInner">
                <div className="todoInputsContainer">
                    <form className="todoFormContainer" action="submit">
                        <div className="todoAddContainer">
                            <input placeholder="   What are your tasks?" className="todoFormInput"/>
                            <input placeholder="   Priority(High,Medium,Low)" className="todoPriority"/>
                            <button className="todoAddToList">Add it</button>
                        </div>
                    </form>
                    <div className="userTodosContainer">
                        <h1>Your Tasks</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
