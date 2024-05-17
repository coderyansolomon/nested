const SettingsLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <section className="flex-1 p-8 bg-gray-900 text-gray-100">
        <header className="border-b border-gray-700 mb-4 pb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Settings</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
            Save Changes
          </button>
        </header>
        <div className="settings-layout">
          <div className="grid grid-cols-2 gap-8">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingsLayout;
