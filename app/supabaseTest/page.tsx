import { QueryResult, QueryData, QueryError } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";

export default async function MoviesWithActorsQuery() {
    const supabase = createClient();

    const { data : movies } = await supabase.from('movies').select(`
        id, 
        name,
        actors (
           actor_name 
        )
    `)

    type MoviesWithActors = QueryData<typeof MoviesWithActorsQuery>

    return (
        MoviesWithActorsQuery as MoviesWithActors
    )
 
}
