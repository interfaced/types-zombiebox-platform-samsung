export default class VolumeOSDController {
  protected _volumeOSDState: number;
  protected _pluginAPI: any;
  protected _pluginNNAVI: any;
  constructor(pluginAPI: any, pluginNNAVI: any);
  public isVolumeOSDEnabled(): boolean;
  public enableVolumeOSD(turn: boolean): void;
  protected _getVolumeKeys(): number[];
  protected _setVolumeOSDState(state): number;
}
