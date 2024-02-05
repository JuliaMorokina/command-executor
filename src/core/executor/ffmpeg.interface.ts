import { ICommandExec } from "./command.interface";

export interface IFfmpegInput {
  width: number;
  height: number;
  path: string;
  name: string;
}

export interface ICommandExecFfmpeg extends ICommandExec {
  output: string;
}
