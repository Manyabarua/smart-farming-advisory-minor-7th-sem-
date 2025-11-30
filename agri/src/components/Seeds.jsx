export default function Seeds() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* LEFT SIDE MENU */}
        <div className="bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>

          <div className="space-y-4">
            <button className="w-full text-left py-2 px-3 rounded-lg bg-gray-200 hover:bg-gray-300">
              Winters
            </button>

            <button className="w-full text-left py-2 px-3 rounded-lg bg-gray-200 hover:bg-gray-300">
              Summers
            </button>

            <button className="w-full text-left py-2 px-3 rounded-lg bg-gray-200 hover:bg-gray-300">
              Seeds
            </button>
          </div>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="md:col-span-3 bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-4">Seeds</h2>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-28 bg-gray-300 rounded-lg shadow-sm"
              ></div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
