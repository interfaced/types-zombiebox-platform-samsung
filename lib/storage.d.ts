import IStorage from 'zombiebox/zb/device/interfaces/i-storage';

export default class Storage implements IStorage {
  protected _fs: any;
  protected _prefix: string;
  protected _fileName: string;
  protected _data: object;
  constructor();
  public setKeyPrefix(prefix: string): void;
  public getItem(key: string): string | null;
  public setItem(key: string, data: string): void;
  public removeItem(key: string): void;
  public migrate(destinationStorage: IStorage, prefixes: string[]): void;
  protected _save(): void;
  protected _loadFromFile(): void;
  protected _readData(fileName: string): object;
  protected _migratePrefixedData(prefix: string): void;
  protected _touchDir(path: string): void;
  protected _getZbAppName(): string;
  protected _fileExists(path: string): boolean;
  public static migrate(destinationStorage: IStorage, opt_prefixes?: string[]): void;
}
