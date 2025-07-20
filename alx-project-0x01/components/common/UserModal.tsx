import { User } from "../../interfaces/types";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-500">@{user.username}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Informations de contact */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="font-medium text-gray-600 w-24">Email:</span>
                <span className="text-blue-600">{user.email}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-600 w-24">Téléphone:</span>
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-600 w-24">Site web:</span>
                <span className="text-blue-600">{user.website}</span>
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Adresse</h3>
            <div className="text-gray-600">
              <p>{user.address.street}, {user.address.suite}</p>
              <p>{user.address.city} {user.address.zipcode}</p>
              <p className="text-sm text-gray-500 mt-2">
                Coordonnées: {user.address.geo.lat}, {user.address.geo.lng}
              </p>
            </div>
          </div>

          {/* Entreprise */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Entreprise</h3>
            <div className="text-gray-600">
              <p className="font-medium text-gray-800">{user.company.name}</p>
              <p className="italic text-blue-600 mb-2">"{user.company.catchPhrase}"</p>
              <p className="text-sm">{user.company.bs}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4 mt-6 flex justify-center">
          <span className="text-gray-400 text-sm">
            Utilisateur ID: #{user.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
