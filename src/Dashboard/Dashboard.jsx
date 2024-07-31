import Sidebar from "./sidebar/Sidbar";
import Main from "./main/Main";
export const Dashboard = () => {
  return (
    <div className="flex  w-full h-screen bg-white dark:bg-slate-900">
      <section className="w-[10%] sm:w-[15%]">
        <Sidebar />
      </section>
      <section className="flex flex-col w-[90%] sm:w-[85%] overflow-auto">
        <Main />
      </section>
    </div>
  );
};
