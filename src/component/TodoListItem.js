import { MdCheckBoxOutlineBlank, MdCheckBox,  } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import cn from 'classnames';
import './TodoListItem.scss';

function TodoListItem({todo, onRemove, onToggle}) {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <FaTrash />
            </div>
        </div>
    );
}

export default TodoListItem;