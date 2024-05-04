import { Button } from "./ui/button"
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { addTask } from "@/app/server-actions/addTask";

export default function AddTask(formData:any) {    
        
    return(
        <form action={addTask} className="mb-6">
            {/* <div className="mb-4">
                <label htmlFor='id' className="block mb-2"></label>
                <Input type='number' id='id' name='id' className="rounded w-full" />
            </div> */}
            <div className="mb-4">
                <Label htmlFor='title'>Task</Label>
                <Input type='text' id='title' name='title' /> 
            </div>
            <div className="mb-4">
                <Label htmlFor='priority'>Priority</Label>
                <Input type='number' id='priority' name='priority' /> 
            </div>
            <div className="mb-4">
                <Label htmlFor='createdAt'>Date Created</Label>
                <Input type='date' id='createdAt' name='createdAt' />
            </div>
            <div className="mb-4">
                <Label htmlFor='doneAt' className="block mb-2">Date Completed</Label>
                <Input type='date' id='doneAt' name='doneAt' />
            </div>
            <Button> Add Task </Button>
        </form>
    )
}