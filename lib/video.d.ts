import AbstractVideo from 'zombiebox/zb/device/abstract-video';
import Rect from 'zombiebox/zb/geometry/rect';
import ViewPort from './view-port';
import Audio from './audio';
import ScreenSaverController from './screen-saver-controller';
import VolumeOSDController from './volume-osd-controller';

export default class Video extends AbstractVideo {
  protected _viewport: ViewPort;
  protected _screenSaverController: ScreenSaverController;
  protected _volumeOSDController: VolumeOSDController;
  protected _pluginPlayer: any;
  protected _pluginAudio: any;
  protected _pluginTV: any;
  protected _audio: Audio;
  constructor(
    rect: Rect,
    screenSaverController: ScreenSaverController,
    volumeOSDController: VolumeOSDController,
    hardwareVersion: string,
    pluginPlayer: any,
    pluginAudio: any,
    pluginTV: any
  );
  public play(url: string, opt_startFrom?: number): void;
  public resume(): void;
  public pause(): void;
  public stop(): void;
  public forward(): boolean;
  public rewind(): boolean;
  public destroy(): void;
  public setPlaybackRate(rate: number): void;
  public getPlaybackRate(): number;
  public setPosition(milliseconds: number): void;
  public getPosition(): number;
  public getDuration(): number;
  public setVolume(value: number): void;
  public getVolume(): number;
  public getUrl(): string;
  public togglePause(): void;
  protected _createViewPort(containerRect: Rect): ViewPort;
  protected _setInternalPlaybackRate(rate: number): void;
  protected _bindPluginListeners(): void;
  protected _unbindAllListeners(listener: string): void;
  protected _onBufferingComplete(): void;
  protected _onBufferingStart(): void;
  protected _onConnectionFailed(): void;
  protected _onNetworkDisconnected(): void;
  protected _onRenderError(): void;
  protected _onStreamNotFound(): void;
  protected _onAuthFailed(): void;
  protected _onCurrentPlayTime(position: string): void;
  protected _onRenderingComplete(): void;
  protected _onStreamInfoReady(): void;
  protected _onResolutionChanged(): void;
  protected _reset(): void;
  protected _createGlobalMethod(method: () => void): string;
  protected _startPlayFromPosition(): void;
  protected _finishPlayFromPosition(): void;
  protected _minimizeDisplayArea(state: boolean): void;
}

export const PLAY_FROM_POSITION_DELAY: number;
