import { FunctionComponent } from "react";
import type { JDBus } from "jacdac-ts";
interface Props {
  bus: JDBus
}
const Connection: FunctionComponent<Props> = (props) => {
  return (
    <div className="p-2 m-2">
      <button
        type="button"
        className="p-1 m-1 btn btn-lg btn-secondary"
        onClick={() => props.bus.connect()}>
        Connect bus
      </button>
    </div>
  )
};
export default Connection;
export {};