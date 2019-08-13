import AbstractInput from 'zombiebox/zb/device/abstract-input';
import Keys from 'zombiebox/zb/device/input/keys';

export default class Input extends AbstractInput {
  public isPointingDeviceSupported(): boolean;
  public enablePointingDevice(): void;
  public disablePointingDevice(opt_timeout?: number): void;
  public isPointingDeviceActive(): boolean;
  protected _createKeysMap(): { [key: number]: Keys };
}
