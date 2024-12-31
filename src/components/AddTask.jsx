import PropTypes from "prop-types";
import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log({title,description})

  return (
    <div className="bg-slate-200 rounded-md shadow flex flex-col p-4">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md mb-2"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md mb-4"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {

          // verificar o título e a descrição estão preenchidas

          if (!title.trim() || !description.trim()){
            return alert("Preencha o título e a descrição da tarefa.")
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="my-4 bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

// Validação de `onAddTaskSubmit` com PropTypes
AddTask.propTypes = {
  onAddTaskSubmit: PropTypes.func.isRequired,
};

export default AddTask;
