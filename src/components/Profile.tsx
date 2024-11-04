import { app } from "configs/firebase";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

export default function Profile() {
  const { currentUser } = getAuth(app);

  const onSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      toast.success("Logout!");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.code);
    }
  };

  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">{currentUser?.email}</div>
          <div className="profile__name">
            {currentUser?.displayName || "Anonymous"}
          </div>
        </div>
      </div>
      <div role="presentation" className="profile__logout" onClick={onSignOut}>
        Logout
      </div>
    </div>
  );
}
