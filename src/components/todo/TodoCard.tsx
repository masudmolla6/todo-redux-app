import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoCard = () => {
    return (
      <div>
        <div className="bg-gray-300 rounded-md flex justify-between items-center p-2 border">
          <input type="checkbox" name="" id="" />
          <p className="font-semibold">Todo Title</p>
          <p>Time</p>
          <p>Description</p>
          <div className="space-x-4">
            <Button className="bg-red-500 rounded-full"><MdDelete/></Button>
            <Button className="bg-purple-600 rounded-full "><FaEdit/></Button>
          </div>
        </div>
      </div>
    );
};

export default TodoCard;