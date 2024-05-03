import Header from "./Header";
import CartOverview from "../features/card/CartOverview";
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto] ">
      {loading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className=" mx-auto max-w-3xl  ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
