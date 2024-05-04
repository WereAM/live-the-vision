import { createClient } from "@/utils/supabase/server";
import { Button } from "./ui/button"

export default async function DeleteTask ({}) {
    const supabase = createClient();

    const { data : todos } = await supabase
        .from('todos')
        .select("*")

  return (
    <div>
        <form action={'deleteTask'}>
            {/* <input type='hidden' name="id" value={todo.id} /> */}
            <input type='hidden' name="id" />
            <Button type='submit'>
                Delete
            </Button>
        </form>
    </div>
  )
}
