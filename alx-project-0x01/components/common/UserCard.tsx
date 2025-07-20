import { User, UserProps } from "../../interfaces/types";

interface UserCardProps {
  user: User;
  onClick: (user: User) => void;
}

const UserCard: React.FC<UserProps> = ({ user, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
      onClick={() => onClick(user)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {user.name}
          </h3>
          <p className="text-gray-500 text-sm">
            @{user.username}
          </p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">Email:</span>
          <span className="ml-2 text-blue-600">{user.email}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">Téléphone:</span>
          <span className="ml-2">{user.phone}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">Site web:</span>
          <span className="ml-2 text-blue-600">{user.website}</span>
        </div>
      </div>
      
      <div className="border-t pt-3">
        <div className="text-sm text-gray-600">
          <p className="font-medium">{user.company.name}</p>
          <p className="text-xs text-gray-400 italic">"{user.company.catchPhrase}"</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
