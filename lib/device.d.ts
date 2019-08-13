import Rect from 'zombiebox/zb/geometry/rect';
import IVideo from 'zombiebox/zb/device/interfaces/i-video';
import LocalStorage from 'zombiebox/zb/device/common/local-storage';
import AbstractDevice from 'zombiebox/zb/device/abstract-device';
import Info from './info';
import Input from './input';
import Storage from './storage';
import VolumeOSDController from './volume-osd-controller';
import ScreenSaverController from './screen-saver-controller';

export default class Device extends AbstractDevice {
  public EVENT_NETWORK_UNAVAILABLE: string;
  public EVENT_NETWORK_AVAILABLE: string;
  public info: Info;
  public input: Input;
  public storage: Storage | LocalStorage;
  protected _customNetworkChecker?: CustomNetworkChecker;
  protected _volumeOSDController: VolumeOSDController;
  protected _screenSaverController: ScreenSaverController;
  protected _pluginContainer: HTMLElement;
  protected _pluginAPI: any;
  protected _isLastNetworkAvailable: boolean;
  protected _isNetworkCheckStopped: boolean;
  protected _plugins: { [key: string]: HTMLObjectElement };
  protected _networkCheckTimeoutId: number;
  protected _networkCheckIntervalTime: number;
  protected _widgetAPI: any;
  constructor(pluginContainer: HTMLElement);
  public init(): void;
  public createVideo(rect: Rect): IVideo;
  public getMAC(): string;
  public getIP(): string;
  public exit(): void;
  public setOSDOpacity(value: number): void;
  public getOSDOpacity(): number;
  public setOSDChromaKey(chromaKey: string): void;
  public getOSDChromaKey(): string | null;
  public removeOSDChromaKey(): void;
  public hasOSDOpacityFeature(): boolean;
  public hasOSDAlphaBlendingFeature(): boolean;
  public hasOSDChromaKeyFeature(): boolean;
  public isUHDSupported(): boolean;
  public getEnvironment(): object;
  public getLaunchParams(): object;
  public isNetworkAvailable(): boolean;
  public setCustomNetworkChecker(callback?: CustomNetworkChecker): void;
  public getCustomNetworkChecker(): CustomNetworkChecker | null;
  public startNetworkCheck(opt_interval?: number): void;
  public stopNetworkCheck(): void;
  public isNetworkCheckStopped(): boolean;
  public exitToTV(): void;
  public enableScreensaver(turn: boolean): void;
  public enableVolumeOSD(turn: boolean): void;
  public isVolumeOSDEnabled(): boolean;
  public getPlugin(name: string): any;
  public getPluginObject(): any;
  protected _detectTimeDiff(): Promise<number>;
  protected _patchNativeDate(patchDiff: number): void;
  protected _networkCheckTick(): void;
  protected _doNetworkCheck(): Promise<boolean>;
  public static detect(): boolean;
}

export type CustomNetworkChecker = () => Promise<boolean>;
