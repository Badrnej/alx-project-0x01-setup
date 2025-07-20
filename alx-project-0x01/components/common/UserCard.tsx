import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
          {name.charAt(0).toUpperCase()}
        </div>
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500 text-sm">@{username}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">Email:</span>
          <span className="ml-2 text-blue-600">{email}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">Phone:</span>
          <span className="ml-2">{phone}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">Website:</span>
          <span className="ml-2 text-blue-600">{website}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">Address:</span>
          <span className="ml-2">{address.street}, {address.city}</span>
        </div>
      </div>
      
      <div className="border-t pt-3">
        <div className="text-sm text-gray-600">
          <p className="font-medium">{company.name}</p>
          <p className="text-xs text-gray-400 italic">"{company.catchPhrase}"</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;
