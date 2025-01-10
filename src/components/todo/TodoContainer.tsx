import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
    return (
      <div>
        <div className="flex justify-between my-3">
          <AddTodoModal/>
          <TodoFilter/>
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl p-3">
          <div className=" w-full h-full rounded-lg space-y-3">
            <TodoCard />
            <TodoCard />
            <TodoCard />
          </div>
          {/* <div className="bg-white flex justify-center items-center p-3 text-2xl rounded-md font-bold">
                    <p>There is no task pending.</p>
                </div> */}
        </div>
      </div>
    );
};

export default TodoContainer;