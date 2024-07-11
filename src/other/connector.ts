import { setTimeout } from "timers";
import { errorLogger } from "./logging";
import { IConnectorStatic, staticImplements } from "./connectorbase";

/**
 * this class extends the IConnector interface. it connects to our backend system
 * TODO connect it
 */
@staticImplements<IConnectorStatic>()
export class Connector {
    static async connect(): Promise<void> {
        try {
            setTimeout(() => {
                if (Math.random() > 0.3) throw new Error('FAIL');
            }, 1000)
          } catch (err) {
            errorLogger(err);
          }
    }
}