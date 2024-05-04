import AddTask from "@/components/AddTask";
import DisplayTask from "@/components/DisplayTask";
import { createClient } from "@/utils/supabase/server";

export default async function ToDo() {
    const supabase = createClient();

    let { data : todos } = await supabase
        .from('todos')
        .select("*")
        .order('priority', { ascending: true });

    return (
        <div className="max-w-4xl mx-auto mt-5">
            <h1 className="text-center text-2xl my-5 font-bold">My To-Do List</h1>
            <AddTask />
            {/* <DisplayTask /> */}
            {/* <p> {JSON.stringify(todos)}</p> */}
        </div>
        
    );
}