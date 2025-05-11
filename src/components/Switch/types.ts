//  开关尺寸类型
export type SwitchSize = "large" | "small";

//  开关值类型
export type SwitchValueType = string | number | boolean;

// 开关组件的 Props
export interface SwitchProps {
  modelValue?: SwitchValueType; // 开关的值，支持字符串、数字、布尔类型
  disabled?: boolean; // 是否禁用开关
  name?: string; // 开关的名称
  size?: SwitchSize; // 开关的尺寸，支持 'large'、'small'
  activeText?: string; // 打开状态的文本
  inactiveText?: string; // 关闭状态的文本
  activeColor?: string; // 打开状态的颜色
  inactiveColor?: string; // 关闭状态的颜色
  activeValue?: SwitchValueType; // 打开状态的值，支持字符串、数字、布尔类型，默认为 true
  inactiveValue?: SwitchValueType; // 关闭状态的值，支持字符串、数字、布尔类型，默认为 false
  inlinePrompt?: boolean; // 是否使用行内提示样式
}

// 开关组件的事件
export interface SwitchEmits {
  (e: "update:modelValue", value: SwitchValueType): void;

  (e: "change", value: SwitchValueType): void; // change事件
}
