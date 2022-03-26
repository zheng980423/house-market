import { useState } from 'react';
import { getAuth } from 'firebase/auth';

const Profile = () => {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  return <></>;
};

export default Profile;
