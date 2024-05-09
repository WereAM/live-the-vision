import { createClient } from "@/utils/supabase/server";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";

export default async function DisplayTask() {
  
  const supabase = createClient();
  
  let { data: todos, error } = await supabase
    .from('todos')
    .select("*")
    .order('priority', { ascending: true });

  return (
    <div>      
      {todos!.map((todo) => (
        <div key={todo.id} className="mb-2 p-2 bg-purple-100 rounded-lg shadow flex justify-between items-center">
          <h4 className="scroll-m-20 text-l font-semibold tracking-tight">
            {todo.title}
          </h4>               
          <div className="flex space-x-4">
            <DeleteTask />
            <UpdateTask />
          </div>
        </div>
        ))
      }
    </div>  
  );
}