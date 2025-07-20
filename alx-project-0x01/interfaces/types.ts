export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostProps {
  post: Post;
  onClick?: (post: Post) => void;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserProps {
  user: User;
  onClick: (user: User) => void;
}
