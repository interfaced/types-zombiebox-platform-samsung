import AbstractViewPort from 'zombiebox/zb/device/abstract-view-port';
import Rect from 'zombiebox/zb/geometry/rect';
import { AspectRatio } from 'zombiebox/zb/device/aspect-ratio/aspect-ratio';

export default class ViewPort extends AbstractViewPort {
  protected _plugin: any;
  protected _videoInfo: { width: number; height: number };
  protected _pluginScaleRatio: number;
  constructor(containerRect: Rect, plugin: any);
  public updateViewPort(): void;
  public isAspectRatioSupported(ratio: AspectRatio): boolean;
  public hasAspectRatioFeature(): boolean;
  public hasAreaChangeFeature(): boolean;
  public updateVideoInfo(): void;
  public resetVideoInfo(): void;
  protected _isAutoProportion(): boolean;
  protected _isCropTransferring(): boolean;
  protected _isLetterboxTransferring(): boolean;
  protected _calculateCropArea(): Rect;
  protected _calculateScreenArea(): Rect;
  protected _getAspectRatioMultiplier(): number;
}
