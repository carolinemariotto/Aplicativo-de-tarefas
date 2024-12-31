import { ChevronRightIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Adicionado import de `useNavigate`

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate(); // Adicionado `useNavigate`

  const onSeeDetailsClick = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title); // Corrigido para `task.title`
    query.set("description", task.description); // Corrigido para `task.description`
    navigate(`/task?${query.toString()}`); // Corrigido para usar `navigate`
  };

  return (
    <ul className="space-y-4 p-6 bg-slate-200 shadow rounded-md">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center gap-2 border-b border-slate-300 pb-2 last:border-none"
        >
          {/* Botão para marcar a tarefa como concluída */}
          <button
            onClick={() => onTaskClick(task.id)}
            className={`flex-1 bg-slate-600 text-left text-white p-2 rounded ${
              task.isCompleted ? "line-through opacity-70" : ""
            }`}
          >
            {task.title}
          </button>

          {/* Ícone para mostrar mais detalhes */}
          <button
            onClick={() => onSeeDetailsClick(task)} // Adicionado `onSeeDetailsClick`
            className="bg-slate-400 p-2 rounded-md text-white hover:bg-slate-500 transition"
            aria-label="Mais ações"
          >
            <ChevronRightIcon size={20} />
          </button>

          {/* Botão para deletar a tarefa */}
          <button
            onClick={() => onTaskDelete(task.id)}
            className="bg-red-500 p-2 rounded-md text-white hover:bg-red-600 transition"
            aria-label="Deletar tarefa"
          >
            <TrashIcon size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}

// Validação das props
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired, // Adicionado `description` na validação
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export default Tasks;
