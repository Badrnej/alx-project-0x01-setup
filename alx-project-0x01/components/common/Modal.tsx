import { Post } from "../../interfaces/types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex-1 mr-4">
            {post.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 leading-relaxed">
            {post.body}
          </p>
        </div>
        
        <div className="border-t pt-4 flex justify-between items-center">
          <span className="text-blue-500 font-medium">
            Post #{post.id}
          </span>
          <span className="text-gray-400">
            Par utilisateur #{post.userId}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
