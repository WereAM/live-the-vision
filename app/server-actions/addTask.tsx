'use server';
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {

    const id = formData.get('id');
    const  title = formData.get('title');
    const  priority = formData.get('priority');
    const  createdAt = formData.get('createdAt');
    const  doneAt = formData.get('getdoneAt');

    const supabase = createClient();

    const { data : todos } = await supabase
        .from('todos')
        .insert([
            {
                id,
                title,
                priority,
                createdAt,
                doneAt
            }
        ])
    
    revalidatePath('/todos');
}