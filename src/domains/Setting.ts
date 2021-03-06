/// <reference path="../reference.d.ts" />
import freeze from "../decorators/freeze"

@freeze
export default class Setting {

  constructor(private param: {
    slackToken: string,
    slackTokenAlt: string,
    notifyType: string,
    removeMsec: number,
  }) {}

  get slackToken(): string {
    return this.param.slackToken
  }

  get slackTokenAlt(): string {
    return this.param.slackTokenAlt
  }

  get notifyType(): string {
    return this.param.notifyType
  }

  get removeMsec(): number {
    return this.param.removeMsec
  }
}
