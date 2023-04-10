import { FunctionComponent } from "react";
import { useBus, useChange } from "react-jacdac";
import Connection from "./component/Connection";
import Service from "./component/Service";
const App: FunctionComponent = () => {
  const bus = useBus();
  const connected = useChange(bus, _ => _.connected);
  return (
    <div className="container-sm">
      <div className="p-2 m-2 fs-5">
        Bus {connected ? "connected" : "not connected"}
      </div>
      {connected ?
        <Service />
        :
        <Connection bus={bus} />}
    </div>
  )
}
export default App;