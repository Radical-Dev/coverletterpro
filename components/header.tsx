export default function Header() {
  return (
    <header>
      <nav className="flex items-center align-middle justify-between w-full px-4 py-5 shadow">
        <div className="text-bold text-cyan-700 text-xl w-1/3">
          AppliCrafter
        </div>
        <ul className="menu menu-horizontal bg-base-200 hidden">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
        <div className="w-1/3 flex justify-end ">
          <span className="btn btn-accent btn-outline py-2 px-10">Login</span>
        </div>
      </nav>
    </header>
  );
}
