export default class Audio {
  protected _pluginAudio: any;
  protected _pluginTV: any;
  constructor(pluginAudio: any, pluginTV: any);
  public up(): RESULT;
  public down(): RESULT;
  public toggleMute(): RESULT;
  public isMuted(): boolean;
  public setMuted(val): boolean;
  public getVolume(): number;
  protected _checkDevice(): RESULT;
}

export enum RESULT {
  IGNORED,
  SILENT_APPLY,
  APPLY,
}
