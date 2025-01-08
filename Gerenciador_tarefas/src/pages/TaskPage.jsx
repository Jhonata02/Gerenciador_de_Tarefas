import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";
function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title')
    const description = searchParams.get('description')
    return (
        <div className="h-screen overflow-hidden w-full bg-slate-500 p-6 ">
            <div className="w-screen max-w-3xl mx-auto space-y-4">
                <div className="flex justify-center relative">
                    <button 
                    onClick={() => navigate(-1)}

                    className="absolute left-0 top-0 bottom-0">
                        <ChevronLeftIcon/>
                    
                    </button>
                    
                    <Title>
                      Detalhes da tarefa
                    </Title>
                
                </div>

                <div className="w-full mx-auto max-w-3xl p-4 bg-slate-200 rounded-md">
                    <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div> 
        </div>
    )
}

export default TaskPage