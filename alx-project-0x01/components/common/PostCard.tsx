import { Post, PostProps } from "../../interfaces/types";

interface PostCardProps {
  post: Post;
  onClick: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
      onClick={() => onClick(post)}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {post.body}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-blue-500 text-sm font-medium">
          Post ID: {post.id}
        </span>
        <span className="text-gray-400 text-sm">
          User ID: {post.userId}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
