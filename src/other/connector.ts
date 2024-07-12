import { setTimeout } from "timers";
import { errorLogger } from "./logging";
import { IConnectorStatic, staticImplements } from "./connectorbase";

/**
 * this class extends the IConnector interface. it connects to our backend system
 * TODO connect it
 */
@staticImplements<IConnectorStatic>()
export class Connector {
  /**
   * timeout for when we can start implementation of functionality Connector
   * @param ms
   */
  static timeout(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static async connect(): Promise<void> {
    try {
      await Promise.all([Connector.timeout(1000)]);
      if (Math.random() > 0.3) throw new Error("FAIL");
    } catch (err) {
      errorLogger(err);
    }
  }
}
