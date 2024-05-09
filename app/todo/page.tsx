import AddTask from "@/components/AddTask";
import DisplayTask from "@/components/DisplayTask";
import { createClient } from "@/utils/supabase/server";

export default async function ToDo() {
    const supabase = createClient();

    return (
        <div className="max-w-4xl mx-auto mt-5">
            <h1 className="text-center text-2xl my-5 font-bold">My To-Do List</h1>
            <div>
                <AddTask />
                <DisplayTask />
            </div>
        </div>
        
    );
}