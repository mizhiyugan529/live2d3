/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LAppDelegate } from './lappdelegate';
import {BackImageName, ModelDir, ModelDirSize, ResourcesPath} from "./lappdefine";

/**
 * ブラウザロード後の処理
 */
// window.onload = (): void => {
//   console.log("页面加载完毕")
//   // create the application instance
//   if (LAppDelegate.getInstance().initialize() == false) {
//     console.log("初始化失败")
//     return;
//   }
//
//   LAppDelegate.getInstance().run();
//   console.log("开始启动")
// };
// document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.
export const win: any = window

win.initModel=function(){
  subSomething();
}
function subSomething()
{

      console.log("页面加载完毕")
  // create the application instance
  if (LAppDelegate.getInstance().initialize() == false) {
    console.log("初始化失败")
    return;
  }

  LAppDelegate.getInstance().run();
  console.log("开始启动")
  }



/**
 * 終了時の処理
 */
window.onbeforeunload = (): void => LAppDelegate.releaseInstance();
