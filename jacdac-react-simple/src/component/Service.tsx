import { FunctionComponent } from "react";
import { useServices, useRegister, useRegisterValue, useEvent, useEventReceived } from "react-jacdac";
import { SRV_ACCELEROMETER, AccelerometerReg, AccelerometerEvent } from "jacdac-ts";
import type { JDEvent } from "jacdac-ts";
const Service: FunctionComponent = () => {
  const service = useServices({ serviceClass: SRV_ACCELEROMETER })[0];
  const accelReg = useRegister(service, AccelerometerReg.Forces);
  const [x = 0, y = 0, z = 0] = useRegisterValue(accelReg) as [number, number, number];
  const accelEvent = useEvent(service, AccelerometerEvent.Shake)
  useEventReceived(accelEvent, (e: JDEvent) => {
    alert(e.name);
  });
  return (
    <div className="p-2 m-2">
      <div className="p-1 m-1 display-6">Accelerometer</div>
      <div className="p-1 m-1 lead">X: {x}</div>
      <div className="p-1 m-1 lead">Y: {y}</div>
      <div className="p-1 m-1 lead">Z: {z}</div>
    </div>
  )
};
export default Service;