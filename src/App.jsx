import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"; // Importando AddTask
import { v4 as uuidv4 } from "uuid"; // Corrigindo importação do uuid

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar programação", isCompleted: false },
    { id: 2, title: "Fazer batatinha frita no air fryer", isCompleted: false },
    { id: 3, title: "Ler um livro", isCompleted: false },
  ]);

  useEffect(() => {
    localStorage.setItem("tasks");
  }, [tasks]);
  // Alterna o estado de conclusão da tarefa
  const onTaskClick = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  // Remove a tarefa da lista
  const onTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Adiciona uma nova tarefa
  const onAddTaskSubmit = (title, description) => {
    const newTask = {
      id: uuidv4(), // Gerando um ID único
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); // Adiciona a nova tarefa à lista existente
  };

  return (
    <div className="w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-slate-100 font-bold text-center text-2xl mb-4">
          Gerenciador de Tarefas
        </h1>

        {/* Passando props para o componente AddTask */}
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />

        {/* Passando props para o componente Tasks */}
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
