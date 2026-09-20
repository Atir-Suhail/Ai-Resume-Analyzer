export default function Navbar() {
  return (
    <header
  className="
  bg-white
  border-b
  border-slate-200
  px-8
  py-5
  flex
  items-center
  justify-between
  sticky
  top-0
  z-40
  "
>

      {/* Left Side */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Welcome, Atir 👋
          
        </h2>
        
        <p className="text-sm text-gray-500">
          Manage your resumes and AI analysis
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search Box */}
       <input
  type="text"
  placeholder="Search resumes..."
  className="
  w-72
  border
  border-slate-300
  rounded-xl
  px-4
  py-2
  outline-none
  focus:ring-2
  focus:ring-blue-500
  "
/>

        {/* Notification */}
       <div className="relative cursor-pointer">
  <span className="text-xl">🔔</span>

  <span
    className="
    absolute
    -top-2
    -right-2
    bg-red-500
    text-white
    text-xs
    w-5
    h-5
    rounded-full
    flex
    items-center
    justify-center
    "
  >
    3
  </span>
</div>  

        {/* Profile */}
       <div className="flex items-center gap-3">
  <div
    className="
    w-10
    h-10
    rounded-full
    bg-gradient-to-r
    from-blue-600
    to-cyan-500
    text-white
    flex
    items-center
    justify-center
    font-bold
    "
  >
    A
  </div>

  <div className="hidden md:block">
    <p className="font-semibold text-slate-800">
      Atir
    </p>

    <p className="text-xs text-gray-500">
      Free Plan
    </p>
  </div>
</div>

      </div>

    </header>
  );
}