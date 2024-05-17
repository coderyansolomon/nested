const ProfileLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <section className="flex-1 p-8 bg-gray-900 text-gray-100">
        <header className="border-b border-gray-700 mb-4 pb-4">
          <h2 className="text-2xl font-semibold">Profile</h2>
        </header>
        <div className="profile-layout">
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Profile Details</h3>
            <p className="text-gray-300">Manage your profile information and settings.</p>
          </div>
          {children}
        </div>
      </section>
    </div>
  );
};

export default ProfileLayout;
