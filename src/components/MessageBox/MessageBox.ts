import MessageBoxComponent from "./MessageBox.vue";
import { createApp, watch } from "vue";
import { MessageBoxOptions } from "./types";

const MessageBox = (options: MessageBoxOptions): Promise<void> => {
  // 创建一个 Vue 应用实例，将弹窗组件和配置选项传入
  const messageBoxApp = createApp(MessageBoxComponent, options);
  // 返回一个 Promise，用于异步处理弹窗结果
  return new Promise((resolve, reject) => {
    // 显示弹窗
    showMessageBox(messageBoxApp, { resolve, reject });
  });
};

MessageBox["confirm"] = (options: MessageBoxOptions): Promise<void> => {
  // 设置额外字段，标识弹窗类型为确认对话框
  options.field = "confirm";
  // 调用 MessageBox 函数创建并返回 Promise
  return MessageBox(options);
};

const showMessageBox = (
  app: any,
  { resolve, reject }: { resolve: () => void; reject: () => void }
): void => {
  // 创建文档碎片
  const oFragment = document.createDocumentFragment();
  // 将弹窗组件挂载到文档碎片中
  const vm = app.mount(oFragment);
  // 将文档碎片添加到 body 中，显示弹窗
  document.body.appendChild(oFragment);
  // 设置弹窗可见
  vm.setVisible(true);

  // 使用 Vue 的 watch 监听弹窗状态变化
  watch(vm.state, (state) => {
    if (!state.visible) {
      // 根据弹窗状态执行相应的回调
      switch (state.type) {
        case "cancel":
          reject(); // 用户取消操作
          break;
        case "confirm":
          resolve(); // 用户确认操作
          break;
        default:
          break;
      }
      // 隐藏并销毁弹窗
      hideMessageBox(app);
    }
  });
};

const hideMessageBox = (app: any): void => {
  // 使用 Vue 的 unmount 方法卸载组件
  app.unmount();
};

export default MessageBox;
