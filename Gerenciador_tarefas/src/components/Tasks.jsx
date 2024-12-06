import { ChevronRightIcon, Trash, Trash2Icon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { FaCheckCircle } from "react-icons/fa";
import {CiTrash} from "react-icons/ci";
function Tasks({tasks, onDeleteTaskClick, onTaskClick}) {

    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set('title', task.title);
        query.set('description', task.description);
        navigate(`/task?${query.toString()}`);
    }
    
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
        <li className = "flex gap-2" key={task.id}>
        <button
            onClick={() => onTaskClick(task.id)} className="bg-slate-400 text-left w-full text-white p-2 rounded-md flex items-center">
                {task.isCompleted && <FaCheckCircle className="mr-2 text-green-700"/>}
            {task.title}
            </button> 
        <Button 
        onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
        </Button>

        <Button
            onClick={() => onDeleteTaskClick(task.id)}>
            <Trash2Icon/>
        </Button>
        </li>
        ))}
        </ul>
    )
}

export default Tasks