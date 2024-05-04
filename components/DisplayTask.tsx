import { createClient } from "@/utils/supabase/server";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";

export default async function DisplayTask() {
    const supabase = createClient();

    let { data : todos } = await supabase
        .from('todos')
        .select("*")
        .order('priority', { ascending: true });


    return (
        <>
          <p> {JSON.stringify(todos)}</p>
          {
            todos.map((todo) => (
              <div key={todo.id}>
                <p>{todo.task}</p>
                <div className="flex space-x-2">
                  <DeleteTask />
                  <UpdateTask />
                </div>
              </div>
            ))
          }
        </>  
    );
}